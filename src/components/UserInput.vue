<template>
  <div class="input-data">
    <radio-input description="Выбор X" :values="xValues" validate-by="validateX" v-on:validateX="setX"
                 name="x"></radio-input>
    <div class="block_description">Выбор Y</div>
    <input type="text" v-model="inputY" maxlength="5">
    <radio-input description="Выбор R" :values="rValues" validate-by="validateR" v-on:validateR="setR"
                 name="r"></radio-input>
    <my-button title="Отправить" @click="validate"></my-button>
    <error-message :visible="visibility" :message="error"></error-message>
  </div>


</template>

<script>
import RadioInput from "@/components/UI/RadioInput";
import MyButton from "@/components/UI/MyButton";
import ErrorMessage from "@/components/UI/ErrorMessage";
import store from "@/vuex/vuex";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserInput",
  components: {ErrorMessage, MyButton, RadioInput},
  data() {
    return {
      xValues: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
      rValues: [1, 1.5, 2, 2.5, 3],
      inputX: NaN,
      inputY: '',
      inputR: NaN,
      visibility: 'hidden',
      error: ''
    }
  },
  computed:{
    ...mapGetters([
      'getDots'
    ]),
  },
  methods: {
    ...mapActions([
        'sendDot'
    ]),

    validateY() {
      const y = Number.parseFloat(this.inputY.replace(',', '.')).toFixed(3)
      if (!isNaN(y) && y >= -5 && y <= 5) {
        return {
          status: true,
          value: y,
          errorMessage: ""
        }
      } else {
        if (isNaN(y)) {
          return {
            status: false,
            value: y,
            errorMessage: "Y должен быть представлен числом!"
          }
        } else if (!(y >= -5 && y <= 5)) {
          return {
            status: false,
            return: NaN,
            errorMessage: "Y должен быть в промежутке [-5,5]!"
          }
        }
      }
    },
    setX(value) {
      this.inputX = value
    },

    setR(value) {
      this.inputR = value
      store.state.r = value
    },
    checkX() {
      return {
        status: !isNaN(this.inputX),
        value: this.inputX,
        errorMessage: !isNaN(this.inputX) ? "" : "Выберете X!"
      }
    },
    checkR() {
      return {
        status: !isNaN(this.inputR),
        value: this.inputR,
        errorMessage: !isNaN(this.inputR) ? "" : "Выберете R!"
      }
    },
    validate() {
      const x = this.checkX()
      const y = this.validateY()
      const r = this.checkR()
      const errorArr = [x.errorMessage, y.errorMessage, r.errorMessage]
      if (x.status && y.status && r.status) {
        this.sendDot(x.value, y.value, r.value)
        this.clearError()
      } else {
        let errorString = ""
        errorArr.forEach(function (value) {
          if (value !== "") {
            errorString += value + "\n"
          }
        })
        this.setError(errorString)
      }
    },
    sendDot(x, y, r){
      store.dispatch('sendDot', {x: x, y: y, r: r})
    },
    setError(message) {
      this.visibility = 'visible'
      this.error = message
    },
    clearError() {
      this.error = ''
      this.visibility = 'hidden'
    }
  }
}
</script>

<style scoped>
.block_description {
  padding: 1%;
  font-weight: bold;
}

.input-data {
  margin-top: 10%;
  margin-left: 13%;
  text-align: center;
  line-height: 270%;
  border-radius: 24px;
  width: 30%;
  height: 100%;
  background-color: white;
}

error-message {

}
</style>