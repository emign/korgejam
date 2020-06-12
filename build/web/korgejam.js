(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge', 'korim', 'korma', 'korio', 'klock'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge'), require('korim'), require('korma'), require('korio'), require('klock'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgejam'.");
    }
    if (typeof korge === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korge' was not found. Please, check whether 'korge' is loaded prior to 'korgejam'.");
    }
    if (typeof korim === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korim' was not found. Please, check whether 'korim' is loaded prior to 'korgejam'.");
    }
    if (typeof korma === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korma' was not found. Please, check whether 'korma' is loaded prior to 'korgejam'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korgejam'.");
    }
    if (typeof klock === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'klock' was not found. Please, check whether 'klock' is loaded prior to 'korgejam'.");
    }
    root.korgejam = factory(typeof korgejam === 'undefined' ? {} : korgejam, kotlin, korge, korim, korma, korio, klock);
  }
}(this, function (_, Kotlin, $module$korge, $module$korim, $module$korma, $module$korio, $module$klock) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var korge = $module$korge.com.soywiz.korge;
  var color = $module$korim.com.soywiz.korim.color;
  var std = $module$korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var Unit = Kotlin.kotlin.Unit;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Easing = $module$korma.com.soywiz.korma.interpolation.Easing;
  var tween = $module$korge.com.soywiz.korge.tween.tween_t8t7it$;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var numberToDouble = Kotlin.numberToDouble;
  function main$lambda$lambda(closure$maxDegrees) {
    return function ($receiver) {
      $receiver.rotation = closure$maxDegrees;
      $receiver.anchorX = numberToDouble(0.5);
      $receiver.anchorY = numberToDouble(0.5);
      $receiver.scaleX = numberToDouble(0.8);
      $receiver.scaleY = numberToDouble(0.8);
      $receiver.x = numberToDouble(256);
      $receiver.y = numberToDouble(256);
      return Unit;
    };
  }
  var Angle = $module$korma.com.soywiz.korma.geom.Angle;
  var Image_init = $module$korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var addTo = $module$korge.com.soywiz.korge.view.addTo_fct211$;
  function image$lambda($receiver) {
    return Unit;
  }
  var _interpolateAngle = $module$korge.com.soywiz.korge.tween._interpolateAngle_a0zjys$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge.com.soywiz.korge.tween.V2;
  var TimeSpan = $module$klock.com.soywiz.klock.TimeSpan;
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$minDegrees = void 0;
    this.local$maxDegrees = void 0;
    this.local$image = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$minDegrees = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(-16)));
            this.local$maxDegrees = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(16)));
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('korge.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            main$lambda$lambda(this.local$maxDegrees)($receiver_0);
            this.local$image = $receiver_0;
            this.state_0 = 3;
            continue;
          case 3:
            var $receiver = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$image));
            this.state_0 = 4;
            this.result_0 = tween(this.local$image, [new V2_init($receiver, $receiver.get(), this.local$minDegrees, getCallableRef('_interpolateAngle', function (ratio, l, r) {
              return _interpolateAngle(ratio, l, r);
            }))], TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(1)), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_1 = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$image));
            this.state_0 = 5;
            this.result_0 = tween(this.local$image, [new V2_init($receiver_1, $receiver_1.get(), this.local$maxDegrees, getCallableRef('_interpolateAngle', function (ratio, l, r) {
              return _interpolateAngle(ratio, l, r);
            }))], TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(1)), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 3;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    return korge.Korge.invoke_yza9jc$(void 0, 512, 512, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, color.Colors.get_61zpoe$('#2b2b2b'), void 0, void 0, void 0, main$lambda, continuation);
  }
  $$importsForInline$$.korma = $module$korma;
  $$importsForInline$$.korge = $module$korge;
  $$importsForInline$$.klock = $module$klock;
  _.main = main;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('korgejam', _);
  return _;
}));

//# sourceMappingURL=korgejam.js.map
