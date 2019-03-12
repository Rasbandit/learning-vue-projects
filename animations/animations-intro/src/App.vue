<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation">
          <option value="fade">
            Fade
          </option>
          <option value="slide">
            Slide
          </option>
        </select>
        <button
          class="btn btn-primary"
          @click="show = !show"
        >
          ShowAlert
        </button>
        <br>
        <br>
        <transition
          :name="alertAnimation"
          appear
        >
          <div
            v-if="show"
            class="alert alert-info"
          >
            Oh Boy!
          </div>
        </transition>
        <transition
          :name="alertAnimation"
          appear
        >
          <div
            v-if="show"
            class="alert alert-info"
          >
            Oh Boy!
          </div>
        </transition>
        <transition
          :name="alertAnimation"
          appear
          mode="out-in"
        >
          <div
            v-if="show"
            key="info"
            class="alert alert-info"
          >
            Oh Boy!
          </div>
          <div
            v-else
            key="warning"
            class="alert alert-warning"
          >
            im a real boy
          </div>
        </transition>
        <hr>
        <button
          class="btn btn-primary"
          @click="load = !load"
        >
          Load / Remove Element
        </button>
        <br>
        <br>
        <div class="loading-box">
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
          >
            <div
              v-if="load"
              style="width: 0px; height: 100%; background-color: lightgreen"
            ></div>
          </transition>
        </div>
        <hr>
        <button
          class="btn btn-primary"
          @click="selectedComponet = selectedComponet === 'sucess-alert' ? 'danger-alert' : 'sucess-alert'"
        >
          Toggle Component
        </button>
        <br><br>
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="selectedComponet"></component>
        </transition>
        <hr>
        <button
          class="btn btn-primary"
          @click="addItem"
        >
          Add item
        </button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li
              v-for="(number, index) in numbers"
              :key="number"
              class="list-group-item"
              style="cursor: pointer"
              @click="removeItem(index)"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dangerAlert from './DangerAlert.vue';
import sucessAlert from './SuccessAlert.vue';

export default {
  components: {
    dangerAlert,
    sucessAlert,
  },
  data() {
    return {
      load: false,
      show: false,
      alertAnimation: 'slide',
      elementWidth: 0,
      selectedComponet: 'danger-alert',
      numbers: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter() {},
    enter(el, done) {
      let start = null;
      const animationTime = 1000;

      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        el.style.width = `${Math.ceil((progress / animationTime) * 100)}%`;
        if (progress < animationTime) {
          requestAnimationFrame(step);
        } else {
          el.style.width = '100%';
          done();
        }
      };
      requestAnimationFrame(step);
    },
    afterEnter() {
      console.log('afterEnter');
    },
    enterCancelled() {
      console.log('cancelled');
    },
    beforeLeave() {
      console.log('b4 leave');
    },
    leave(el, done) {
      let start = null;
      const animationTime = 1000;

      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        el.style.width = `${100 - Math.ceil((progress / animationTime) * 100)}%`;
        if (progress < animationTime) {
          requestAnimationFrame(step);
        } else {
          el.style.width = '0%';
          done();
        }
      };
      requestAnimationFrame(step);
    },
    afterLeave() {
      console.log('after leave');
    },
    leaveCancelled() {
      console.log('leave cancelled');
    },
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  opacity: 0;
  transition: opacity 1s;
  position: absolute;
}

.loading-box {
  border: 1px solid salmon;
  width: 500px;
  height: 100px;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
