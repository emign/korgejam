(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge-root-korge', 'korio-root-korio', 'kmem-root-kmem', 'korgw-root-korgw', 'klock-root-klock', 'korim-root-korim', 'korma-root-korma', 'korinject-root-korinject'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge-root-korge'), require('korio-root-korio'), require('kmem-root-kmem'), require('korgw-root-korgw'), require('klock-root-klock'), require('korim-root-korim'), require('korma-root-korma'), require('korinject-root-korinject'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgejam'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korgejam'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korgejam'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korgejam'.");
    }if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'korgejam'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korgejam'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korgejam'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korgejam'.");
    }if (typeof this['korinject-root-korinject'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korinject-root-korinject' was not found. Please, check whether 'korinject-root-korinject' is loaded prior to 'korgejam'.");
    }root.korgejam = factory(typeof korgejam === 'undefined' ? {} : korgejam, kotlin, this['korge-root-korge'], this['korio-root-korio'], this['kmem-root-kmem'], this['korgw-root-korgw'], this['klock-root-klock'], this['korim-root-korim'], this['korma-root-korma'], this['korinject-root-korinject']);
  }
}(this, function (_, Kotlin, $module$korge_root_korge, $module$korio_root_korio, $module$kmem_root_kmem, $module$korgw_root_korgw, $module$klock_root_klock, $module$korim_root_korim, $module$korma_root_korma, $module$korinject_root_korinject) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Image = $module$korge_root_korge.com.soywiz.korge.view.Image;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readAtlas = $module$korge_root_korge.com.soywiz.korge.atlas.readAtlas_s70ap7$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var unsetBits = $module$kmem_root_kmem.com.soywiz.kmem.unsetBits_dqglrj$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Key = $module$korgw_root_korgw.com.soywiz.korev.Key;
  var onCollision = $module$korge_root_korge.com.soywiz.korge.view.onCollision_1uywuz$;
  var anchor = $module$korge_root_korge.com.soywiz.korge.view.anchor_11wmr3$;
  var addFixedUpdater = $module$korge_root_korge.com.soywiz.korge.view.addFixedUpdater_ns2cui$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var numberToInt = Kotlin.numberToInt;
  var Collection = Kotlin.kotlin.collections.Collection;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var Container_init = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var umod = $module$kmem_root_kmem.com.soywiz.kmem.umod_dqglrj$;
  var UInt_init = Kotlin.kotlin.UInt;
  var TiledMap$Layer$Patterns = $module$korge_root_korge.com.soywiz.korge.tiled.TiledMap.Layer.Patterns;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var readTiledMap = $module$korge_root_korge.com.soywiz.korge.tiled.readTiledMap_utz4xw$;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var TiledMapView_init = $module$korge_root_korge.com.soywiz.korge.tiled.TiledMapView;
  var RGBA = $module$korim_root_korim.com.soywiz.korim.color.RGBA;
  var tween = $module$korge_root_korge.com.soywiz.korge.tween.tween_t8t7it$;
  var launch = $module$korio_root_korio.com.soywiz.korio.async.launch_hilpzi$;
  var Scene = $module$korge_root_korge.com.soywiz.korge.scene.Scene;
  var readBitmapFont = $module$korim_root_korim.com.soywiz.korim.font.readBitmapFont_2axf5n$;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var _interpolate = $module$korge_root_korge.com.soywiz.korge.tween._interpolate_yvo9jy$;
  var getCallableRef = Kotlin.getCallableRef;
  var V2_init = $module$korge_root_korge.com.soywiz.korge.tween.V2;
  var numberToDouble = Kotlin.numberToDouble;
  var SolidRect_init = $module$korge_root_korge.com.soywiz.korge.view.SolidRect;
  var Camera_init = $module$korge_root_korge.com.soywiz.korge.view.Camera;
  var color = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var scale = $module$korge_root_korge.com.soywiz.korge.view.scale_2cbtc5$;
  var Easing = $module$korma_root_korma.com.soywiz.korma.interpolation.Easing;
  var getKClass = Kotlin.getKClass;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_hilpzi$;
  var get_degrees = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_s8ev3n$;
  var _interpolateAngle = $module$korge_root_korge.com.soywiz.korge.tween._interpolateAngle_a0zjys$;
  var TimeSpan_0 = $module$korge_root_korge.$$importsForInline$$['klock-root-klock'].com.soywiz.klock.TimeSpan;
  var centerXOn = $module$korge_root_korge.com.soywiz.korge.view.centerXOn_apzp43$;
  var positionY = $module$korge_root_korge.com.soywiz.korge.view.positionY_bfm155$;
  var wait = $module$korge_root_korge.com.soywiz.korge.time.wait_f287ec$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var hide = $module$korge_root_korge.com.soywiz.korge.tween.hide_yz29kn$;
  var _interpolateColor = $module$korge_root_korge.com.soywiz.korge.tween._interpolateColor_ax9ryg$;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately_0 = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var Korge$Config = $module$korge_root_korge.com.soywiz.korge.Korge.Config;
  var Module = $module$korge_root_korge.com.soywiz.korge.scene.Module;
  var SizeInt = $module$korma_root_korma.com.soywiz.korma.geom.SizeInt;
  var color_0 = $module$korim_root_korim.com.soywiz.korim.color;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  Apple.prototype = Object.create(Image.prototype);
  Apple.prototype.constructor = Apple;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  MovementMode.prototype = Object.create(Enum.prototype);
  MovementMode.prototype.constructor = MovementMode;
  PacmanSnakeSkin.prototype = Object.create(SnakeSkin.prototype);
  PacmanSnakeSkin.prototype.constructor = PacmanSnakeSkin;
  GameScene.prototype = Object.create(Scene.prototype);
  GameScene.prototype.constructor = GameScene;
  SnakeGameScene.prototype = Object.create(GameScene.prototype);
  SnakeGameScene.prototype.constructor = SnakeGameScene;
  PacmanGameScene.prototype = Object.create(GameScene.prototype);
  PacmanGameScene.prototype.constructor = PacmanGameScene;
  MarioGameScene.prototype = Object.create(GameScene.prototype);
  MarioGameScene.prototype.constructor = MarioGameScene;
  LoadingScene.prototype = Object.create(Scene.prototype);
  LoadingScene.prototype.constructor = LoadingScene;
  MainMenuScene.prototype = Object.create(Scene.prototype);
  MainMenuScene.prototype.constructor = MainMenuScene;
  SnakeGameModule.prototype = Object.create(Module.prototype);
  SnakeGameModule.prototype.constructor = SnakeGameModule;
  function Apple(bitmap) {
    Image.call(this, bitmap);
    this.spawn();
  }
  Apple.prototype.spawn = function () {
    this.x = random(new IntRange(96, 600), Random.Default);
    this.y = random(new IntRange(100, 500), Random.Default);
  };
  Apple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Apple',
    interfaces: [Image]
  };
  function Coroutine$apple($receiver_0, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
  }
  Coroutine$apple.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$apple.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$apple.prototype.constructor = Coroutine$apple;
  Coroutine$apple.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAtlas(std.resourcesVfs.get_61zpoe$('snake.atlas.json'), this.local$views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var snakeAtlas = this.result_0;
            var appleTile = snakeAtlas.get_61zpoe$('Apple_02.png');
            this.local$$receiver.addChild_l5rad2$(new Apple(appleTile));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function apple($receiver_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$apple($receiver_0, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function image$lambda($receiver) {
    return Unit;
  }
  function container$lambda($receiver) {
    return Unit;
  }
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
    this.head.direction = this.direction;
    for (var i = this.body.size - 1 | 0; i >= 1; i--) {
      var current = this.body.get_za3lpa$(i);
      var tmp$ = this.body.get_za3lpa$(i - 1 | 0);
      var x = tmp$.component1()
      , y = tmp$.component2();
      var previous = this.body.get_za3lpa$(i - 1 | 0);
      var direction = this.direction;
      if (previous.x === current.x && previous.y > current.y) {
        current.direction = Direction$DOWN_getInstance();
      } else if (previous.x === current.x && previous.y < current.y) {
        current.direction = Direction$UP_getInstance();
      } else if (previous.x < current.x && previous.y === current.y) {
        current.direction = Direction$LEFT_getInstance();
      } else if (previous.x > current.x && previous.y === current.y) {
        current.direction = Direction$RIGHT_getInstance();
      }current.lastX = current.x;
      current.lastY = current.y;
      current.x = x;
      current.y = y;
    }
    this.head.lastX = this.head.x;
    this.head.lastY = this.head.y;
    this.head.x = this.head.x + Kotlin.imul(this.direction.deltaX(), this.width);
    this.head.y = this.head.y + Kotlin.imul(this.direction.deltaY(), this.width);
    var tmp$_0;
    tmp$_0 = this.body.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.xpos = element.lastX;
      element.ypos = element.lastY;
    }
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
  function MovementMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MovementMode_initFields() {
    MovementMode_initFields = function () {
    };
    MovementMode$SNAKE_instance = new MovementMode('SNAKE', 0);
    MovementMode$PACMAN_instance = new MovementMode('PACMAN', 1);
    MovementMode$MARIO_instance = new MovementMode('MARIO', 2);
  }
  var MovementMode$SNAKE_instance;
  function MovementMode$SNAKE_getInstance() {
    MovementMode_initFields();
    return MovementMode$SNAKE_instance;
  }
  var MovementMode$PACMAN_instance;
  function MovementMode$PACMAN_getInstance() {
    MovementMode_initFields();
    return MovementMode$PACMAN_instance;
  }
  var MovementMode$MARIO_instance;
  function MovementMode$MARIO_getInstance() {
    MovementMode_initFields();
    return MovementMode$MARIO_instance;
  }
  MovementMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovementMode',
    interfaces: [Enum]
  };
  function MovementMode$values() {
    return [MovementMode$SNAKE_getInstance(), MovementMode$PACMAN_getInstance(), MovementMode$MARIO_getInstance()];
  }
  MovementMode.values = MovementMode$values;
  function MovementMode$valueOf(name) {
    switch (name) {
      case 'SNAKE':
        return MovementMode$SNAKE_getInstance();
      case 'PACMAN':
        return MovementMode$PACMAN_getInstance();
      case 'MARIO':
        return MovementMode$MARIO_getInstance();
      default:throwISE('No enum constant com.snakegame.actors.MovementMode.' + name);
    }
  }
  MovementMode.valueOf_61zpoe$ = MovementMode$valueOf;
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  function snake$lambda$addBodyPart(closure$snake, closure$bodyTile, closure$bodyParts, closure$tailTile, this$) {
    return function () {
      var body = closure$snake.body;
      var lastPart = body.get_za3lpa$(body.size - 1 | 0);
      body.add_11rb$(new SnakeBodyPart(lastPart.x, lastPart.y));
      last(closure$bodyParts).bitmap = closure$bodyTile;
      var tmp$ = closure$bodyParts;
      var $receiver = this$;
      var $receiver_0 = addTo(new Image(closure$tailTile, 0.0, 0.0), $receiver);
      image$lambda($receiver_0);
      tmp$.add_11rb$($receiver_0);
    };
  }
  function Coroutine$snake$lambda$lambda(closure$addBodyPart_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$addBodyPart = closure$addBodyPart_0;
    this.local$it = it_0;
  }
  Coroutine$snake$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$snake$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$snake$lambda$lambda.prototype.constructor = Coroutine$snake$lambda$lambda;
  Coroutine$snake$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.SPACE) {
              return this.local$closure$addBodyPart(), Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function snake$lambda$lambda(closure$addBodyPart_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$snake$lambda$lambda(closure$addBodyPart_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function snake$lambda$lambda_0(closure$addBodyPart) {
    return function ($receiver, it) {
      if (Kotlin.isType(it, Apple)) {
        it.spawn();
        closure$addBodyPart();
      }return Unit;
    };
  }
  function snake$lambda$lambda$lambda(closure$snake) {
    return function () {
      closure$snake.head.x = 128.0;
      closure$snake.head.y = 128.0;
      return Unit;
    };
  }
  function snake$lambda$lambda_1(closure$lockInput, closure$key, closure$newDirection, closure$movementMode, closure$speed, closure$frames, closure$snake, closure$collisionChecker, closure$bodyParts) {
    return function ($receiver) {
      var tmp$;
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
      }loop_label: switch (closure$movementMode.name) {
        case 'SNAKE':
          closure$frames.v += closure$speed;
          if (closure$frames.v >= TILE_SIZE) {
            closure$lockInput.v = false;
            closure$frames.v = 0.0;
            closure$snake.lastDirection = closure$snake.direction;
            closure$snake.direction = closure$newDirection.v;
            closure$snake.move();
            closure$collisionChecker.checkCollision_morwcd$(closure$snake.head.x, closure$snake.head.y, snake$lambda$lambda$lambda(closure$snake));
          } else {
            closure$snake.interpolate_14dthe$(closure$frames.v / TILE_SIZE);
          }

          break loop_label;
        case 'PACMAN':
          closure$frames.v += closure$speed;
          if (closure$collisionChecker.colides_lu1900$(closure$snake.head.x + Kotlin.imul(closure$newDirection.v.deltaX(), TILE_SIZE), closure$snake.head.y + Kotlin.imul(closure$newDirection.v.deltaY(), TILE_SIZE))) {
            closure$lockInput.v = false;
            closure$newDirection.v = closure$snake.direction;
          }
          if (closure$frames.v >= TILE_SIZE) {
            closure$lockInput.v = false;
            closure$snake.lastDirection = closure$snake.direction;
            closure$snake.direction = closure$newDirection.v;
            if (!closure$collisionChecker.colides_lu1900$(closure$snake.head.x + Kotlin.imul(closure$newDirection.v.deltaX(), TILE_SIZE), closure$snake.head.y + Kotlin.imul(closure$newDirection.v.deltaY(), TILE_SIZE))) {
              closure$snake.move();
              closure$frames.v = 0.0;
            }} else {
            closure$snake.interpolate_14dthe$(closure$frames.v / TILE_SIZE);
          }

          break loop_label;
        case 'MARIO':
          closure$frames.v += closure$speed;
          var $receiver_0 = closure$snake.body;
          var any$result;
          any$break: do {
            var tmp$_0;
            if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
              any$result = false;
              break any$break;
            }tmp$_0 = $receiver_0.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              if (closure$collisionChecker.colides_lu1900$(element.x, element.y + TILE_SIZE)) {
                any$result = true;
                break any$break;
              }}
            any$result = false;
          }
           while (false);
          var onGround = any$result;
          if (!onGround) {
            closure$newDirection.v = Direction$DOWN_getInstance();
          }
          if (closure$collisionChecker.colides_lu1900$(closure$snake.head.x + Kotlin.imul(closure$newDirection.v.deltaX(), TILE_SIZE), closure$snake.head.y + Kotlin.imul(closure$newDirection.v.deltaY(), TILE_SIZE))) {
            closure$lockInput.v = false;
            closure$newDirection.v = closure$snake.direction;
          }
          if (closure$frames.v >= TILE_SIZE) {
            closure$lockInput.v = false;
            closure$snake.lastDirection = closure$snake.direction;
            closure$snake.direction = closure$newDirection.v;
            if (!closure$collisionChecker.colides_lu1900$(closure$snake.head.x + Kotlin.imul(closure$newDirection.v.deltaX(), TILE_SIZE), closure$snake.head.y + Kotlin.imul(closure$newDirection.v.deltaY(), TILE_SIZE))) {
              closure$snake.move();
              closure$frames.v = 0.0;
            }} else {
            closure$snake.interpolate_14dthe$(closure$frames.v / TILE_SIZE);
          }

          break loop_label;
      }
      var $receiver_1 = closure$bodyParts;
      var tmp$_1, tmp$_0_0;
      var index = 0;
      tmp$_1 = $receiver_1.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2, tmp$_3;
        var bodyPart = closure$snake.body.get_za3lpa$(checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)));
        item.x = bodyPart.xpos + (TILE_SIZE / 2 | 0);
        item.y = bodyPart.ypos + (TILE_SIZE / 2 | 0);
        switch (bodyPart.direction.name) {
          case 'RIGHT':
            tmp$_2 = 1.0;
            break;
          case 'LEFT':
            tmp$_2 = 1.0;
            break;
          case 'UP':
            tmp$_2 = -1.0;
            break;
          case 'DOWN':
            tmp$_2 = 1.0;
            break;
          default:tmp$_2 = Kotlin.noWhenBranchMatched();
            break;
        }
        item.scaleY = tmp$_2;
        switch (bodyPart.direction.name) {
          case 'RIGHT':
            tmp$_3 = 270.0;
            break;
          case 'LEFT':
            tmp$_3 = 90.0;
            break;
          case 'UP':
            tmp$_3 = 0.0;
            break;
          case 'DOWN':
            tmp$_3 = 0.0;
            break;
          default:tmp$_3 = Kotlin.noWhenBranchMatched();
            break;
        }
        item.rotationDegrees = tmp$_3;
        anchor(item, 0.5, 0.5);
      }
      return Unit;
    };
  }
  function Coroutine$snake($receiver_0, views_0, skin_0, collisionChecker_0, movementMode_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$skin = skin_0;
    this.local$collisionChecker = collisionChecker_0;
    this.local$movementMode = movementMode_0;
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
            if (this.local$movementMode === void 0)
              this.local$movementMode = MovementMode$SNAKE_getInstance();
            this.state_0 = 2;
            this.result_0 = readAtlas(std.resourcesVfs.get_61zpoe$('snake.atlas.json'), this.local$views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var snakeAtlas = this.result_0;
            var headTile = snakeAtlas.get_61zpoe$(this.local$skin.headTile);
            var bodyTile = snakeAtlas.get_61zpoe$(this.local$skin.bodyTile);
            var tailTile = snakeAtlas.get_61zpoe$(this.local$skin.tailTile);
            var initialX = 2 * 32.0;
            var initialY = 3 * 32.0;
            var snake = new Snake(initialX, initialY, 2);
            var key = {v: 0};
            var prop = getPropertyCallableRef('onKeyDown', 1, function ($receiver) {
              return $receiver.onKeyDown;
            });
            var tmp$;
            if ((tmp$ = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null) {
              prop.get(tmp$).add_25kf2w$(snake$lambda(key));
            }
            var prop_0 = getPropertyCallableRef('onKeyUp', 1, function ($receiver) {
              return $receiver.onKeyUp;
            });
            var tmp$_0;
            if ((tmp$_0 = this.local$$receiver != null ? get_keys(this.local$$receiver) : null) != null) {
              prop_0.get(tmp$_0).add_25kf2w$(snake$lambda_0(key));
            }
            var $receiver_0 = addTo(new Container_init(), this.local$$receiver);
            var $receiver_0_0 = addTo(new Image(headTile, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_0);
            var $receiver_0_1 = addTo(new Image(bodyTile, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_1);
            var $receiver_0_2 = addTo(new Image(tailTile, 0.0, 0.0), $receiver_0);
            image$lambda($receiver_0_2);
            var bodyParts = mutableListOf([$receiver_0_0, $receiver_0_1, $receiver_0_2]);
            var head = first(bodyParts);
            var addBodyPart = snake$lambda$addBodyPart(snake, bodyTile, bodyParts, tailTile, $receiver_0);
            var prop_1 = getPropertyCallableRef('onKeyDown', 1, function ($receiver) {
              return $receiver.onKeyDown;
            });
            var tmp$_1;
            if ((tmp$_1 = $receiver_0 != null ? get_keys($receiver_0) : null) != null) {
              prop_1.get(tmp$_1).add_25kf2w$(snake$lambda$lambda(addBodyPart));
            }
            var frames = {v: 0.0};
            var speed = 4.0;
            var newDirection = {v: snake.direction};
            var lockInput = {v: false};
            onCollision(head, void 0, void 0, void 0, snake$lambda$lambda_0(addBodyPart));
            addFixedUpdater($receiver_0, MILLISECONDS_PER_FRAME, false, void 0, snake$lambda$lambda_1(lockInput, key, newDirection, this.local$movementMode, speed, frames, snake, this.local$collisionChecker, bodyParts));
            return snake;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function snake($receiver_0, views_0, skin_0, collisionChecker_0, movementMode_0, continuation_0, suspended) {
    var instance = new Coroutine$snake($receiver_0, views_0, skin_0, collisionChecker_0, movementMode_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function SnakeSkin() {
    this.headTile_145vjg$_0 = 'snake_head_01.png';
    this.bodyTile_n83ixe$_0 = 'snake_body.png';
    this.tailTile_193hk4$_0 = 'snake_body_tail.png';
  }
  Object.defineProperty(SnakeSkin.prototype, 'headTile', {
    get: function () {
      return this.headTile_145vjg$_0;
    }
  });
  Object.defineProperty(SnakeSkin.prototype, 'bodyTile', {
    get: function () {
      return this.bodyTile_n83ixe$_0;
    }
  });
  Object.defineProperty(SnakeSkin.prototype, 'tailTile', {
    get: function () {
      return this.tailTile_193hk4$_0;
    }
  });
  SnakeSkin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnakeSkin',
    interfaces: []
  };
  function PacmanSnakeSkin() {
    SnakeSkin.call(this);
    this.headTile_g5r8oc$_0 = 'PacMan_Snake_Head_01.png';
    this.bodyTile_uj3ety$_0 = 'PacMan_Snake_Bdoy_01.png';
    this.tailTile_ij0lrw$_0 = 'PacMan_Snake_Tail.png';
  }
  Object.defineProperty(PacmanSnakeSkin.prototype, 'headTile', {
    get: function () {
      return this.headTile_g5r8oc$_0;
    }
  });
  Object.defineProperty(PacmanSnakeSkin.prototype, 'bodyTile', {
    get: function () {
      return this.bodyTile_uj3ety$_0;
    }
  });
  Object.defineProperty(PacmanSnakeSkin.prototype, 'tailTile', {
    get: function () {
      return this.tailTile_ij0lrw$_0;
    }
  });
  PacmanSnakeSkin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PacmanSnakeSkin',
    interfaces: [SnakeSkin]
  };
  var DESIRED_FPS;
  var MILLISECONDS_PER_FRAME;
  var TILE_SIZE;
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
  function CollisionChecker(tiledMapView) {
    var $receiver = tiledMapView.tiledMap.data.allLayers;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, TiledMap$Layer$Patterns))
        destination.add_11rb$(element);
    }
    this.collisionLayer_0 = destination.get_za3lpa$(0);
  }
  CollisionChecker.prototype.checkCollision_morwcd$ = function (x, y, block) {
    if (this.colides_lu1900$(x, y)) {
      block();
    }};
  CollisionChecker.prototype.colides_lu1900$ = function (x, y) {
    var tilePosX = numberToInt(x) / TILE_SIZE | 0;
    var tilePosY = numberToInt(y) / TILE_SIZE | 0;
    if (tilePosX < 0 || tilePosY < 0)
      return false;
    if (this.collisionLayer_0.map.width <= tilePosX)
      return false;
    if (this.collisionLayer_0.map.height <= tilePosY)
      return false;
    return this.collisionLayer_0.map.get_vux9f0$(tilePosX, tilePosY).value !== 0;
  };
  CollisionChecker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollisionChecker',
    interfaces: []
  };
  function image$lambda_0($receiver) {
    return Unit;
  }
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
            image$lambda_0($receiver_0);
            this.state_0 = 3;
            this.result_0 = readTiledMap(std.resourcesVfs.get_61zpoe$('level' + this.local$level + '/map.tmx'), void 0, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var tiledMap = this.result_0;
            var $receiver_0_0 = addTo(new TiledMapView_init(tiledMap, true), this.local$$receiver);
            tiledMapView$lambda($receiver_0_0);
            return $receiver_0_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  function solidRect$lambda($receiver) {
    return Unit;
  }
  function camera$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function GameScene(level, movementMode, snakeSkin, scroll) {
    Scene.call(this);
    this.level = level;
    this.movementMode = movementMode;
    this.snakeSkin = snakeSkin;
    this.scroll = scroll;
  }
  function Coroutine$GameScene$fade$lambda(closure$fadeRect_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fadeRect = closure$fadeRect_0;
  }
  Coroutine$GameScene$fade$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$fade$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$fade$lambda.prototype.constructor = Coroutine$GameScene$fade$lambda;
  Coroutine$GameScene$fade$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tween(this.local$closure$fadeRect, [new V2_init(getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, this.local$closure$fadeRect), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, this.local$closure$fadeRect)), 0.0, 1.0, getCallableRef('_interpolate', function (ratio, l, r) {
              return _interpolate(ratio, l, r);
            }), true)], TimeSpan.Companion.fromSeconds_14dthe$(2), void 0, void 0, this);
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameScene$fade$lambda(closure$fadeRect_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$fade$lambda(closure$fadeRect_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GameScene.prototype.fade_st8p7j$ = function ($receiver) {
    var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0))), $receiver);
    solidRect$lambda($receiver_0);
    var fadeRect = $receiver_0;
    launch(this, GameScene$fade$lambda(fadeRect));
  };
  function Coroutine$GameScene$unFade$lambda(closure$fadeRect_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fadeRect = closure$fadeRect_0;
  }
  Coroutine$GameScene$unFade$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$unFade$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$unFade$lambda.prototype.constructor = Coroutine$GameScene$unFade$lambda;
  Coroutine$GameScene$unFade$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tween(this.local$closure$fadeRect, [new V2_init(getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, this.local$closure$fadeRect), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, this.local$closure$fadeRect)), 1.0, 0.0, getCallableRef('_interpolate', function (ratio, l, r) {
              return _interpolate(ratio, l, r);
            }), true)], TimeSpan.Companion.fromSeconds_14dthe$(2), void 0, void 0, this);
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameScene$unFade$lambda(closure$fadeRect_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$unFade$lambda(closure$fadeRect_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GameScene.prototype.unFade_st8p7j$ = function ($receiver) {
    var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1))), $receiver);
    solidRect$lambda($receiver_0);
    var fadeRect = $receiver_0;
    launch(this, GameScene$unFade$lambda(fadeRect));
  };
  GameScene.prototype.customInit_st8p7j$ = function ($receiver, continuation) {
  };
  function GameScene$sceneInit$lambda$lambda(closure$cameraCenter, closure$player, closure$cameraSpeed, closure$tiledMap, closure$screenSize) {
    return function ($receiver) {
      var target = closure$cameraCenter - closure$player.head.xpos;
      if ($receiver.x < target) {
        $receiver.x += closure$cameraSpeed;
        if ($receiver.x > target)
          $receiver.x = target;
      } else if ($receiver.x > target) {
        $receiver.x -= closure$cameraSpeed;
        if ($receiver.x < target)
          $receiver.x = target;
      }if ($receiver.x > 0)
        $receiver.x = 0.0;
      if ($receiver.x < -(closure$tiledMap.width - closure$screenSize))
        $receiver.x = -(closure$tiledMap.width - closure$screenSize);
      return Unit;
    };
  }
  function Coroutine$sceneInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver_0 = void 0;
    this.local$tiledMap = void 0;
    this.local$collisionChecker = void 0;
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
            this.local$$receiver_0 = addTo(new Camera_init(), this.local$$receiver);
            this.state_0 = 2;
            this.result_0 = tiledMap(this.local$$receiver_0, this.$this.level, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tiledMap = this.result_0;
            this.local$collisionChecker = new CollisionChecker(this.local$tiledMap);
            this.state_0 = 3;
            this.result_0 = apple(this.local$$receiver_0, this.$this.views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = snake(this.local$$receiver_0, this.$this.views, this.$this.snakeSkin, this.local$collisionChecker, this.$this.movementMode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var player = this.result_0;
            if (this.$this.scroll) {
              var cameraSpeed = 4;
              var cameraCenter = 400;
              var screenSize = 800;
              addFixedUpdater(this.local$$receiver_0, MILLISECONDS_PER_FRAME, void 0, void 0, GameScene$sceneInit$lambda$lambda(cameraCenter, player, cameraSpeed, this.local$tiledMap, screenSize));
            }
            this.state_0 = 5;
            this.result_0 = this.$this.customInit_st8p7j$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.$this.unFade_st8p7j$(this.local$$receiver);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  function SnakeGameScene() {
    GameScene.call(this, 1, MovementMode$SNAKE_getInstance(), new SnakeSkin(), false);
  }
  function Coroutine$customInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$customInit_st8p7j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$customInit_st8p7j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$customInit_st8p7j$.prototype.constructor = Coroutine$customInit_st8p7j$;
  Coroutine$customInit_st8p7j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmapFont(std.resourcesVfs.get_61zpoe$('I-pixel-u.fnt'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var font = this.result_0;
            var color_0;
            color_0 = color.Colors.WHITE;
            var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$('00023', 32.0, color_0, font), this.local$$receiver);
            text$lambda($receiver_0);
            position($receiver_0, 25, 15);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SnakeGameScene.prototype.customInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$customInit_st8p7j$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SnakeGameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnakeGameScene',
    interfaces: [GameScene]
  };
  function PacmanGameScene() {
    GameScene.call(this, 2, MovementMode$PACMAN_getInstance(), new PacmanSnakeSkin(), false);
  }
  PacmanGameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PacmanGameScene',
    interfaces: [GameScene]
  };
  function MarioGameScene() {
    GameScene.call(this, 3, MovementMode$MARIO_getInstance(), new SnakeSkin(), true);
  }
  MarioGameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MarioGameScene',
    interfaces: [GameScene]
  };
  function image$lambda_1($receiver) {
    return Unit;
  }
  function LoadingScene() {
    Scene.call(this);
    this.minDegrees = get_degrees(-16);
    this.maxDegrees = get_degrees(16);
  }
  function LoadingScene$sceneInit$lambda(this$LoadingScene) {
    return function ($receiver) {
      $receiver.rotation = this$LoadingScene.maxDegrees;
      anchor($receiver, 0.5, 0.5);
      scale($receiver, 0.8);
      position($receiver, 400, 300);
      return Unit;
    };
  }
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
            this.result_0 = tween(tmp$, [new V2_init($receiver, $receiver.get(), end, getCallableRef('_interpolateAngle', function (ratio_0, l_0, r_0) {
              return _interpolateAngle(ratio_0, l_0, r_0);
            }), false)], TimeSpan.Companion.fromSeconds_14dthe$(1), Easing.Companion.EASE_IN_OUT, void 0, this);
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
            this.result_0 = tween(tmp$_0, [new V2_init($receiver_0, $receiver_0.get(), end_0, getCallableRef('_interpolateAngle', function (ratio_0, l_0, r_0) {
              return _interpolateAngle(ratio_0, l_0, r_0);
            }), false)], TimeSpan.Companion.fromSeconds_14dthe$(1), Easing.Companion.EASE_IN_OUT, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $this = this.local$this$LoadingScene.sceneContainer;
            var injects = [];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 4;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(MainMenuScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  function text$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately_0(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function MainMenuScene() {
    Scene.call(this);
  }
  function Coroutine$MainMenuScene$sceneInit$lambda(this$sceneInit_0, closure$questionMark_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$sceneInit = this$sceneInit_0;
    this.local$closure$questionMark = closure$questionMark_0;
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
            this.result_0 = wait(this.local$this$sceneInit, TimeSpan.Companion.fromSeconds_14dthe$(2), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = tween(this.local$closure$questionMark, [new V2_init(getPropertyCallableRef('color', 0, function ($receiver) {
              return $receiver.color;
            }.bind(null, this.local$closure$questionMark), function ($receiver, value) {
              $receiver.color = value;
            }.bind(null, this.local$closure$questionMark)), RGBA.Companion.float_7b5o5w$(numberToDouble(255), numberToDouble(255), numberToDouble(255), numberToDouble(0)), RGBA.Companion.float_7b5o5w$(numberToDouble(255), numberToDouble(255), numberToDouble(255), numberToDouble(1)), getCallableRef('_interpolateColor', function (ratio, l, r) {
              return _interpolateColor(ratio, l, r);
            }), true)], TimeSpan.Companion.fromSeconds_14dthe$(1), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda(this$sceneInit_0, closure$questionMark_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda(this$sceneInit_0, closure$questionMark_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MainMenuScene$sceneInit$lambda_0(this$MainMenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainMenuScene = this$MainMenuScene_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda_0.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda_0;
  Coroutine$MainMenuScene$sceneInit$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$MainMenuScene.sceneContainer;
            var injects = [1];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 2;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(SnakeGameScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda_0(this$MainMenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda_0(this$MainMenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MainMenuScene$sceneInit$lambda_1(this$MainMenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainMenuScene = this$MainMenuScene_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda_1.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda_1;
  Coroutine$MainMenuScene$sceneInit$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$MainMenuScene.sceneContainer;
            var injects = [1];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 2;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(PacmanGameScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda_1(this$MainMenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda_1(this$MainMenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MainMenuScene$sceneInit$lambda_2(this$MainMenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainMenuScene = this$MainMenuScene_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda_2.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda_2;
  Coroutine$MainMenuScene$sceneInit$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$MainMenuScene.sceneContainer;
            var injects = [1];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 2;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(MarioGameScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda_2(this$MainMenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda_2(this$MainMenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MainMenuScene$sceneInit$lambda_3(closure$mario_0, closure$pacman_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$mario = closure$mario_0;
    this.local$closure$pacman = closure$pacman_0;
    this.local$it = it_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda_3.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda_3;
  Coroutine$MainMenuScene$sceneInit$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = hide(this.local$it.view, TimeSpan.Companion.fromSeconds_14dthe$(0), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$mario.alpha = 1.0;
            this.local$closure$pacman.alpha = 1.0;
            return this.local$it.view.removeFromParent(), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda_3(closure$mario_0, closure$pacman_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda_3(closure$mario_0, closure$pacman_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$_1($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$font = void 0;
    this.local$pacman = void 0;
    this.local$mario = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_1.prototype.constructor = Coroutine$sceneInit_st8p7j$_1;
  Coroutine$sceneInit_st8p7j$_1.prototype.doResume = function () {
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
            this.state_0 = 3;
            this.result_0 = readBitmapFont(std.resourcesVfs.get_61zpoe$('I-pixel-u.fnt'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$font = this.result_0;
            var text = 'A CLASSIC SNAKE GAME';
            var color_0;
            color_0 = color.Colors.WHITE;
            var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 32.0, color_0, this.local$font), this.local$$receiver);
            text$lambda_0($receiver_0_0);
            positionY(centerXOn($receiver_0_0, this.local$$receiver), 200);
            var color_0_0;
            color_0_0 = color.Colors.WHITE;
            var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$('?', 32.0, color_0_0, this.local$font), this.local$$receiver);
            text$lambda_0($receiver_0_1);
            var questionMark = position($receiver_0_1, 632, 200);
            questionMark.color = RGBA.Companion.float_7b5o5w$(numberToDouble(255), numberToDouble(255), numberToDouble(255), numberToDouble(0));
            launch(this.$this, MainMenuScene$sceneInit$lambda(this.local$$receiver, questionMark));
            var color_0_1;
            color_0_1 = color.Colors.WHITE;
            var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$('PLAY', 28.0, color_0_1, this.local$font), this.local$$receiver);
            text$lambda_0($receiver_0_2);
            var $receiver = positionY(centerXOn($receiver_0_2, this.local$$receiver), 350);
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$;
            if ((tmp$ = $receiver != null ? get_mouse($receiver) : null) != null) {
              prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, MainMenuScene$sceneInit$lambda_0(this.$this)));
            }
            var color_0_2;
            color_0_2 = color.Colors.WHITE;
            var $receiver_0_3 = addTo(Text.Companion.invoke_8ii8iq$('PACMAN', 28.0, color_0_2, this.local$font), this.local$$receiver);
            text$lambda_0($receiver_0_3);
            var $receiver_1 = positionY(centerXOn($receiver_0_3, this.local$$receiver), 400);
            var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_0;
            if ((tmp$_0 = $receiver_1 != null ? get_mouse($receiver_1) : null) != null) {
              prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_0, MainMenuScene$sceneInit$lambda_1(this.$this)));
            }
            this.local$pacman = ensureNotNull($receiver_1);
            this.state_0 = 4;
            this.result_0 = hide(this.local$pacman, TimeSpan.Companion.fromSeconds_14dthe$(0), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var color_0_3;
            color_0_3 = color.Colors.WHITE;
            var $receiver_0_4 = addTo(Text.Companion.invoke_8ii8iq$('MARIO', 28.0, color_0_3, this.local$font), this.local$$receiver);
            text$lambda_0($receiver_0_4);
            var $receiver_2 = positionY(centerXOn($receiver_0_4, this.local$$receiver), 450);
            var prop_1 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_1;
            if ((tmp$_1 = $receiver_2 != null ? get_mouse($receiver_2) : null) != null) {
              prop_1.get(tmp$_1).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_1, MainMenuScene$sceneInit$lambda_2(this.$this)));
            }
            this.local$mario = ensureNotNull($receiver_2);
            this.state_0 = 5;
            this.result_0 = hide(this.local$mario, TimeSpan.Companion.fromSeconds_14dthe$(0), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var color_0_4;
            color_0_4 = color.Colors.WHITE;
            var $receiver_0_5 = addTo(Text.Companion.invoke_8ii8iq$('LEVELS', 28.0, color_0_4, this.local$font), this.local$$receiver);
            text$lambda_0($receiver_0_5);
            var $receiver_3 = positionY(centerXOn($receiver_0_5, this.local$$receiver), 400);
            var prop_2 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_2;
            if ((tmp$_2 = $receiver_3 != null ? get_mouse($receiver_3) : null) != null) {
              prop_2.get(tmp$_2).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_2, MainMenuScene$sceneInit$lambda_3(this.local$mario, this.local$pacman)));
            }
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MainMenuScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_1(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
    this.bgcolor_k9kn70$_0 = color_0.Colors.get_61zpoe$('#2b2b2b');
    this.mainScene_isvq47$_0 = getKClass(MainMenuScene);
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
            return new SnakeGameScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
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
  function Coroutine$SnakeGameModule$init$lambda$lambda_2($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_2.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_2;
  Coroutine$SnakeGameModule$init$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new PacmanGameScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SnakeGameModule$init$lambda$lambda_2($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_2($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_3($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_3.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_3;
  Coroutine$SnakeGameModule$init$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new MarioGameScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SnakeGameModule$init$lambda$lambda_3($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_3($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  SnakeGameModule.prototype.init_y6n311$ = function (injector, continuation) {
    injector.mapPrototype_siz2e9$(getKClass(LoadingScene), SnakeGameModule$init$lambda$lambda);
    injector.mapPrototype_siz2e9$(getKClass(MainMenuScene), SnakeGameModule$init$lambda$lambda_0);
    injector.mapPrototype_siz2e9$(getKClass(SnakeGameScene), SnakeGameModule$init$lambda$lambda_1);
    injector.mapPrototype_siz2e9$(getKClass(PacmanGameScene), SnakeGameModule$init$lambda$lambda_2);
    injector.mapPrototype_siz2e9$(getKClass(MarioGameScene), SnakeGameModule$init$lambda$lambda_3);
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
    }return SnakeGameModule_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$snakegame = package$com.snakegame || (package$com.snakegame = {});
  var package$actors = package$snakegame.actors || (package$snakegame.actors = {});
  package$actors.Apple = Apple;
  package$actors.apple_23kj5u$ = apple;
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
  Object.defineProperty(MovementMode, 'SNAKE', {
    get: MovementMode$SNAKE_getInstance
  });
  Object.defineProperty(MovementMode, 'PACMAN', {
    get: MovementMode$PACMAN_getInstance
  });
  Object.defineProperty(MovementMode, 'MARIO', {
    get: MovementMode$MARIO_getInstance
  });
  package$actors.MovementMode = MovementMode;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  $$importsForInline$$.korgejam = _;
  package$actors.snake_aoyxjh$ = snake;
  package$actors.SnakeSkin = SnakeSkin;
  package$actors.PacmanSnakeSkin = PacmanSnakeSkin;
  Object.defineProperty(package$snakegame, 'DESIRED_FPS', {
    get: function () {
      return DESIRED_FPS;
    }
  });
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  Object.defineProperty(package$snakegame, 'MILLISECONDS_PER_FRAME', {
    get: function () {
      return MILLISECONDS_PER_FRAME;
    }
  });
  Object.defineProperty(package$snakegame, 'TILE_SIZE', {
    get: function () {
      return TILE_SIZE;
    }
  });
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
  package$map.CollisionChecker = CollisionChecker;
  package$map.tiledMap_iz2l6n$ = tiledMap;
  $$importsForInline$$['korim-root-korim'] = $module$korim_root_korim;
  var package$scenes = package$snakegame.scenes || (package$snakegame.scenes = {});
  package$scenes.GameScene = GameScene;
  package$scenes.SnakeGameScene = SnakeGameScene;
  package$scenes.PacmanGameScene = PacmanGameScene;
  package$scenes.MarioGameScene = MarioGameScene;
  package$scenes.LoadingScene = LoadingScene;
  package$scenes.MainMenuScene = MainMenuScene;
  _.main = main;
  $$importsForInline$$['korinject-root-korinject'] = $module$korinject_root_korinject;
  Object.defineProperty(_, 'SnakeGameModule', {
    get: SnakeGameModule_getInstance
  });
  DESIRED_FPS = 60;
  var $receiver_1 = 1000.0 / DESIRED_FPS;
  MILLISECONDS_PER_FRAME = TimeSpan.Companion.fromMilliseconds_14dthe$($receiver_1);
  TILE_SIZE = 32;
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
