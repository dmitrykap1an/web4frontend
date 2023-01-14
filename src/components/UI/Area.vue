<template>
  <div class="input-image">
    <div class="img">
      <p class="align_center">
        <canvas id="area" height="280" width="400" v-on:click="mouseEvent"/>
      </p>
    </div>
    <error-message :visible="visibility" :message="error"></error-message>
  </div>
</template>

<script>
import store from "@/vuex/vuex";
import {toRaw} from "vue";

export default {
  name: "DotArea",
  data() {
    return {
      canvas: '',
      ctx: '',
      areaDots: [],
      visibility: 'hidden',
      error: ''
    }
  },
  methods: {
    line(x1, y1, x2, y2, lineWidth) {
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = 'black'
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()
    },

    drawText(text, x, y, maxWidth) {
      this.ctx.font = "8pt Arial";
      this.ctx.strokeText(text, x, y, maxWidth);
    },

    drawCircle(x, y, radios, startAngle, endAngle) {
      this.ctx.moveTo(x, y);
      this.ctx.arc(x, y, radios, startAngle, endAngle, false);
      this.ctx.lineTo(x, y);
      this.ctx.stroke()
    },

    addDots(x, y, r, matched) {
      let coordinateX = 200 + (x * 120) / r
      let coordinateY = 140 - (y * 120) / r
      this.ctx.fillStyle = matched ? "green" : "red";
      this.ctx.fillRect(coordinateX, coordinateY, 2, 2)
    },

    mouseEvent(event) {
      const r = toRaw(store.state.r)
      if(!isNaN(r) && r !== 0){
        const x = parseFloat((r * (event.offsetX - 200) / 120).toFixed(3))
        const y = parseFloat((r * (140 - event.offsetY) / 120).toFixed(3))
        this.sendDot(x, y, r)
        this.visibility = 'hidden'
      } else{
        this.setError("Выберете r!")
      }

    },
    setError(message){
      this.error = message
      this.visibility = 'visible'
    },
    sendDot(x, y, r) {
      store.dispatch('sendDot', {x: x, y: y, r: r})
    }
  },
  computed: {
    dots() {
      return store.state.dots.length
    }
  },
  watch: {
    dots() {
        this.areaDots = toRaw(store.state.dots)
        Array.prototype.forEach.call(this.areaDots, dot => {
          this.addDots(dot.x, dot.y, dot.r, dot.hitResult === "Точка попала в область")
      })
    }
  },
  mounted() {
    this.canvas = document.getElementById("area")
    this.ctx = this.canvas.getContext("2d")
    this.line(70, 140, 330, 140, 2) //x
    this.line(200, 10, 200, 270, 2) //y

    this.line(80, 135, 80, 145, 2) //-R(80, 140) (x)
    this.line(140, 135, 140, 145, 2) //-R/2(140, 140) (x)
    this.line(320, 135, 320, 145, 2) //R(320, 140) (x)
    this.line(260, 135, 260, 145, 2) //R/2(260, 140) (x)

    this.drawText("-R", 75, 157, 10); //x
    this.drawText("-R/2", 135, 157, 20) //x
    this.drawText("R/2", 265, 157, 20) //x
    this.drawText("R", 315, 157, 10) //x

    this.line(195, 20, 205, 20, 2) //R(200, 20) (y)
    this.line(195, 80, 205, 80, 2) //R/2(200, 80) (y)
    this.line(195, 260, 205, 260, 2) //-R(200, 260) (y)
    this.line(195, 200, 205, 200) //-R/2(200, 200) (y)

    this.drawText("R", 212, 25, 10) //y
    this.drawText("R/2", 212, 85, 20) //y
    this.drawText("-R/2", 212, 205, 20) //y
    this.drawText("-R", 212, 265, 10) //y

    this.line(80, 140, 200, 260, 2) //линия во 3 координатной четверти

    this.line(80, 140, 80, 80)//Прямоугольник во 2 координатной четверти
    this.line(200, 80, 80, 80)

    this.drawCircle(200, 140, 60, 0, Math.PI / 2) //Дуга окружности в 4 четверти
  }
}
</script>

<style scoped>
.input-image {
  margin-top: 10%;
  background-color: white;
  border-radius: 24px;
  line-height: 270%;
  margin-left: 13%;
  width: 30%;
  height: 100%;
}

.align_center {
  text-align: center;
}

.img {
  overflow: hidden;
  justify-content: center;
}
</style>