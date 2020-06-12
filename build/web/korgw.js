(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio', 'klock', 'kotlinx-coroutines-core', 'kds', 'korev', 'korag', 'korag-opengl'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio'), require('klock'), require('kotlinx-coroutines-core'), require('kds'), require('korev'), require('korag'), require('korag-opengl'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgw'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korgw'.");
    }
    if (typeof klock === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'klock' was not found. Please, check whether 'klock' is loaded prior to 'korgw'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korgw'.");
    }
    if (typeof kds === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'kds' was not found. Please, check whether 'kds' is loaded prior to 'korgw'.");
    }
    if (typeof korev === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'korev' was not found. Please, check whether 'korev' is loaded prior to 'korgw'.");
    }
    if (typeof korag === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'korag' was not found. Please, check whether 'korag' is loaded prior to 'korgw'.");
    }
    if (typeof this['korag-opengl'] === 'undefined') {
      throw new Error("Error loading module 'korgw'. Its dependency 'korag-opengl' was not found. Please, check whether 'korag-opengl' is loaded prior to 'korgw'.");
    }
    root.korgw = factory(typeof korgw === 'undefined' ? {} : korgw, kotlin, korio, klock, this['kotlinx-coroutines-core'], kds, korev, korag, this['korag-opengl']);
  }
}(this, function (_, Kotlin, $module$korio, $module$klock, $module$kotlinx_coroutines_core, $module$kds, $module$korev, $module$korag, $module$korag_opengl) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var unsupported = $module$korio.com.soywiz.korio.lang.unsupported;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var DateTime = $module$klock.com.soywiz.klock.DateTime;
  var Unit = Kotlin.kotlin.Unit;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var ensureNotNull = Kotlin.ensureNotNull;
  var printStackTrace = $module$korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Throwable = Error;
  var CoroutineDispatcher = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineDispatcher;
  var Queue = $module$kds.com.soywiz.kds.Queue;
  var PriorityQueue = $module$kds.com.soywiz.kds.PriorityQueue;
  var Delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.Delay;
  var Closeable = $module$korio.com.soywiz.korio.lang.Closeable;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var launchImmediately = $module$korio.com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var clamp = $module$klock.com.soywiz.klock.clamp_izocc4$;
  var delay = $module$korio.com.soywiz.korio.async.delay_fv8bff$;
  var InitEvent = $module$korev.com.soywiz.korev.InitEvent;
  var DisposeEvent = $module$korev.com.soywiz.korev.DisposeEvent;
  var RenderEvent = $module$korev.com.soywiz.korev.RenderEvent;
  var DropFileEvent = $module$korev.com.soywiz.korev.DropFileEvent;
  var FullScreenEvent = $module$korev.com.soywiz.korev.FullScreenEvent;
  var ReshapeEvent = $module$korev.com.soywiz.korev.ReshapeEvent;
  var toBoxedChar = Kotlin.toBoxedChar;
  var KeyEvent = $module$korev.com.soywiz.korev.KeyEvent;
  var MouseEvent = $module$korev.com.soywiz.korev.MouseEvent;
  var TouchEvent$Type = $module$korev.com.soywiz.korev.TouchEvent.Type;
  var TouchEvent = $module$korev.com.soywiz.korev.TouchEvent;
  var launch = $module$korio.com.soywiz.korio.async.launch_ykkwzu$;
  var EventDispatcher$Mixin = $module$korev.com.soywiz.korev.EventDispatcher.Mixin;
  var LogAG = $module$korag.com.soywiz.korag.log.LogAG;
  var GamePadButtonEvent = $module$korev.com.soywiz.korev.GamePadButtonEvent;
  var GamePadStickEvent = $module$korev.com.soywiz.korev.GamePadStickEvent;
  var GamePadUpdateEvent = $module$korev.com.soywiz.korev.GamePadUpdateEvent;
  var GamePadConnectionEvent = $module$korev.com.soywiz.korev.GamePadConnectionEvent;
  var Korio = $module$korio.com.soywiz.korio.Korio_3q5nlj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var korev = $module$korev.com.soywiz.korev;
  var numberToInt = Kotlin.numberToInt;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var KeyEvent$Type = $module$korev.com.soywiz.korev.KeyEvent.Type;
  var Key = $module$korev.com.soywiz.korev.Key;
  var toChar = Kotlin.toChar;
  var MouseButton = $module$korev.com.soywiz.korev.MouseButton;
  var equals = Kotlin.equals;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var throwUPAE = Kotlin.throwUPAE;
  var AGConfig = $module$korag.com.soywiz.korag.AGConfig;
  var AGWebgl = $module$korag_opengl.com.soywiz.korag.AGWebgl;
  var MouseEvent$Type = $module$korev.com.soywiz.korev.MouseEvent.Type;
  var GamePadConnectionEvent$Type = $module$korev.com.soywiz.korev.GamePadConnectionEvent.Type;
  var util = $module$korio.com.soywiz.korio.util;
  var GamepadMapping = $module$korev.com.soywiz.korev.GamepadMapping;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  GameWindowCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  GameWindowCoroutineDispatcher.prototype.constructor = GameWindowCoroutineDispatcher;
  GameWindow$Quality.prototype = Object.create(Enum.prototype);
  GameWindow$Quality.prototype.constructor = GameWindow$Quality;
  GameWindow.prototype = Object.create(EventDispatcher$Mixin.prototype);
  GameWindow.prototype.constructor = GameWindow;
  BrowserGameWindow.prototype = Object.create(GameWindow.prototype);
  BrowserGameWindow.prototype.constructor = BrowserGameWindow;
  NodeJsGameWindow.prototype = Object.create(GameWindow.prototype);
  NodeJsGameWindow.prototype.constructor = NodeJsGameWindow;
  Nimbus_111_1420_Safari_GamepadMapping.prototype = Object.create(GamepadMapping.prototype);
  Nimbus_111_1420_Safari_GamepadMapping.prototype.constructor = Nimbus_111_1420_Safari_GamepadMapping;
  function DialogInterface() {
  }
  DialogInterface.prototype.browse_ptvjoy$ = function (url, continuation) {
    return unsupported();
  };
  DialogInterface.prototype.alert_61zpoe$ = function (message, continuation) {
    return unsupported();
  };
  DialogInterface.prototype.confirm_61zpoe$ = function (message, continuation) {
    return unsupported();
  };
  DialogInterface.prototype.prompt_puj7f4$$default = function (message, default_0, continuation) {
    return unsupported();
  };
  DialogInterface.prototype.prompt_puj7f4$ = function (message, default_0, continuation, callback$default) {
    if (default_0 === void 0)
      default_0 = '';
    return callback$default ? callback$default(message, default_0, continuation) : this.prompt_puj7f4$$default(message, default_0, continuation);
  };
  DialogInterface.prototype.openFileDialog_r0su5d$$default = function (filter, write, multi, continuation) {
    return unsupported();
  };
  DialogInterface.prototype.openFileDialog_r0su5d$ = function (filter, write, multi, continuation, callback$default) {
    if (filter === void 0)
      filter = null;
    if (write === void 0)
      write = false;
    if (multi === void 0)
      multi = false;
    return callback$default ? callback$default(filter, write, multi, continuation) : this.openFileDialog_r0su5d$$default(filter, write, multi, continuation);
  };
  DialogInterface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DialogInterface',
    interfaces: []
  };
  function GameWindowCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
    this.tasks = new Queue();
    this.timedTasks = PriorityQueue.Companion.invoke_km2rfd$(void 0, GameWindowCoroutineDispatcher$timedTasks$lambda);
  }
  GameWindowCoroutineDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    this.dispatch_5bn72i$(context, block);
  };
  function GameWindowCoroutineDispatcher$TimedTask(time, continuation, callback) {
    this.time = time;
    this.continuation = continuation;
    this.callback = callback;
    this.exception = null;
  }
  Object.defineProperty(GameWindowCoroutineDispatcher$TimedTask.prototype, 'ms', {
    get: function () {
      return this.time;
    }
  });
  GameWindowCoroutineDispatcher$TimedTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimedTask',
    interfaces: []
  };
  GameWindowCoroutineDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.tasks.enqueue_11rb$(block);
  };
  GameWindowCoroutineDispatcher.prototype.now = function () {
    return DateTime.Companion.now();
  };
  function GameWindowCoroutineDispatcher$scheduleResumeAfterDelay$lambda(closure$task) {
    return function (it) {
      closure$task.exception = it;
      return Unit;
    };
  }
  var TimeSpan = $module$klock.com.soywiz.klock.TimeSpan;
  var numberToDouble = Kotlin.numberToDouble;
  GameWindowCoroutineDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    var task = new GameWindowCoroutineDispatcher$TimedTask(this.now().plus_fv8bff$(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(timeMillis))), continuation, null);
    continuation.invokeOnCancellation_f05bi3$(GameWindowCoroutineDispatcher$scheduleResumeAfterDelay$lambda(task));
    this.timedTasks.add_11rb$(task);
  };
  function GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral(this$GameWindowCoroutineDispatcher, closure$task) {
    this.this$GameWindowCoroutineDispatcher = this$GameWindowCoroutineDispatcher;
    this.closure$task = closure$task;
  }
  GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    this.this$GameWindowCoroutineDispatcher.timedTasks.remove_11rb$(this.closure$task);
  };
  GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DisposableHandle]
  };
  GameWindowCoroutineDispatcher.prototype.invokeOnTimeout_8irseu$ = function (timeMillis, block) {
    var task = new GameWindowCoroutineDispatcher$TimedTask(this.now().plus_fv8bff$(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(timeMillis))), null, block);
    this.timedTasks.add_11rb$(task);
    return new GameWindowCoroutineDispatcher$invokeOnTimeout$ObjectLiteral(this, task);
  };
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  GameWindowCoroutineDispatcher.prototype.executePending = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    try {
      var now = this.now();
      while (!this.timedTasks.isEmpty() && now.compareTo_11rb$(this.timedTasks.head.time) >= 0) {
        var item = this.timedTasks.removeHead();
        if (item.exception != null) {
          if ((tmp$ = item.continuation) != null) {
            var exception = ensureNotNull(item.exception);
            tmp$.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          }
          if (item.callback != null) {
            (tmp$_0 = item.exception) != null ? (printStackTrace(tmp$_0), Unit) : null;
          }
        }
         else {
          if ((tmp$_1 = item.continuation) != null) {
            tmp$_1.resumeWith_tl1gpc$(new Result(Unit));
          }
          (tmp$_2 = item.callback) != null ? (tmp$_2.run(), Unit) : null;
        }
      }
      while (!this.tasks.isEmpty()) {
        var task = this.tasks.dequeue();
        task.run();
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        println('Error in GameWindowCoroutineDispatcher.executePending:');
        printStackTrace(e);
      }
       else
        throw e;
    }
  };
  GameWindowCoroutineDispatcher.prototype.close = function () {
  };
  GameWindowCoroutineDispatcher.prototype.toString = function () {
    return 'MyNativeCoroutineDispatcher';
  };
  function GameWindowCoroutineDispatcher$timedTasks$lambda(a, b) {
    return a.time.compareTo_11rb$(b.time);
  }
  GameWindowCoroutineDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameWindowCoroutineDispatcher',
    interfaces: [Closeable, Delay, CoroutineDispatcher]
  };
  function GameWindow() {
    EventDispatcher$Mixin.call(this);
    this.ag_96elwu$_0 = new LogAG();
    this.coroutineDispatcher_ccb4kf$_0 = new GameWindowCoroutineDispatcher();
    this.renderEvent = new RenderEvent();
    this.initEvent = new InitEvent();
    this.disposeEvent = new DisposeEvent();
    this.fullScreenEvent = new FullScreenEvent();
    this.reshapeEvent_mhm23c$_0 = new ReshapeEvent();
    this.keyEvent = new KeyEvent();
    this.mouseEvent = new MouseEvent();
    this.touchEvent = new TouchEvent();
    this.dropFileEvent = new DropFileEvent();
    this.gamePadButtonEvent = new GamePadButtonEvent();
    this.gamePadStickEvent = new GamePadStickEvent();
    this.gamePadUpdateEvent = new GamePadUpdateEvent();
    this.gamePadConnectionEvent = new GamePadConnectionEvent();
    this.fps_e82dz$_0 = 60;
    this.width_whg6e2$_0 = 0;
    this.height_3p2v0t$_0 = 0;
    this.icon_cad3az$_0 = null;
    this.fullscreen_j33tdz$_0 = false;
    this.visible_dcbvzi$_0 = false;
  }
  Object.defineProperty(GameWindow.prototype, 'ag', {
    get: function () {
      return this.ag_96elwu$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'coroutineDispatcher', {
    get: function () {
      return this.coroutineDispatcher_ccb4kf$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'fps', {
    get: function () {
      return this.fps_e82dz$_0;
    },
    set: function (fps) {
      this.fps_e82dz$_0 = fps;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'title', {
    get: function () {
      return '';
    },
    set: function (value) {
    }
  });
  Object.defineProperty(GameWindow.prototype, 'width', {
    get: function () {
      return this.width_whg6e2$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'height', {
    get: function () {
      return this.height_3p2v0t$_0;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'icon', {
    get: function () {
      return this.icon_cad3az$_0;
    },
    set: function (icon) {
      this.icon_cad3az$_0 = icon;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'fullscreen', {
    get: function () {
      return this.fullscreen_j33tdz$_0;
    },
    set: function (fullscreen) {
      this.fullscreen_j33tdz$_0 = fullscreen;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'visible', {
    get: function () {
      return this.visible_dcbvzi$_0;
    },
    set: function (visible) {
      this.visible_dcbvzi$_0 = visible;
    }
  });
  Object.defineProperty(GameWindow.prototype, 'quality', {
    get: function () {
      return GameWindow$Quality$AUTOMATIC_getInstance();
    },
    set: function (value) {
    }
  });
  Object.defineProperty(GameWindow.prototype, 'timePerFrame', {
    get: function () {
      var $receiver = 1000.0 / this.fps;
      return TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble($receiver));
    }
  });
  function GameWindow$Quality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameWindow$Quality_initFields() {
    GameWindow$Quality_initFields = function () {
    };
    GameWindow$Quality$PERFORMANCE_instance = new GameWindow$Quality('PERFORMANCE', 0);
    GameWindow$Quality$QUALITY_instance = new GameWindow$Quality('QUALITY', 1);
    GameWindow$Quality$AUTOMATIC_instance = new GameWindow$Quality('AUTOMATIC', 2);
  }
  var GameWindow$Quality$PERFORMANCE_instance;
  function GameWindow$Quality$PERFORMANCE_getInstance() {
    GameWindow$Quality_initFields();
    return GameWindow$Quality$PERFORMANCE_instance;
  }
  var GameWindow$Quality$QUALITY_instance;
  function GameWindow$Quality$QUALITY_getInstance() {
    GameWindow$Quality_initFields();
    return GameWindow$Quality$QUALITY_instance;
  }
  var GameWindow$Quality$AUTOMATIC_instance;
  function GameWindow$Quality$AUTOMATIC_getInstance() {
    GameWindow$Quality_initFields();
    return GameWindow$Quality$AUTOMATIC_instance;
  }
  GameWindow$Quality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quality',
    interfaces: [Enum]
  };
  function GameWindow$Quality$values() {
    return [GameWindow$Quality$PERFORMANCE_getInstance(), GameWindow$Quality$QUALITY_getInstance(), GameWindow$Quality$AUTOMATIC_getInstance()];
  }
  GameWindow$Quality.values = GameWindow$Quality$values;
  function GameWindow$Quality$valueOf(name) {
    switch (name) {
      case 'PERFORMANCE':
        return GameWindow$Quality$PERFORMANCE_getInstance();
      case 'QUALITY':
        return GameWindow$Quality$QUALITY_getInstance();
      case 'AUTOMATIC':
        return GameWindow$Quality$AUTOMATIC_getInstance();
      default:throwISE('No enum constant com.soywiz.korgw.GameWindow.Quality.' + name);
    }
  }
  GameWindow$Quality.valueOf_61zpoe$ = GameWindow$Quality$valueOf;
  GameWindow.prototype.setSize_vux9f0$ = function (width, height) {
  };
  GameWindow.prototype.browse_ptvjoy$ = function (url, continuation) {
    return unsupported();
  };
  GameWindow.prototype.alert_61zpoe$ = function (message, continuation) {
    return unsupported();
  };
  GameWindow.prototype.confirm_61zpoe$ = function (message, continuation) {
    return unsupported();
  };
  GameWindow.prototype.prompt_puj7f4$$default = function (message, default_0, continuation) {
    return unsupported();
  };
  GameWindow.prototype.openFileDialog_r0su5d$$default = function (filter, write, multi, continuation) {
    return unsupported();
  };
  function Coroutine$GameWindow$loop$lambda(closure$entry_0, this$GameWindow_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
    this.local$this$GameWindow = this$GameWindow_0;
  }
  Coroutine$GameWindow$loop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameWindow$loop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameWindow$loop$lambda.prototype.constructor = Coroutine$GameWindow$loop$lambda;
  Coroutine$GameWindow$loop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$entry(this.local$this$GameWindow, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function GameWindow$loop$lambda(closure$entry_0, this$GameWindow_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameWindow$loop$lambda(closure$entry_0, this$GameWindow_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var klock = $module$klock.com.soywiz.klock;
  function Coroutine$loop_179clj$($this, entry_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$entry = entry_0;
  }
  Coroutine$loop_179clj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loop_179clj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loop_179clj$.prototype.constructor = Coroutine$loop_179clj$;
  Coroutine$loop_179clj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            launchImmediately(this.$this.coroutineDispatcher, GameWindow$loop$lambda(this.local$entry, this.$this));
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var start = klock.PerformanceCounter.microseconds;
            this.$this.frame();
            var end = klock.PerformanceCounter.microseconds;
            var $receiver = end - start;
            var time = TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver));
            this.state_0 = 3;
            this.result_0 = delay(clamp(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(16)).minus_fv8bff$(time), TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(0)), TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(16))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
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
  GameWindow.prototype.loop_179clj$ = function (entry_0, continuation_0, suspended) {
    var instance = new Coroutine$loop_179clj$(this, entry_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GameWindow.prototype.frame = function () {
    this.coroutineDispatcher.executePending();
    this.ag.onRender.invoke_11rb$(this.ag);
    this.dispatchRenderEvent();
  };
  var getKClass = Kotlin.getKClass;
  GameWindow.prototype.dispatchInitEvent = function () {
    var event = this.initEvent;
    this.dispatch_nipq8w$(getKClass(InitEvent), event);
  };
  GameWindow.prototype.dispatchDisposeEvent = function () {
    var event = this.disposeEvent;
    this.dispatch_nipq8w$(getKClass(DisposeEvent), event);
  };
  GameWindow.prototype.dispatchRenderEvent = function () {
    var event = this.renderEvent;
    this.dispatch_nipq8w$(getKClass(RenderEvent), event);
  };
  GameWindow.prototype.dispatchDropfileEvent_efoes9$ = function (type, files) {
    var $receiver = this.dropFileEvent;
    $receiver.type = type;
    $receiver.files = files;
    this.dispatch_nipq8w$(getKClass(DropFileEvent), $receiver);
  };
  GameWindow.prototype.dispatchFullscreenEvent_6taknv$ = function (fullscreen) {
    var $receiver = this.fullScreenEvent;
    $receiver.fullscreen = fullscreen;
    this.dispatch_nipq8w$(getKClass(FullScreenEvent), $receiver);
  };
  GameWindow.prototype.dispatchReshapeEvent_tjonv8$ = function (x, y, width, height) {
    this.ag.resized_vux9f0$(width, height);
    var $receiver = this.reshapeEvent_mhm23c$_0;
    $receiver.x = x;
    $receiver.y = y;
    $receiver.width = width;
    $receiver.height = height;
    this.dispatch_nipq8w$(getKClass(ReshapeEvent), $receiver);
  };
  GameWindow.prototype.dispatchKeyEvent_z6qb3v$ = function (type, id, character, key, keyCode) {
    var $receiver = this.keyEvent;
    $receiver.id = id;
    $receiver.character = toBoxedChar(character);
    $receiver.key = key;
    $receiver.keyCode = keyCode;
    $receiver.type = type;
    this.dispatch_nipq8w$(getKClass(KeyEvent), $receiver);
  };
  GameWindow.prototype.dispatchMouseEvent_4o2nlt$ = function (type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    var $receiver = this.mouseEvent;
    $receiver.type = type;
    $receiver.id = id;
    $receiver.x = x;
    $receiver.y = y;
    $receiver.button = button;
    $receiver.buttons = buttons;
    $receiver.scrollDeltaX = scrollDeltaX;
    $receiver.scrollDeltaY = scrollDeltaY;
    $receiver.scrollDeltaZ = scrollDeltaZ;
    $receiver.isShiftDown = isShiftDown;
    $receiver.isCtrlDown = isCtrlDown;
    $receiver.isAltDown = isAltDown;
    $receiver.isMetaDown = isMetaDown;
    $receiver.scaleCoords = scaleCoords;
    this.dispatch_nipq8w$(getKClass(MouseEvent), $receiver);
  };
  GameWindow.prototype.dispatchTouchEventStartStart = function () {
    this.dispatchTouchEventStart_dh6y7s$(TouchEvent$Type.START);
  };
  GameWindow.prototype.dispatchTouchEventStartMove = function () {
    this.dispatchTouchEventStart_dh6y7s$(TouchEvent$Type.MOVE);
  };
  GameWindow.prototype.dispatchTouchEventStartEnd = function () {
    this.dispatchTouchEventStart_dh6y7s$(TouchEvent$Type.END);
  };
  GameWindow.prototype.dispatchTouchEventStart_dh6y7s$ = function (type) {
    this.touchEvent.startFrame_dh6y7s$(type);
  };
  GameWindow.prototype.dispatchTouchEventAddTouch_w4xg1m$ = function (id, x, y) {
    this.touchEvent.touch_w4xg1m$(id, x, y);
  };
  GameWindow.prototype.dispatchTouchEventEnd = function () {
    var event = this.touchEvent;
    this.dispatch_nipq8w$(getKClass(TouchEvent), event);
  };
  function Coroutine$GameWindow$entry$lambda(closure$callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$GameWindow$entry$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameWindow$entry$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameWindow$entry$lambda.prototype.constructor = Coroutine$GameWindow$entry$lambda;
  Coroutine$GameWindow$entry$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              println('ERROR GameWindow.entry:');
              return printStackTrace(e), Unit;
            }
             else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function GameWindow$entry$lambda(closure$callback_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameWindow$entry$lambda(closure$callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GameWindow.prototype.entry_g2bo5h$ = function (callback) {
    launch(this.coroutineDispatcher, GameWindow$entry$lambda(callback));
  };
  GameWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameWindow',
    interfaces: [DialogInterface, EventDispatcher$Mixin]
  };
  function Coroutine$mainLoop$lambda(closure$entry_0, this$mainLoop_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
    this.local$this$mainLoop = this$mainLoop_0;
  }
  Coroutine$mainLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainLoop$lambda.prototype.constructor = Coroutine$mainLoop$lambda;
  Coroutine$mainLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$mainLoop.loop_179clj$(this.local$closure$entry, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function mainLoop$lambda(closure$entry_0, this$mainLoop_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mainLoop$lambda(closure$entry_0, this$mainLoop_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mainLoop($receiver, entry) {
    return Korio(mainLoop$lambda(entry, $receiver));
  }
  function toggleFullScreen($receiver) {
    $receiver.fullscreen = !$receiver.fullscreen;
  }
  function configure($receiver, width, height, title, icon, fullscreen) {
    if (title === void 0)
      title = 'GameWindow';
    if (icon === void 0)
      icon = null;
    if (fullscreen === void 0)
      fullscreen = null;
    $receiver.setSize_vux9f0$(width, height);
    if (title != null)
      $receiver.title = title;
    $receiver.icon = icon;
    if (fullscreen != null)
      $receiver.fullscreen = fullscreen;
    $receiver.visible = true;
  }
  function Korgw() {
    Korgw_instance = this;
  }
  function Korgw$Sample() {
    Korgw$Sample_instance = this;
  }
  Korgw$Sample.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Sample',
    interfaces: []
  };
  var Korgw$Sample_instance = null;
  function Korgw$Sample_getInstance() {
    if (Korgw$Sample_instance === null) {
      new Korgw$Sample();
    }
    return Korgw$Sample_instance;
  }
  Korgw.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korgw',
    interfaces: []
  };
  var Korgw_instance = null;
  function Korgw_getInstance() {
    if (Korgw_instance === null) {
      new Korgw();
    }
    return Korgw_instance;
  }
  function BrowserGameWindow() {
    GameWindow.call(this);
    this.ag_k6miga$_0 = new AGWebgl(new AGConfig());
    this.isTouchDeviceCache_0 = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    window.canvas = this.canvas;
    window.ag = this.ag;
    window.gl = this.ag.gl;
    (tmp$ = document.body) != null ? tmp$.appendChild(this.canvas) : null;
    (tmp$_1 = (tmp$_0 = document.body) != null ? tmp$_0.style : null) != null ? (tmp$_1.margin = '0px') : null;
    (tmp$_3 = (tmp$_2 = document.body) != null ? tmp$_2.style : null) != null ? (tmp$_3.padding = '0px') : null;
    (tmp$_5 = (tmp$_4 = document.body) != null ? tmp$_4.style : null) != null ? (tmp$_5.overflowX = 'hidden') : null;
    (tmp$_7 = (tmp$_6 = document.body) != null ? tmp$_6.style : null) != null ? (tmp$_7.overflowY = 'hidden') : null;
    this.canvas.addEventListener('mouseenter', BrowserGameWindow_init$lambda(this));
    this.canvas.addEventListener('mouseleave', BrowserGameWindow_init$lambda_0(this));
    this.canvas.addEventListener('mouseover', BrowserGameWindow_init$lambda_1(this));
    this.canvas.addEventListener('mousemove', BrowserGameWindow_init$lambda_2(this));
    this.canvas.addEventListener('mouseout', BrowserGameWindow_init$lambda_3(this));
    this.canvas.addEventListener('mouseup', BrowserGameWindow_init$lambda_4(this));
    this.canvas.addEventListener('mousedown', BrowserGameWindow_init$lambda_5(this));
    this.canvas.addEventListener('click', BrowserGameWindow_init$lambda_6(this));
    this.canvas.addEventListener('touchstart', BrowserGameWindow_init$lambda_7(this));
    this.canvas.addEventListener('touchmove', BrowserGameWindow_init$lambda_8(this));
    this.canvas.addEventListener('touchend', BrowserGameWindow_init$lambda_9(this));
    window.addEventListener('keypress', BrowserGameWindow_init$lambda_10(this));
    window.addEventListener('keydown', BrowserGameWindow_init$lambda_11(this));
    window.addEventListener('keyup', BrowserGameWindow_init$lambda_12(this));
    window.addEventListener('gamepadconnected', BrowserGameWindow_init$lambda_13(this));
    window.addEventListener('gamepaddisconnected', BrowserGameWindow_init$lambda_14(this));
    window.addEventListener('resize', BrowserGameWindow_init$lambda_15(this));
    this.onResized_0();
    this.quality_5d370b$_0 = GameWindow$Quality$AUTOMATIC_getInstance();
    this.jsFrame_yy4udc$_0 = this.jsFrame_yy4udc$_0;
    this.jsFrame_0 = BrowserGameWindow_init$lambda_16(this);
  }
  Object.defineProperty(BrowserGameWindow.prototype, 'ag', {
    get: function () {
      return this.ag_k6miga$_0;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'canvas', {
    get: function () {
      return this.ag.canvas;
    }
  });
  BrowserGameWindow.prototype.is_touch_device = function () {
    var tmp$;
    if (this.isTouchDeviceCache_0 == null) {
      try {
        document.createEvent('TouchEvent');
        tmp$ = true;
      }
       catch (e) {
        tmp$ = false;
      }
      this.isTouchDeviceCache_0 = tmp$;
    }
    return ensureNotNull(this.isTouchDeviceCache_0);
  };
  BrowserGameWindow.prototype.updateGamepad_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    try {
      if (navigator.getGamepads != null) {
        var gamepads = navigator.getGamepads();
        tmp$ = this.gamePadUpdateEvent.gamepads;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var gp = tmp$[tmp$_0];
          gp.connected = false;
        }
        this.gamePadUpdateEvent.gamepadsLength = gamepads.length;
        tmp$_1 = gamepads.length;
        for (var gamepadId = 0; gamepadId < tmp$_1; gamepadId++) {
          tmp$_2 = gamepads[gamepadId];
          if (tmp$_2 == null) {
            continue;
          }
          var controller = tmp$_2;
          tmp$_3 = getOrNull(this.gamePadUpdateEvent.gamepads, gamepadId);
          if (tmp$_3 == null) {
            continue;
          }
          var gamepad = tmp$_3;
          var mapping = (tmp$_5 = (tmp$_4 = knownControllers.get_11rb$(controller.id)) != null ? tmp$_4 : knownControllers.get_11rb$(controller.mapping)) != null ? tmp$_5 : korev.StandardGamepadMapping;
          var tmp$_6, tmp$_7;
          gamepad.connected = controller.connected;
          gamepad.index = controller.index;
          gamepad.name = controller.id;
          gamepad.mapping = mapping;
          gamepad.axesLength = controller.axes.length;
          gamepad.buttonsLength = controller.buttons.length;
          gamepad.rawButtonsPressed = 0;
          tmp$_6 = controller.buttons.length;
          for (var n = 0; n < tmp$_6; n++) {
            var button = controller.buttons[n];
            if (button.pressed)
              gamepad.rawButtonsPressed = gamepad.rawButtonsPressed | 1 << n;
            gamepad.rawButtonsPressure[n] = button.value;
          }
          tmp$_7 = controller.axes.length;
          for (var n_0 = 0; n_0 < tmp$_7; n_0++) {
            gamepad.rawAxes[n_0] = controller.axes[n_0];
          }
        }
        var event = this.gamePadUpdateEvent;
        this.dispatch_nipq8w$(getKClass(GamePadUpdateEvent), event);
      }
    }
     catch (e) {
      console.error(e);
    }
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'quality', {
    get: function () {
      return this.quality_5d370b$_0;
    },
    set: function (value) {
      if (this.quality_5d370b$_0 !== value) {
        this.quality_5d370b$_0 = value;
        this.onResized_0();
      }
    }
  });
  BrowserGameWindow.prototype.onResized_0 = function () {
    this.isTouchDeviceCache_0 = null;
    this.canvas.width = numberToInt(window.innerWidth * this.scaledViewport);
    this.canvas.height = numberToInt(window.innerHeight * this.scaledViewport);
    this.canvas.style.position = 'absolute';
    this.canvas.style.left = '0';
    this.canvas.style.right = '0';
    this.canvas.style.width = window.innerWidth.toString() + 'px';
    this.canvas.style.height = window.innerHeight.toString() + 'px';
    this.dispatchReshapeEvent_tjonv8$(0, 0, this.canvas.width, this.canvas.height);
  };
  BrowserGameWindow.prototype.doRender_0 = function () {
    this.ag.onRender.invoke_11rb$(this.ag);
    var event = this.renderEvent;
    this.dispatch_nipq8w$(getKClass(RenderEvent), event);
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'doQuality', {
    get: function () {
      return this.quality === GameWindow$Quality$QUALITY_getInstance();
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'scaledViewport', {
    get: function () {
      return this.doQuality ? this.ag.devicePixelRatio : 1.0;
    }
  });
  BrowserGameWindow.prototype.transformEventX_3p81yu$ = defineInlineFunction('korgw.com.soywiz.korgw.BrowserGameWindow.transformEventX_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x) {
      return numberToDouble(x) * this.scaledViewport;
    };
  }));
  BrowserGameWindow.prototype.transformEventY_3p81yu$ = defineInlineFunction('korgw.com.soywiz.korgw.BrowserGameWindow.transformEventY_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (y) {
      return numberToDouble(y) * this.scaledViewport;
    };
  }));
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  BrowserGameWindow.prototype.keyEvent_0 = function (me) {
    var $receiver = this.keyEvent;
    var tmp$, tmp$_0;
    switch (me.type) {
      case 'keydown':
        tmp$ = KeyEvent$Type.DOWN;
        break;
      case 'keyup':
        tmp$ = KeyEvent$Type.UP;
        break;
      case 'keypress':
        tmp$ = KeyEvent$Type.TYPE;
        break;
      default:throw IllegalStateException_init(('Unsupported event type ' + me.type).toString());
    }
    $receiver.type = tmp$;
    $receiver.id = 0;
    $receiver.keyCode = me.keyCode;
    switch (me.key) {
      case '0':
        tmp$_0 = Key.N0;
        break;
      case '1':
        tmp$_0 = Key.N1;
        break;
      case '2':
        tmp$_0 = Key.N2;
        break;
      case '3':
        tmp$_0 = Key.N3;
        break;
      case '4':
        tmp$_0 = Key.N4;
        break;
      case '5':
        tmp$_0 = Key.N5;
        break;
      case '6':
        tmp$_0 = Key.N6;
        break;
      case '7':
        tmp$_0 = Key.N7;
        break;
      case '8':
        tmp$_0 = Key.N8;
        break;
      case '9':
        tmp$_0 = Key.N9;
        break;
      case 'a':
        tmp$_0 = Key.A;
        break;
      case 'b':
        tmp$_0 = Key.B;
        break;
      case 'c':
        tmp$_0 = Key.C;
        break;
      case 'd':
        tmp$_0 = Key.D;
        break;
      case 'e':
        tmp$_0 = Key.E;
        break;
      case 'f':
        tmp$_0 = Key.F;
        break;
      case 'g':
        tmp$_0 = Key.G;
        break;
      case 'h':
        tmp$_0 = Key.H;
        break;
      case 'i':
        tmp$_0 = Key.I;
        break;
      case 'j':
        tmp$_0 = Key.J;
        break;
      case 'k':
        tmp$_0 = Key.K;
        break;
      case 'l':
        tmp$_0 = Key.L;
        break;
      case 'm':
        tmp$_0 = Key.M;
        break;
      case 'n':
        tmp$_0 = Key.N;
        break;
      case 'o':
        tmp$_0 = Key.O;
        break;
      case 'p':
        tmp$_0 = Key.P;
        break;
      case 'q':
        tmp$_0 = Key.Q;
        break;
      case 'r':
        tmp$_0 = Key.R;
        break;
      case 's':
        tmp$_0 = Key.S;
        break;
      case 't':
        tmp$_0 = Key.T;
        break;
      case 'u':
        tmp$_0 = Key.U;
        break;
      case 'v':
        tmp$_0 = Key.V;
        break;
      case 'w':
        tmp$_0 = Key.W;
        break;
      case 'x':
        tmp$_0 = Key.X;
        break;
      case 'y':
        tmp$_0 = Key.Y;
        break;
      case 'z':
        tmp$_0 = Key.Z;
        break;
      case 'F1':
        tmp$_0 = Key.F1;
        break;
      case 'F2':
        tmp$_0 = Key.F2;
        break;
      case 'F3':
        tmp$_0 = Key.F3;
        break;
      case 'F4':
        tmp$_0 = Key.F4;
        break;
      case 'F5':
        tmp$_0 = Key.F5;
        break;
      case 'F6':
        tmp$_0 = Key.F6;
        break;
      case 'F7':
        tmp$_0 = Key.F7;
        break;
      case 'F8':
        tmp$_0 = Key.F8;
        break;
      case 'F9':
        tmp$_0 = Key.F9;
        break;
      case 'F10':
        tmp$_0 = Key.F10;
        break;
      case 'F11':
        tmp$_0 = Key.F11;
        break;
      case 'F12':
        tmp$_0 = Key.F12;
        break;
      case 'F13':
        tmp$_0 = Key.F13;
        break;
      case 'F14':
        tmp$_0 = Key.F14;
        break;
      case 'F15':
        tmp$_0 = Key.F15;
        break;
      case 'F16':
        tmp$_0 = Key.F16;
        break;
      case 'F17':
        tmp$_0 = Key.F17;
        break;
      case 'F18':
        tmp$_0 = Key.F18;
        break;
      case 'F19':
        tmp$_0 = Key.F19;
        break;
      case 'F20':
        tmp$_0 = Key.F20;
        break;
      case 'F21':
        tmp$_0 = Key.F21;
        break;
      case 'F22':
        tmp$_0 = Key.F22;
        break;
      case 'F23':
        tmp$_0 = Key.F23;
        break;
      case 'F24':
        tmp$_0 = Key.F24;
        break;
      case 'F25':
        tmp$_0 = Key.F25;
        break;
      default:switch (me.code) {
          case 'MetaLeft':
            tmp$_0 = Key.LEFT_SUPER;
            break;
          case 'MetaRight':
            tmp$_0 = Key.RIGHT_SUPER;
            break;
          case 'ShiftLeft':
            tmp$_0 = Key.LEFT_SHIFT;
            break;
          case 'ShiftRight':
            tmp$_0 = Key.RIGHT_SHIFT;
            break;
          case 'ControlLeft':
            tmp$_0 = Key.LEFT_CONTROL;
            break;
          case 'ControlRight':
            tmp$_0 = Key.RIGHT_CONTROL;
            break;
          case 'AltLeft':
            tmp$_0 = Key.LEFT_ALT;
            break;
          case 'AltRight':
            tmp$_0 = Key.RIGHT_ALT;
            break;
          case 'Space':
            tmp$_0 = Key.SPACE;
            break;
          case 'ArrowUp':
            tmp$_0 = Key.UP;
            break;
          case 'ArrowDown':
            tmp$_0 = Key.DOWN;
            break;
          case 'ArrowLeft':
            tmp$_0 = Key.LEFT;
            break;
          case 'ArrowRight':
            tmp$_0 = Key.RIGHT;
            break;
          case 'Enter':
            tmp$_0 = Key.ENTER;
            break;
          case 'Escape':
            tmp$_0 = Key.ESCAPE;
            break;
          case 'Backspace':
            tmp$_0 = Key.BACKSPACE;
            break;
          case 'Period':
            tmp$_0 = Key.PERIOD;
            break;
          case 'Comma':
            tmp$_0 = Key.COMMA;
            break;
          case 'Semicolon':
            tmp$_0 = Key.SEMICOLON;
            break;
          case 'Slash':
            tmp$_0 = Key.SLASH;
            break;
          case 'Tab':
            tmp$_0 = Key.TAB;
            break;
          default:tmp$_0 = Key.UNKNOWN;
            break;
        }

        break;
    }
    $receiver.key = tmp$_0;
    $receiver.character = toBoxedChar(toChar(me.charCode));
    this.dispatch_nipq8w$(getKClass(KeyEvent), $receiver);
  };
  BrowserGameWindow.prototype.touchEvent_0 = function (e, type) {
    var tmp$;
    this.touchEvent.scaleCoords = false;
    this.touchEvent.startFrame_dh6y7s$(type);
    tmp$ = e.touches.length;
    for (var n = 0; n < tmp$; n++) {
      var touch = e.touches.item(n);
      this.touchEvent.touch_w4xg1m$(touch.identifier, numberToDouble(touch.clientX) * this.scaledViewport, numberToDouble(touch.clientY) * this.scaledViewport);
    }
    var event = this.touchEvent;
    this.dispatch_nipq8w$(getKClass(TouchEvent), event);
  };
  BrowserGameWindow.prototype.mouseEvent_0 = function (e, type, pressingType) {
    if (pressingType === void 0)
      pressingType = type;
    if (!this.is_touch_device()) {
      var tx = numberToInt(numberToDouble(e.clientX) * this.scaledViewport);
      var ty = numberToInt(numberToDouble(e.clientY) * this.scaledViewport);
      var $receiver = this.mouseEvent;
      $receiver.type = e.buttons !== 0 ? pressingType : type;
      $receiver.scaleCoords = false;
      $receiver.id = 0;
      $receiver.x = tx;
      $receiver.y = ty;
      $receiver.button = MouseButton.Companion.get_za3lpa$(e.button);
      $receiver.buttons = e.buttons;
      $receiver.isShiftDown = e.shiftKey;
      $receiver.isCtrlDown = e.ctrlKey;
      $receiver.isAltDown = e.altKey;
      $receiver.isMetaDown = e.metaKey;
      this.dispatch_nipq8w$(getKClass(MouseEvent), $receiver);
    }
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'title', {
    get: function () {
      return document.title;
    },
    set: function (value) {
      document.title = value;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'width', {
    get: function () {
      return this.canvas.clientWidth;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'height', {
    get: function () {
      return this.canvas.clientHeight;
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'icon', {
    get: function () {
      return Kotlin.callGetter(this, GameWindow.prototype, 'icon');
    },
    set: function (value) {
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'fullscreen', {
    get: function () {
      return document.fullscreenElement != null;
    },
    set: function (value) {
      if (this.fullscreen !== value) {
        if (value) {
          this.canvas.requestFullscreen();
        }
         else {
          document.exitFullscreen();
        }
      }
    }
  });
  Object.defineProperty(BrowserGameWindow.prototype, 'visible', {
    get: function () {
      return equals(this.canvas.style.visibility, 'visible');
    },
    set: function (value) {
      this.canvas.style.visibility = value ? 'visible' : 'hidden';
    }
  });
  BrowserGameWindow.prototype.setSize_vux9f0$ = function (width, height) {
  };
  BrowserGameWindow.prototype.browse_ptvjoy$ = function (url, continuation) {
    document.open(url.fullUrl);
  };
  BrowserGameWindow.prototype.alert_61zpoe$ = function (message, continuation) {
    window.alert(message);
  };
  BrowserGameWindow.prototype.confirm_61zpoe$ = function (message, continuation) {
    return window.confirm(message);
  };
  BrowserGameWindow.prototype.prompt_puj7f4$$default = function (message, default_0, continuation) {
    var tmp$;
    tmp$ = window.prompt(message, default_0);
    if (tmp$ == null) {
      throw new CancellationException('cancelled');
    }
    return tmp$;
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  BrowserGameWindow.prototype.openFileDialog_r0su5d$$default = function (filter, write, multi, continuation) {
    throw new NotImplementedError_init();
  };
  function Coroutine$BrowserGameWindow$loop$lambda(closure$entry_0, this$BrowserGameWindow_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
    this.local$this$BrowserGameWindow = this$BrowserGameWindow_0;
  }
  Coroutine$BrowserGameWindow$loop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BrowserGameWindow$loop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BrowserGameWindow$loop$lambda.prototype.constructor = Coroutine$BrowserGameWindow$loop$lambda;
  Coroutine$BrowserGameWindow$loop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$entry(this.local$this$BrowserGameWindow, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function BrowserGameWindow$loop$lambda(closure$entry_0, this$BrowserGameWindow_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BrowserGameWindow$loop$lambda(closure$entry_0, this$BrowserGameWindow_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BrowserGameWindow.prototype.loop_179clj$ = function (entry, continuation) {
    launchImmediately(this.coroutineDispatcher, BrowserGameWindow$loop$lambda(entry, this));
    this.jsFrame_0(0.0);
  };
  Object.defineProperty(BrowserGameWindow.prototype, 'jsFrame_0', {
    get: function () {
      if (this.jsFrame_yy4udc$_0 == null)
        return throwUPAE('jsFrame');
      return this.jsFrame_yy4udc$_0;
    },
    set: function (jsFrame) {
      this.jsFrame_yy4udc$_0 = jsFrame;
    }
  });
  function BrowserGameWindow_init$lambda(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.ENTER);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_0(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.EXIT);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_1(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.MOVE, MouseEvent$Type.DRAG);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_2(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.MOVE, MouseEvent$Type.DRAG);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_3(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.EXIT);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_4(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.UP);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_5(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.DOWN);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_6(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.mouseEvent_0(it, MouseEvent$Type.CLICK);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_7(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.touchEvent_0(it, TouchEvent$Type.START);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_8(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.touchEvent_0(it, TouchEvent$Type.MOVE);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_9(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.touchEvent_0(it, TouchEvent$Type.END);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_10(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.keyEvent_0(it);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_11(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.keyEvent_0(it);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_12(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.keyEvent_0(it);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_13(this$BrowserGameWindow) {
    return function (e) {
      var e_0 = e;
      var tmp$ = this$BrowserGameWindow;
      var $receiver = this$BrowserGameWindow.gamePadConnectionEvent;
      $receiver.type = GamePadConnectionEvent$Type.CONNECTED;
      $receiver.gamepad = e_0.gamepad.index;
      tmp$.dispatch_nipq8w$(getKClass(GamePadConnectionEvent), $receiver);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_14(this$BrowserGameWindow) {
    return function (e) {
      var e_0 = e;
      var tmp$ = this$BrowserGameWindow;
      var $receiver = this$BrowserGameWindow.gamePadConnectionEvent;
      $receiver.type = GamePadConnectionEvent$Type.DISCONNECTED;
      $receiver.gamepad = e_0.gamepad.index;
      tmp$.dispatch_nipq8w$(getKClass(GamePadConnectionEvent), $receiver);
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_15(this$BrowserGameWindow) {
    return function (it) {
      this$BrowserGameWindow.onResized_0();
      return Unit;
    };
  }
  function BrowserGameWindow_init$lambda_16(this$BrowserGameWindow) {
    return function (step) {
      this$BrowserGameWindow.updateGamepad_0();
      this$BrowserGameWindow.coroutineDispatcher.executePending();
      this$BrowserGameWindow.doRender_0();
      window.requestAnimationFrame(this$BrowserGameWindow.jsFrame_0);
      return Unit;
    };
  }
  BrowserGameWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrowserGameWindow',
    interfaces: [GameWindow]
  };
  function get_0($receiver, index) {
    return $receiver[index];
  }
  function NodeJsGameWindow() {
    GameWindow.call(this);
  }
  NodeJsGameWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeJsGameWindow',
    interfaces: [GameWindow]
  };
  var DefaultGameWindow;
  function Nimbus_111_1420_Safari_GamepadMapping() {
    Nimbus_111_1420_Safari_GamepadMapping_instance = this;
    GamepadMapping.call(this);
    this.id_bkfnxk$_0 = '111-1420-Nimbus';
  }
  Object.defineProperty(Nimbus_111_1420_Safari_GamepadMapping.prototype, 'id', {
    get: function () {
      return this.id_bkfnxk$_0;
    }
  });
  Nimbus_111_1420_Safari_GamepadMapping.prototype.get_nr7vgt$ = function (button, info) {
    var tmp$;
    switch (button.name) {
      case 'BUTTON0':
        tmp$ = this.getRawButton_qw5gbr$(info, 0);
        break;
      case 'BUTTON1':
        tmp$ = this.getRawButton_qw5gbr$(info, 1);
        break;
      case 'BUTTON2':
        tmp$ = this.getRawButton_qw5gbr$(info, 2);
        break;
      case 'BUTTON3':
        tmp$ = this.getRawButton_qw5gbr$(info, 3);
        break;
      case 'L1':
        tmp$ = this.getRawButton_qw5gbr$(info, 4);
        break;
      case 'R1':
        tmp$ = this.getRawButton_qw5gbr$(info, 5);
        break;
      case 'L2':
        tmp$ = this.getRawButton_qw5gbr$(info, 6);
        break;
      case 'R2':
        tmp$ = this.getRawButton_qw5gbr$(info, 7);
        break;
      case 'LEFT':
        tmp$ = this.getRawButton_qw5gbr$(info, 8);
        break;
      case 'DOWN':
        tmp$ = this.getRawButton_qw5gbr$(info, 9);
        break;
      case 'RIGHT':
        tmp$ = this.getRawButton_qw5gbr$(info, 10);
        break;
      case 'UP':
        tmp$ = this.getRawButton_qw5gbr$(info, 11);
        break;
      case 'SELECT':
        tmp$ = 0.0;
        break;
      case 'START':
        tmp$ = 0.0;
        break;
      case 'SYSTEM':
        tmp$ = 0.0;
        break;
      case 'LX':
        tmp$ = this.getRawAxe_qw5gbr$(info, 0);
        break;
      case 'LY':
        tmp$ = this.getRawAxe_qw5gbr$(info, 1);
        break;
      case 'RX':
        tmp$ = this.getRawAxe_qw5gbr$(info, 2);
        break;
      case 'RY':
        tmp$ = this.getRawAxe_qw5gbr$(info, 3);
        break;
      default:tmp$ = 0.0;
        break;
    }
    return tmp$;
  };
  Nimbus_111_1420_Safari_GamepadMapping.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Nimbus_111_1420_Safari_GamepadMapping',
    interfaces: [GamepadMapping]
  };
  var Nimbus_111_1420_Safari_GamepadMapping_instance = null;
  function Nimbus_111_1420_Safari_GamepadMapping_getInstance() {
    if (Nimbus_111_1420_Safari_GamepadMapping_instance === null) {
      new Nimbus_111_1420_Safari_GamepadMapping();
    }
    return Nimbus_111_1420_Safari_GamepadMapping_instance;
  }
  var knownControllers;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korgw = package$soywiz.korgw || (package$soywiz.korgw = {});
  package$korgw.DialogInterface = DialogInterface;
  GameWindowCoroutineDispatcher.TimedTask = GameWindowCoroutineDispatcher$TimedTask;
  $$importsForInline$$.klock = $module$klock;
  package$korgw.GameWindowCoroutineDispatcher = GameWindowCoroutineDispatcher;
  Object.defineProperty(GameWindow$Quality, 'PERFORMANCE', {
    get: GameWindow$Quality$PERFORMANCE_getInstance
  });
  Object.defineProperty(GameWindow$Quality, 'QUALITY', {
    get: GameWindow$Quality$QUALITY_getInstance
  });
  Object.defineProperty(GameWindow$Quality, 'AUTOMATIC', {
    get: GameWindow$Quality$AUTOMATIC_getInstance
  });
  GameWindow.Quality = GameWindow$Quality;
  $$importsForInline$$.korev = $module$korev;
  package$korgw.GameWindow = GameWindow;
  package$korgw.mainLoop_1bars0$ = mainLoop;
  package$korgw.toggleFullScreen_o1m7b$ = toggleFullScreen;
  package$korgw.configure_3adi1j$ = configure;
  Object.defineProperty(Korgw.prototype, 'Sample', {
    get: Korgw$Sample_getInstance
  });
  Object.defineProperty(package$korgw, 'Korgw', {
    get: Korgw_getInstance
  });
  $$importsForInline$$.korgw = _;
  package$korgw.BrowserGameWindow = BrowserGameWindow;
  package$korgw.NodeJsGameWindow = NodeJsGameWindow;
  Object.defineProperty(package$korgw, 'DefaultGameWindow', {
    get: function () {
      return DefaultGameWindow;
    }
  });
  Object.defineProperty(package$korgw, 'Nimbus_111_1420_Safari_GamepadMapping', {
    get: Nimbus_111_1420_Safari_GamepadMapping_getInstance
  });
  Object.defineProperty(package$korgw, 'knownControllers', {
    get: function () {
      return knownControllers;
    }
  });
  GameWindowCoroutineDispatcher.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  GameWindow.prototype.prompt_puj7f4$ = DialogInterface.prototype.prompt_puj7f4$;
  GameWindow.prototype.openFileDialog_r0su5d$ = DialogInterface.prototype.openFileDialog_r0su5d$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  DefaultGameWindow = util.OS.isJsNodeJs ? new NodeJsGameWindow() : new BrowserGameWindow();
  var $receiver = listOf([korev.StandardGamepadMapping, Nimbus_111_1420_Safari_GamepadMapping_getInstance()]);
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.id, element);
  }
  knownControllers = destination;
  Kotlin.defineModule('korgw', _);
  return _;
}));

//# sourceMappingURL=korgw.js.map
