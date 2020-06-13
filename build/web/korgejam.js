(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio', 'korge', 'korim', 'kmem', 'klock', 'korma', 'korinject'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio'), require('korge'), require('korim'), require('kmem'), require('klock'), require('korma'), require('korinject'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgejam'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korgejam'.");
    }
    if (typeof korge === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korge' was not found. Please, check whether 'korge' is loaded prior to 'korgejam'.");
    }
    if (typeof korim === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korim' was not found. Please, check whether 'korim' is loaded prior to 'korgejam'.");
    }
    if (typeof kmem === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kmem' was not found. Please, check whether 'kmem' is loaded prior to 'korgejam'.");
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
    root.korgejam = factory(typeof korgejam === 'undefined' ? {} : korgejam, kotlin, korio, korge, korim, kmem, klock, korma, korinject);
  }
}(this, function (_, Kotlin, $module$korio, $module$korge, $module$korim, $module$kmem, $module$klock, $module$korma, $module$korinject) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var std = $module$korio.com.soywiz.korio.file.std;
  var readAtlas = $module$korge.com.soywiz.korge.atlas.readAtlas_s70ap7$;
  var BitmapSlice = $module$korim.com.soywiz.korim.bitmap.BitmapSlice;
  var throwCCE = Kotlin.throwCCE;
  var unsetBits = $module$kmem.com.soywiz.kmem.unsetBits_dqglrj$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var umod = $module$kmem.com.soywiz.kmem.umod_dqglrj$;
  var readBitmap = $module$korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var readTiledMap = $module$korge.com.soywiz.korge.tiled.readTiledMap_utz4xw$;
  var setBits = $module$kmem.com.soywiz.kmem.setBits_dqglrj$;
  var Scene = $module$korge.com.soywiz.korge.scene.Scene;
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
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  GameScene.prototype = Object.create(Scene.prototype);
  GameScene.prototype.constructor = GameScene;
  LoadingScene.prototype = Object.create(Scene.prototype);
  LoadingScene.prototype.constructor = LoadingScene;
  MainMenuScene.prototype = Object.create(Scene.prototype);
  MainMenuScene.prototype.constructor = MainMenuScene;
  SnakeGameModule.prototype = Object.create(Module.prototype);
  SnakeGameModule.prototype.constructor = SnakeGameModule;
  function SnakeBodyPart(x, y, xpos, ypos, lastX, lastY, direction) {
    if (xpos === void 0)
      xpos = x;
    if (ypos === void 0)
      ypos = y;
    if (lastX === void 0)
      lastX = x;
    if (lastY === void 0)
      lastY = y;
    if (direction === void 0)
      direction = Direction$RIGHT_getInstance();
    this.x = x;
    this.y = y;
    this.xpos = xpos;
    this.ypos = ypos;
    this.lastX = lastX;
    this.lastY = lastY;
    this.direction = direction;
  }
  SnakeBodyPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnakeBodyPart',
    interfaces: []
  };
  SnakeBodyPart.prototype.component1 = function () {
    return this.x;
  };
  SnakeBodyPart.prototype.component2 = function () {
    return this.y;
  };
  SnakeBodyPart.prototype.component3 = function () {
    return this.xpos;
  };
  SnakeBodyPart.prototype.component4 = function () {
    return this.ypos;
  };
  SnakeBodyPart.prototype.component5 = function () {
    return this.lastX;
  };
  SnakeBodyPart.prototype.component6 = function () {
    return this.lastY;
  };
  SnakeBodyPart.prototype.component7 = function () {
    return this.direction;
  };
  SnakeBodyPart.prototype.copy_4jcsx8$ = function (x, y, xpos, ypos, lastX, lastY, direction) {
    return new SnakeBodyPart(x === void 0 ? this.x : x, y === void 0 ? this.y : y, xpos === void 0 ? this.xpos : xpos, ypos === void 0 ? this.ypos : ypos, lastX === void 0 ? this.lastX : lastX, lastY === void 0 ? this.lastY : lastY, direction === void 0 ? this.direction : direction);
  };
  SnakeBodyPart.prototype.toString = function () {
    return 'SnakeBodyPart(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', xpos=' + Kotlin.toString(this.xpos)) + (', ypos=' + Kotlin.toString(this.ypos)) + (', lastX=' + Kotlin.toString(this.lastX)) + (', lastY=' + Kotlin.toString(this.lastY)) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  SnakeBodyPart.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.xpos) | 0;
    result = result * 31 + Kotlin.hashCode(this.ypos) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastX) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastY) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  SnakeBodyPart.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.xpos, other.xpos) && Kotlin.equals(this.ypos, other.ypos) && Kotlin.equals(this.lastX, other.lastX) && Kotlin.equals(this.lastY, other.lastY) && Kotlin.equals(this.direction, other.direction)))));
  };
  function Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$UP_instance = new Direction('UP', 0);
    Direction$RIGHT_instance = new Direction('RIGHT', 1);
    Direction$DOWN_instance = new Direction('DOWN', 2);
    Direction$LEFT_instance = new Direction('LEFT', 3);
  }
  var Direction$UP_instance;
  function Direction$UP_getInstance() {
    Direction_initFields();
    return Direction$UP_instance;
  }
  var Direction$RIGHT_instance;
  function Direction$RIGHT_getInstance() {
    Direction_initFields();
    return Direction$RIGHT_instance;
  }
  var Direction$DOWN_instance;
  function Direction$DOWN_getInstance() {
    Direction_initFields();
    return Direction$DOWN_instance;
  }
  var Direction$LEFT_instance;
  function Direction$LEFT_getInstance() {
    Direction_initFields();
    return Direction$LEFT_instance;
  }
  Direction.prototype.deltaX = function () {
    var tmp$;
    switch (this.name) {
      case 'LEFT':
        tmp$ = -1;
        break;
      case 'RIGHT':
        tmp$ = 1;
        break;
      default:tmp$ = 0;
        break;
    }
    return tmp$;
  };
  Direction.prototype.deltaY = function () {
    var tmp$;
    switch (this.name) {
      case 'UP':
        tmp$ = -1;
        break;
      case 'DOWN':
        tmp$ = 1;
        break;
      default:tmp$ = 0;
        break;
    }
    return tmp$;
  };
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$UP_getInstance(), Direction$RIGHT_getInstance(), Direction$DOWN_getInstance(), Direction$LEFT_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'UP':
        return Direction$UP_getInstance();
      case 'RIGHT':
        return Direction$RIGHT_getInstance();
      case 'DOWN':
        return Direction$DOWN_getInstance();
      case 'LEFT':
        return Direction$LEFT_getInstance();
      default:throwISE('No enum constant com.snakegame.actors.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Snake(startX, startY, numBodyParts, direction, width) {
    if (direction === void 0)
      direction = Direction$RIGHT_getInstance();
    if (width === void 0)
      width = 32;
    this.direction = direction;
    this.width = width;
    this.body = ArrayList_init();
    this.head_amlc5h$_0 = lazy(Snake$head$lambda(this));
    this.lastDirection = this.direction;
    this.lastPosX = startX;
    this.lastPosY = startY;
    var tmp$;
    tmp$ = (new IntRange(0, numBodyParts)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = this.body;
      var element_0 = new SnakeBodyPart(startX - Kotlin.imul(Kotlin.imul(this.direction.deltaX(), element), this.width), startY - Kotlin.imul(Kotlin.imul(this.direction.deltaY(), element), this.width));
      $receiver.add_11rb$(element_0);
    }
  }
  Object.defineProperty(Snake.prototype, 'head', {
    get: function () {
      return this.head_amlc5h$_0.value;
    }
  });
  Snake.prototype.move = function () {
    for (var i = this.body.size - 1 | 0; i >= 1; i--) {
      var current = this.body.get_za3lpa$(i);
      var tmp$ = this.body.get_za3lpa$(i - 1 | 0);
      var x = tmp$.component1()
      , y = tmp$.component2();
      current.lastX = current.x;
      current.lastY = current.y;
      current.x = x;
      current.y = y;
    }
    this.head.lastX = this.head.x;
    this.head.lastY = this.head.y;
    this.head.x = this.head.x + Kotlin.imul(this.direction.deltaX(), this.width);
    this.head.y = this.head.y + Kotlin.imul(this.direction.deltaY(), this.width);
  };
  function Snake$interpolate$lerp(a, b, f) {
    return a + f * (b - a);
  }
  Snake.prototype.interpolate_14dthe$ = function (delta) {
    var lerp = Snake$interpolate$lerp;
    var tmp$;
    tmp$ = this.body.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.xpos = lerp(element.lastX, element.x, delta);
      element.ypos = lerp(element.lastY, element.y, delta);
    }
  };
  function Snake$head$lambda(this$Snake) {
    return function () {
      return this$Snake.body.get_za3lpa$(0);
    };
  }
  Snake.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Snake',
    interfaces: []
  };
  function Coroutine$snake$lambda(closure$key_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$it = it_0;
  }
  Coroutine$snake$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$snake$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$snake$lambda.prototype.constructor = Coroutine$snake$lambda;
  Coroutine$snake$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$key.v = getButtonPressed(this.local$it), Unit;
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
  function snake$lambda(closure$key_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$snake$lambda(closure$key_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$snake$lambda_0(closure$key_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$it = it_0;
  }
  Coroutine$snake$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$snake$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$snake$lambda_0.prototype.constructor = Coroutine$snake$lambda_0;
  Coroutine$snake$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$key.v = unsetBits(this.local$closure$key.v, getButtonPressed(this.local$it)), Unit;
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
  function snake$lambda_0(closure$key_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$snake$lambda_0(closure$key_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var numberToInt = Kotlin.numberToInt;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function snake$lambda$lambda(closure$lockInput, closure$key, closure$newDirection, closure$frames, closure$snake, closure$bodyParts) {
    return function (it) {
      var tmp$, tmp$_0;
      var scale = it === 0 ? 0.0 : it / 16.666666;
      if (closure$lockInput.v === false) {
        switch (closure$key.v) {
          case 8:
            tmp$ = Direction$RIGHT_getInstance();
            break;
          case 4:
            tmp$ = Direction$LEFT_getInstance();
            break;
          case 1:
            tmp$ = Direction$UP_getInstance();
            break;
          case 2:
            tmp$ = Direction$DOWN_getInstance();
            break;
          default:tmp$ = closure$newDirection.v;
            break;
        }
        closure$newDirection.v = tmp$;
        if (numberToInt(closure$key.v & (BUTTON_RIGHT | BUTTON_LEFT | BUTTON_UP | BUTTON_DOWN)) !== 0)
          closure$lockInput.v = true;
      }
      tmp$_0 = closure$frames.v;
      closure$frames.v = tmp$_0 + 1 | 0;
      if (closure$frames.v >= 32) {
        closure$lockInput.v = false;
        closure$frames.v = 0;
        closure$snake.lastDirection = closure$snake.direction;
        closure$snake.direction = closure$newDirection.v;
        closure$snake.move();
      }
       else {
        closure$snake.interpolate_14dthe$(closure$frames.v / 32.0);
      }
      var $receiver = closure$bodyParts;
      var tmp$_1, tmp$_0_0;
      var index = 0;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var closure$snake_0 = closure$snake;
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        item.x = closure$snake_0.body.get_za3lpa$(index_0).xpos;
        item.y = closure$snake_0.body.get_za3lpa$(index_0).ypos;
      }
      return Unit;
    };
  }
  var Image_init = $module$korge.com.soywiz.korge.view.Image;
  var addTo = $module$korge.com.soywiz.korge.view.addTo_fct211$;
  function image$lambda($receiver) {
    return Unit;
  }
  var get_keys = $module$korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var Container_init = $module$korge.com.soywiz.korge.view.Container;
  function container$lambda($receiver) {
    return Unit;
  }
  function Coroutine$snake($receiver_0, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
  }
  Coroutine$snake.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$snake.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$snake.prototype.constructor = Coroutine$snake;
  Coroutine$snake.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.state_0 = 2;
            this.result_0 = readAtlas(std.resourcesVfs.get_61zpoe$('snake.atlas.json'), this.local$views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var snakeAtlas = this.result_0;
            var head = Kotlin.isType(tmp$ = snakeAtlas.get_61zpoe$('head.png').texture, BitmapSlice) ? tmp$ : throwCCE();
            var body = Kotlin.isType(tmp$_0 = snakeAtlas.get_61zpoe$('body.png').texture, BitmapSlice) ? tmp$_0 : throwCCE();
            var tail = Kotlin.isType(tmp$_1 = snakeAtlas.get_61zpoe$('tail.png').texture, BitmapSlice) ? tmp$_1 : throwCCE();
            var initialX = 100.0;
            var initialY = 100.0;
            var snake = new Snake(initialX, initialY, 5);
            var key = {v: 0};
            var tmp$_2, tmp$_0_0;
            (tmp$_0_0 = (tmp$_2 = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null ? tmp$_2.onKeyDown : null) != null ? tmp$_0_0.add_25kf2w$(snake$lambda(key)) : null;
            var tmp$_3, tmp$_0_1;
            (tmp$_0_1 = (tmp$_3 = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null ? tmp$_3.onKeyUp : null) != null ? tmp$_0_1.add_25kf2w$(snake$lambda_0(key)) : null;
            var $receiver_0 = addTo(new Container_init(), this.local$$receiver);
            var $receiver_0_0 = addTo(new Image_init(head, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_0);
            var $receiver_0_1 = addTo(new Image_init(body, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_1);
            var $receiver_0_2 = addTo(new Image_init(body, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_2);
            var $receiver_0_3 = addTo(new Image_init(body, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_3);
            var $receiver_0_4 = addTo(new Image_init(body, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_4);
            var $receiver_0_5 = addTo(new Image_init(tail, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_5);
            var bodyParts = listOf([$receiver_0_0, $receiver_0_1, $receiver_0_2, $receiver_0_3, $receiver_0_4, $receiver_0_5]);
            var frames = {v: 0};
            var newDirection = {v: snake.direction};
            var lockInput = {v: false};
            $receiver_0.addUpdatable_b4k9x1$(snake$lambda$lambda(lockInput, key, newDirection, frames, snake, bodyParts));
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
  function snake($receiver_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$snake($receiver_0, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var UInt_init = Kotlin.kotlin.UInt;
  function shr($receiver, other) {
    return new UInt_init((new UInt_init($receiver.data & 255)).data >>> other);
  }
  function shl($receiver, other) {
    return new UInt_init((new UInt_init($receiver.data & 255)).data << other);
  }
  function toInt($receiver) {
    return $receiver ? 1 : 0;
  }
  var toBool = defineInlineFunction('korgejam.com.snakegame.extensions.toBool_rcaex3$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return numberToInt($receiver) !== 0;
    };
  }));
  var toBool_0 = defineInlineFunction('korgejam.com.snakegame.extensions.toBool_68pxlr$', function ($receiver) {
    return ($receiver.data & 255) !== 0;
  });
  var toBool_1 = defineInlineFunction('korgejam.com.snakegame.extensions.toBool_bso16t$', function ($receiver) {
    return ($receiver.data & 65535) !== 0;
  });
  var toBool_2 = defineInlineFunction('korgejam.com.snakegame.extensions.toBool_mpial4$', function ($receiver) {
    return $receiver.data !== 0;
  });
  var toBool_3 = defineInlineFunction('korgejam.com.snakegame.extensions.toBool_6e1d9n$', function ($receiver) {
    return $receiver.data.toInt() !== 0;
  });
  function toBool_4($receiver) {
    return $receiver;
  }
  function getCyclic($receiver, x, y) {
    return $receiver.get_vux9f0$(umod(x, $receiver.width), umod(y, $receiver.height));
  }
  var BUTTON_UP;
  var BUTTON_DOWN;
  var BUTTON_LEFT;
  var BUTTON_RIGHT;
  var BUTTON_A;
  var BUTTON_B;
  var BUTTON_C;
  var BUTTON_START;
  function getButtonPressed(it) {
    switch (it.key.name) {
      case 'A':
      case 'LEFT':
        return BUTTON_LEFT;
      case 'D':
      case 'RIGHT':
        return BUTTON_RIGHT;
      case 'W':
      case 'UP':
        return BUTTON_UP;
      case 'S':
      case 'DOWN':
        return BUTTON_DOWN;
      case 'SPACE':
        return BUTTON_A;
      case 'ENTER':
        return BUTTON_START;
      default:return 0;
    }
  }
  var Image_init_0 = $module$korge.com.soywiz.korge.view.Image_init_8drxwf$;
  function image$lambda_0($receiver) {
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
            var $receiver_0 = addTo(Image_init_0(background, 0.0, 0.0), this.local$$receiver);
            image$lambda_0($receiver_0);
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
  function Coroutine$GameScene$sceneInit$lambda(closure$key_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$it = it_0;
  }
  Coroutine$GameScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda.prototype.constructor = Coroutine$GameScene$sceneInit$lambda;
  Coroutine$GameScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$key.v = setBits(this.local$closure$key.v, getButtonPressed(this.local$it)), Unit;
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
  function GameScene$sceneInit$lambda(closure$key_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda(closure$key_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GameScene$sceneInit$lambda_0(closure$key_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$it = it_0;
  }
  Coroutine$GameScene$sceneInit$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda_0.prototype.constructor = Coroutine$GameScene$sceneInit$lambda_0;
  Coroutine$GameScene$sceneInit$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$key.v = unsetBits(this.local$closure$key.v, getButtonPressed(this.local$it)), Unit;
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
  function GameScene$sceneInit$lambda_0(closure$key_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda_0(closure$key_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
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
            var key = {v: 0};
            var tmp$, tmp$_0;
            (tmp$_0 = (tmp$ = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null ? tmp$.onKeyDown : null) != null ? tmp$_0.add_25kf2w$(GameScene$sceneInit$lambda(key)) : null;
            var tmp$_1, tmp$_0_0;
            (tmp$_0_0 = (tmp$_1 = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null ? tmp$_1.onKeyUp : null) != null ? tmp$_0_0.add_25kf2w$(GameScene$sceneInit$lambda_0(key)) : null;
            this.state_0 = 2;
            this.result_0 = tiledMap(this.local$$receiver, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = snake(this.local$$receiver, this.$this.views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function image$lambda_1($receiver) {
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
            var $receiver_0 = addTo(Image_init_0(this.result_0, 0.0, 0.0), this.local$$receiver);
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
  var package$com = _.com || (_.com = {});
  var package$snakegame = package$com.snakegame || (package$com.snakegame = {});
  var package$actors = package$snakegame.actors || (package$snakegame.actors = {});
  package$actors.SnakeBodyPart = SnakeBodyPart;
  Object.defineProperty(Direction, 'UP', {
    get: Direction$UP_getInstance
  });
  Object.defineProperty(Direction, 'RIGHT', {
    get: Direction$RIGHT_getInstance
  });
  Object.defineProperty(Direction, 'DOWN', {
    get: Direction$DOWN_getInstance
  });
  Object.defineProperty(Direction, 'LEFT', {
    get: Direction$LEFT_getInstance
  });
  package$actors.Direction = Direction;
  package$actors.Snake = Snake;
  $$importsForInline$$.korge = $module$korge;
  $$importsForInline$$.korgejam = _;
  package$actors.snake_23kj5u$ = snake;
  var package$extensions = package$snakegame.extensions || (package$snakegame.extensions = {});
  package$extensions.shr_aogav3$ = shr;
  package$extensions.shl_aogav3$ = shl;
  package$extensions.toInt_1v8dcc$ = toInt;
  package$extensions.toBool_rcaex3$ = toBool;
  package$extensions.toBool_68pxlr$ = toBool_0;
  package$extensions.toBool_bso16t$ = toBool_1;
  package$extensions.toBool_mpial4$ = toBool_2;
  package$extensions.toBool_6e1d9n$ = toBool_3;
  package$extensions.toBool_1v8dcc$ = toBool_4;
  package$extensions.getCyclic_ekerff$ = getCyclic;
  var package$input = package$snakegame.input || (package$snakegame.input = {});
  Object.defineProperty(package$input, 'BUTTON_UP', {
    get: function () {
      return BUTTON_UP;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_DOWN', {
    get: function () {
      return BUTTON_DOWN;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_LEFT', {
    get: function () {
      return BUTTON_LEFT;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_RIGHT', {
    get: function () {
      return BUTTON_RIGHT;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_A', {
    get: function () {
      return BUTTON_A;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_B', {
    get: function () {
      return BUTTON_B;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_C', {
    get: function () {
      return BUTTON_C;
    }
  });
  Object.defineProperty(package$input, 'BUTTON_START', {
    get: function () {
      return BUTTON_START;
    }
  });
  package$input.getButtonPressed_5xeie8$ = getButtonPressed;
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
  BUTTON_UP = 1;
  BUTTON_DOWN = 2;
  BUTTON_LEFT = 4;
  BUTTON_RIGHT = 8;
  BUTTON_A = 16;
  BUTTON_B = 32;
  BUTTON_C = 64;
  BUTTON_START = 128;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('korgejam', _);
  return _;
}));

//# sourceMappingURL=korgejam.js.map
