(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio', 'korim', 'korge', 'klock', 'korma', 'korinject'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio'), require('korim'), require('korge'), require('klock'), require('korma'), require('korinject'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgejam'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korgejam'.");
    }
    if (typeof korim === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korim' was not found. Please, check whether 'korim' is loaded prior to 'korgejam'.");
    }
    if (typeof korge === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korge' was not found. Please, check whether 'korge' is loaded prior to 'korgejam'.");
    }
    if (typeof klock === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'klock' was not found. Please, check whether 'klock' is loaded prior to 'korgejam'.");
    }
    if (typeof korma === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korma' was not found. Please, check whether 'korma' is loaded prior to 'korgejam'.");
    }
    if (typeof korinject === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korinject' was not found. Please, check whether 'korinject' is loaded prior to 'korgejam'.");
    }
    root.korgejam = factory(typeof korgejam === 'undefined' ? {} : korgejam, kotlin, korio, korim, korge, klock, korma, korinject);
  }
}(this, function (_, Kotlin, $module$korio, $module$korim, $module$korge, $module$klock, $module$korma, $module$korinject) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var std = $module$korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var readTiledMap = $module$korge.com.soywiz.korge.tiled.readTiledMap_utz4xw$;
  var Scene = $module$korge.com.soywiz.korge.scene.Scene;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Easing = $module$korma.com.soywiz.korma.interpolation.Easing;
  var tween = $module$korge.com.soywiz.korge.tween.tween_t8t7it$;
  var launchImmediately = $module$korio.com.soywiz.korio.async.launchImmediately_hilpzi$;
  var sleep = $module$korge.com.soywiz.korge.scene.sleep_bfzdjs$;
  var korge = $module$korge.com.soywiz.korge;
  var Korge$Config = $module$korge.com.soywiz.korge.Korge.Config;
  var Module = $module$korge.com.soywiz.korge.scene.Module;
  var SizeInt = $module$korma.com.soywiz.korma.geom.SizeInt;
  var color = $module$korim.com.soywiz.korim.color;
  var getKClass = Kotlin.getKClass;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  GameScene.prototype = Object.create(Scene.prototype);
  GameScene.prototype.constructor = GameScene;
  LoadingScene.prototype = Object.create(Scene.prototype);
  LoadingScene.prototype.constructor = LoadingScene;
  MainMenuScene.prototype = Object.create(Scene.prototype);
  MainMenuScene.prototype.constructor = MainMenuScene;
  SnakeGameModule.prototype = Object.create(Module.prototype);
  SnakeGameModule.prototype.constructor = SnakeGameModule;
  var Image_init = $module$korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var addTo = $module$korge.com.soywiz.korge.view.addTo_fct211$;
  function image$lambda($receiver) {
    return Unit;
  }
  var TiledMapView_init = $module$korge.com.soywiz.korge.tiled.TiledMapView;
  function tiledMapView$lambda($receiver) {
    return Unit;
  }
  function Coroutine$tiledMap($receiver_0, level_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$level = level_0;
  }
  Coroutine$tiledMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tiledMap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tiledMap.prototype.constructor = Coroutine$tiledMap;
  Coroutine$tiledMap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('level' + this.local$level + '/background.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var background = this.result_0;
            var $receiver_0 = addTo(Image_init(background, 0.0, 0.0), this.local$$receiver);
            image$lambda($receiver_0);
            this.state_0 = 3;
            this.result_0 = readTiledMap(std.resourcesVfs.get_61zpoe$('level' + this.local$level + '/map.tmx'), void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var tiledMap = this.result_0;
            var $receiver_0_0 = addTo(new TiledMapView_init(tiledMap), this.local$$receiver);
            tiledMapView$lambda($receiver_0_0);
            return $receiver_0_0;
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
  function tiledMap($receiver_0, level_0, continuation_0, suspended) {
    var instance = new Coroutine$tiledMap($receiver_0, level_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function GameScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$.prototype.constructor = Coroutine$sceneInit_st8p7j$;
  Coroutine$sceneInit_st8p7j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tiledMap(this.local$$receiver, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  GameScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameScene',
    interfaces: [Scene]
  };
  var Angle = $module$korma.com.soywiz.korma.geom.Angle;
  var numberToDouble = Kotlin.numberToDouble;
  function LoadingScene() {
    Scene.call(this);
    this.minDegrees = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(-16)));
    this.maxDegrees = new Angle(Angle.Companion.degreesToRadians_14dthe$(numberToDouble(16)));
  }
  function LoadingScene$sceneInit$lambda(this$LoadingScene) {
    return function ($receiver) {
      $receiver.rotation = this$LoadingScene.maxDegrees;
      $receiver.anchorX = numberToDouble(0.5);
      $receiver.anchorY = numberToDouble(0.5);
      $receiver.scaleX = numberToDouble(0.8);
      $receiver.scaleY = numberToDouble(0.8);
      $receiver.x = numberToDouble(400);
      $receiver.y = numberToDouble(300);
      return Unit;
    };
  }
  var _interpolateAngle = $module$korge.com.soywiz.korge.tween._interpolateAngle_a0zjys$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge.com.soywiz.korge.tween.V2;
  var TimeSpan = $module$klock.com.soywiz.klock.TimeSpan;
  var scene = $module$korge.com.soywiz.korge.scene;
  var TimeSpan_0 = $module$korge.$$importsForInline$$.klock.com.soywiz.klock.TimeSpan;
  function Coroutine$LoadingScene$sceneInit$lambda(closure$image_0, this$LoadingScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$image = closure$image_0;
    this.local$this$LoadingScene = this$LoadingScene_0;
  }
  Coroutine$LoadingScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoadingScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoadingScene$sceneInit$lambda.prototype.constructor = Coroutine$LoadingScene$sceneInit$lambda;
  Coroutine$LoadingScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$closure$image;
            var $receiver = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$closure$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$closure$image));
            var end = this.local$this$LoadingScene.minDegrees;
            this.state_0 = 2;
            this.result_0 = tween(tmp$, [new V2_init($receiver, $receiver.get(), end, getCallableRef('_interpolateAngle', function (ratio, l, r) {
              return _interpolateAngle(ratio, l, r);
            }))], TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(1)), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0 = this.local$closure$image;
            var $receiver_0 = getPropertyCallableRef('rotation', 0, function ($receiver) {
              return $receiver.rotation;
            }.bind(null, this.local$closure$image), function ($receiver, value) {
              $receiver.rotation = value;
            }.bind(null, this.local$closure$image));
            var end_0 = this.local$this$LoadingScene.maxDegrees;
            this.state_0 = 3;
            this.result_0 = tween(tmp$_0, [new V2_init($receiver_0, $receiver_0.get(), end_0, getCallableRef('_interpolateAngle', function (ratio, l, r) {
              return _interpolateAngle(ratio, l, r);
            }))], TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(1)), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $this = this.local$this$LoadingScene.sceneContainer;
            var injects_0 = [];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan_0.Companion.fromSeconds_14dthe$(numberToDouble(0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 4;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(MainMenuScene), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.result_0;
            return this.result_0;
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
  function LoadingScene$sceneInit$lambda_0(closure$image_0, this$LoadingScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoadingScene$sceneInit$lambda(closure$image_0, this$LoadingScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function image$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$sceneInit_st8p7j$_0($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_0.prototype.constructor = Coroutine$sceneInit_st8p7j$_0;
  Coroutine$sceneInit_st8p7j$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('korge.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            LoadingScene$sceneInit$lambda(this.$this)($receiver_0);
            var image = $receiver_0;
            launchImmediately(this.$this, LoadingScene$sceneInit$lambda_0(image, this.$this));
            return;
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
  LoadingScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_0(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  LoadingScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoadingScene',
    interfaces: [Scene]
  };
  function MainMenuScene() {
    Scene.call(this);
  }
  function Coroutine$MainMenuScene$sceneInit$lambda(this$MainMenuScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainMenuScene = this$MainMenuScene_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda;
  Coroutine$MainMenuScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = sleep(this.local$this$MainMenuScene, TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(1)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this = this.local$this$MainMenuScene.sceneContainer;
            var injects_0 = [1];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan_0.Companion.fromSeconds_14dthe$(numberToDouble(0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 3;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(GameScene), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0;
            return this.result_0;
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
  function MainMenuScene$sceneInit$lambda(this$MainMenuScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda(this$MainMenuScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var color_0 = $module$korge.$$importsForInline$$.korim.com.soywiz.korim.color;
  var Fonts = $module$korge.com.soywiz.korge.view.Fonts;
  var Text = $module$korge.com.soywiz.korge.view.Text;
  function text$lambda($receiver) {
    return Unit;
  }
  MainMenuScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
    var text = 'SNAKE GAME!';
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), $receiver);
    text$lambda($receiver_0);
    $receiver_0.x = numberToDouble(340);
    $receiver_0.y = numberToDouble(200);
    launchImmediately(this, MainMenuScene$sceneInit$lambda(this));
  };
  MainMenuScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainMenuScene',
    interfaces: [Scene]
  };
  function main(continuation) {
    return korge.Korge.invoke_dnucxw$(new Korge$Config(SnakeGameModule_getInstance()), continuation);
  }
  function SnakeGameModule() {
    SnakeGameModule_instance = this;
    Module.call(this);
    this.title_h5mro2$_0 = 'Snake Game';
    this.size_ywotrd$_0 = SizeInt.Companion.invoke_vux9f0$(800, 600);
    this.windowSize_t2n2jd$_0 = SizeInt.Companion.invoke_vux9f0$(800, 600);
    this.bgcolor_k9kn70$_0 = color.Colors.get_61zpoe$('#2b2b2b');
    this.mainScene_isvq47$_0 = getKClass(LoadingScene);
  }
  Object.defineProperty(SnakeGameModule.prototype, 'title', {
    get: function () {
      return this.title_h5mro2$_0;
    }
  });
  Object.defineProperty(SnakeGameModule.prototype, 'size', {
    get: function () {
      return this.size_ywotrd$_0;
    }
  });
  Object.defineProperty(SnakeGameModule.prototype, 'windowSize', {
    get: function () {
      return this.windowSize_t2n2jd$_0;
    }
  });
  Object.defineProperty(SnakeGameModule.prototype, 'bgcolor', {
    get: function () {
      return this.bgcolor_k9kn70$_0;
    }
  });
  Object.defineProperty(SnakeGameModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_isvq47$_0;
    }
  });
  function Coroutine$SnakeGameModule$init$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda;
  Coroutine$SnakeGameModule$init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new LoadingScene();
          case 1:
            throw this.exception_0;
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
  function SnakeGameModule$init$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_0($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_0.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_0;
  Coroutine$SnakeGameModule$init$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new MainMenuScene();
          case 1:
            throw this.exception_0;
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
  function SnakeGameModule$init$lambda$lambda_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_0($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_1($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_1.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_1;
  Coroutine$SnakeGameModule$init$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new GameScene();
          case 1:
            throw this.exception_0;
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
  function SnakeGameModule$init$lambda$lambda_1($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_1($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  SnakeGameModule.prototype.init_y6n311$ = function (injector, continuation) {
    injector.mapPrototype_siz2e9$(getKClass(LoadingScene), SnakeGameModule$init$lambda$lambda);
    injector.mapPrototype_siz2e9$(getKClass(MainMenuScene), SnakeGameModule$init$lambda$lambda_0);
    injector.mapPrototype_siz2e9$(getKClass(GameScene), SnakeGameModule$init$lambda$lambda_1);
    return Unit;
  };
  SnakeGameModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SnakeGameModule',
    interfaces: [Module]
  };
  var SnakeGameModule_instance = null;
  function SnakeGameModule_getInstance() {
    if (SnakeGameModule_instance === null) {
      new SnakeGameModule();
    }
    return SnakeGameModule_instance;
  }
  $$importsForInline$$.korge = $module$korge;
  var package$com = _.com || (_.com = {});
  var package$snakegame = package$com.snakegame || (package$com.snakegame = {});
  var package$map = package$snakegame.map || (package$snakegame.map = {});
  package$map.tiledMap_iz2l6n$ = tiledMap;
  var package$scenes = package$snakegame.scenes || (package$snakegame.scenes = {});
  package$scenes.GameScene = GameScene;
  $$importsForInline$$.klock = $module$klock;
  $$importsForInline$$.korma = $module$korma;
  package$scenes.LoadingScene = LoadingScene;
  package$scenes.MainMenuScene = MainMenuScene;
  _.main = main;
  $$importsForInline$$.korinject = $module$korinject;
  Object.defineProperty(_, 'SnakeGameModule', {
    get: SnakeGameModule_getInstance
  });
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('korgejam', _);
  return _;
}));

//# sourceMappingURL=korgejam.js.map
