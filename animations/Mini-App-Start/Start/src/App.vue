<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">
          The Super Quiz
        </h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 perspective">
        <transition
          name="flip"
          mode="out-in"
        >
          <component
            :is="mode"
            @answered="answered($event)"
            @confirmed="mode = 'app-question'"
          ></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue';
import Answer from './components/Answer.vue';

export default {
  components: {
    appQuestion: Question,
    appAnswer: Answer,
  },
  data() {
    return {
      mode: 'app-question',
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      } else {
        this.mode = 'app-question';
        alert('Wrong, try again!');
      }
    },
  },
};
</script>

<style scoped>
.perspective {
  perspective: 2000px;
}

.flip-enter {
}
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}
.flip-leave {
}
.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(0.25turn);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(0.25turn);
  }
  to {
    transform: rotateY(0);
  }
}
</style>
