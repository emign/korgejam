(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge-root-korge', 'kmem-root-kmem', 'korim-root-korim', 'korgw-root-korgw', 'korma-root-korma', 'klock-root-klock', 'korio-root-korio', 'korinject-root-korinject'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge-root-korge'), require('kmem-root-kmem'), require('korim-root-korim'), require('korgw-root-korgw'), require('korma-root-korma'), require('klock-root-klock'), require('korio-root-korio'), require('korinject-root-korinject'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korgejam'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korgejam'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korgejam'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korgejam'.");
    }if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'korgejam'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korgejam'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korgejam'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korgejam'.");
    }if (typeof this['korinject-root-korinject'] === 'undefined') {
      throw new Error("Error loading module 'korgejam'. Its dependency 'korinject-root-korinject' was not found. Please, check whether 'korinject-root-korinject' is loaded prior to 'korgejam'.");
    }root.korgejam = factory(typeof korgejam === 'undefined' ? {} : korgejam, kotlin, this['korge-root-korge'], this['kmem-root-kmem'], this['korim-root-korim'], this['korgw-root-korgw'], this['korma-root-korma'], this['klock-root-klock'], this['korio-root-korio'], this['korinject-root-korinject']);
  }
}(this, function (_, Kotlin, $module$korge_root_korge, $module$kmem_root_kmem, $module$korim_root_korim, $module$korgw_root_korgw, $module$korma_root_korma, $module$klock_root_klock, $module$korio_root_korio, $module$korinject_root_korinject) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Image = $module$korge_root_korge.com.soywiz.korge.view.Image;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_x = $module$korge_root_korge.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.get_x_qai0ns$;
  var get_y = $module$korge_root_korge.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.get_y_qai0ns$;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var Unit = Kotlin.kotlin.Unit;
  var addFixedUpdater = $module$korge_root_korge.com.soywiz.korge.view.addFixedUpdater_ns2cui$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_lj338n$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var position_0 = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var onCollision = $module$korge_root_korge.com.soywiz.korge.view.onCollision_1uywuz$;
  var equals = Kotlin.equals;
  var anchor = $module$korge_root_korge.com.soywiz.korge.view.anchor_11wmr3$;
  var Container_init = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwUPAE = Kotlin.throwUPAE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var unsetBits = $module$kmem_root_kmem.com.soywiz.kmem.unsetBits_dqglrj$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var centerXOn = $module$korge_root_korge.com.soywiz.korge.view.centerXOn_apzp43$;
  var scale = $module$korge_root_korge.com.soywiz.korge.view.scale_2cbtc5$;
  var getCallableRef = Kotlin.getCallableRef;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Key = $module$korgw_root_korgw.com.soywiz.korev.Key;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var numberToInt = Kotlin.numberToInt;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var timeout = $module$korge_root_korge.com.soywiz.korge.time.timeout_7ghvt3$;
  var throwCCE = Kotlin.throwCCE;
  var show = $module$korge_root_korge.com.soywiz.korge.tween.show_yz29kn$;
  var wait = $module$korge_root_korge.com.soywiz.korge.time.wait_f287ec$;
  var hide = $module$korge_root_korge.com.soywiz.korge.tween.hide_yz29kn$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var launch = $module$korio_root_korio.com.soywiz.korio.async.launch_ykkwzu$;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var umod = $module$kmem_root_kmem.com.soywiz.kmem.umod_dqglrj$;
  var UInt_init = Kotlin.kotlin.UInt;
  var TiledMap$Layer$Patterns = $module$korge_root_korge.com.soywiz.korge.tiled.TiledMap.Layer.Patterns;
  var random_0 = Kotlin.kotlin.ranges.random_xmiyix$;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var readTiledMap = $module$korge_root_korge.com.soywiz.korge.tiled.readTiledMap_utz4xw$;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var TiledMapView_init = $module$korge_root_korge.com.soywiz.korge.tiled.TiledMapView;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var readAtlas = $module$korge_root_korge.com.soywiz.korge.atlas.readAtlas_s70ap7$;
  var readBitmapFont = $module$korim_root_korim.com.soywiz.korim.font.readBitmapFont_2axf5n$;
  var RGBA = $module$korim_root_korim.com.soywiz.korim.color.RGBA;
  var tween = $module$korge_root_korge.com.soywiz.korge.tween.tween_t8t7it$;
  var launch_0 = $module$korio_root_korio.com.soywiz.korio.async.launch_hilpzi$;
  var addUpdater = $module$korge_root_korge.com.soywiz.korge.view.addUpdater_t24ukx$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var sleep = $module$korge_root_korge.com.soywiz.korge.scene.sleep_bfzdjs$;
  var getKClass = Kotlin.getKClass;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_hilpzi$;
  var delay = $module$korio_root_korio.com.soywiz.korio.async.delay_fv8bff$;
  var Scene = $module$korge_root_korge.com.soywiz.korge.scene.Scene;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var _interpolate = $module$korge_root_korge.com.soywiz.korge.tween._interpolate_yvo9jy$;
  var V2_init = $module$korge_root_korge.com.soywiz.korge.tween.V2;
  var numberToDouble = Kotlin.numberToDouble;
  var SolidRect_init = $module$korge_root_korge.com.soywiz.korge.view.SolidRect;
  var color_0 = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var centerBetween = $module$korge_root_korge.com.soywiz.korge.view.centerBetween_wgq76x$;
  var TimeSpan_0 = $module$korge_root_korge.$$importsForInline$$['klock-root-klock'].com.soywiz.klock.TimeSpan;
  var Camera_init = $module$korge_root_korge.com.soywiz.korge.view.Camera;
  var Easing = $module$korma_root_korma.com.soywiz.korma.interpolation.Easing;
  var get_degrees = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_s8ev3n$;
  var _interpolateAngle = $module$korge_root_korge.com.soywiz.korge.tween._interpolateAngle_a0zjys$;
  var positionY = $module$korge_root_korge.com.soywiz.korge.view.positionY_bfm155$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var _interpolateColor = $module$korge_root_korge.com.soywiz.korge.tween._interpolateColor_ax9ryg$;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately_0 = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var Korge$Config = $module$korge_root_korge.com.soywiz.korge.Korge.Config;
  var Module = $module$korge_root_korge.com.soywiz.korge.scene.Module;
  var SizeInt = $module$korma_root_korma.com.soywiz.korma.geom.SizeInt;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  Apple.prototype = Object.create(Image.prototype);
  Apple.prototype.constructor = Apple;
  Coin.prototype = Object.create(Image.prototype);
  Coin.prototype.constructor = Coin;
  Dot.prototype = Object.create(Image.prototype);
  Dot.prototype.constructor = Dot;
  Ghost.prototype = Object.create(Image.prototype);
  Ghost.prototype.constructor = Ghost;
  Pacoman.prototype = Object.create(Image.prototype);
  Pacoman.prototype.constructor = Pacoman;
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
  RestartMarioScene.prototype = Object.create(Scene.prototype);
  RestartMarioScene.prototype.constructor = RestartMarioScene;
  RestartPacmanScene.prototype = Object.create(Scene.prototype);
  RestartPacmanScene.prototype.constructor = RestartPacmanScene;
  RestartSnakeScene.prototype = Object.create(Scene.prototype);
  RestartSnakeScene.prototype.constructor = RestartSnakeScene;
  TransitionToMarioScene.prototype = Object.create(Scene.prototype);
  TransitionToMarioScene.prototype.constructor = TransitionToMarioScene;
  TransitionToPacmanScene.prototype = Object.create(Scene.prototype);
  TransitionToPacmanScene.prototype.constructor = TransitionToPacmanScene;
  SnakeGameModule.prototype = Object.create(Module.prototype);
  SnakeGameModule.prototype.constructor = SnakeGameModule;
  function Apple(bitmap, collisionChecker) {
    Image.call(this, bitmap);
    this.collisionChecker = collisionChecker;
    this.spawn();
    this.smoothing = false;
  }
  Apple.prototype.spawn = function () {
    var point = this.collisionChecker.getRandomSpawnPoint();
    position(this, get_x(point), get_y(point));
  };
  Apple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Apple',
    interfaces: [Image]
  };
  function apple($receiver, views, collisionChecker, continuation) {
    var snakeAtlas = Resources$Companion_getInstance().snakeAtlas;
    var appleTile = snakeAtlas.get_61zpoe$('Apple_02.png');
    var $receiver_0 = new Apple(appleTile, collisionChecker);
    $receiver_0.smoothing = false;
    $receiver.addChild_l5rad2$($receiver_0);
  }
  function Coin(bitmap) {
    Image.call(this, bitmap);
    this.smoothing = false;
  }
  Coin.prototype.die = function () {
    this.removeFromParent();
  };
  Coin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Coin',
    interfaces: [Image]
  };
  function coin($receiver, views, point, continuation) {
    var snakeAtlas = Resources$Companion_getInstance().snakeAtlas;
    var appleTile = snakeAtlas.get_61zpoe$('Apple_02.png');
    var $receiver_0 = new Coin(appleTile);
    position($receiver_0, point.x, point.y);
    $receiver_0.smoothing = false;
    $receiver.addChild_l5rad2$($receiver_0);
  }
  function Dot(bitmap) {
    Image.call(this, bitmap);
    this.smoothing = false;
  }
  Dot.prototype.die = function () {
    this.removeFromParent();
  };
  Dot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dot',
    interfaces: [Image]
  };
  function dot($receiver, views, point, continuation) {
    var snakeAtlas = Resources$Companion_getInstance().snakeAtlas;
    var appleTile = snakeAtlas.get_61zpoe$('PacoMan_Dot.png');
    var $receiver_0 = new Dot(appleTile);
    position($receiver_0, point.x + 8, point.y + 8);
    $receiver_0.smoothing = false;
    $receiver.addChild_l5rad2$($receiver_0);
  }
  function Ghost(bitmap, collisionChecker) {
    Image.call(this, bitmap);
    this.collisionChecker = collisionChecker;
    this.spawn();
    this.smoothing = false;
  }
  Ghost.prototype.spawn = function () {
    var point = this.collisionChecker.getRandomSpawnPoint();
    position(this, get_x(point), get_y(point));
  };
  Ghost.prototype.die = function () {
    this.removeFromParent();
  };
  Ghost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ghost',
    interfaces: [Image]
  };
  function ghost$getRandomDirection() {
    return random(Direction$values(), Random.Default);
  }
  function ghost$move(closure$direction) {
    return function ($receiver) {
      $receiver.x = $receiver.x + closure$direction.v.deltaX();
      $receiver.y = $receiver.y + closure$direction.v.deltaY();
      if ($receiver.x < (0 - TILE_SIZE | 0))
        $receiver.x = 800.0;
      if ($receiver.x > 800)
        $receiver.x = 0.0 - TILE_SIZE;
    };
  }
  function ghost$lambda(closure$direction, closure$collisionChecker, closure$move, closure$getRandomDirection) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      switch (closure$direction.v.name) {
        case 'LEFT':
          tmp$ = 0;
          break;
        case 'RIGHT':
          tmp$ = 1;
          break;
        case 'UP':
          tmp$ = 0;
          break;
        case 'DOWN':
          tmp$ = 0;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var m = tmp$;
      switch (closure$direction.v.name) {
        case 'LEFT':
          tmp$_0 = 0;
          break;
        case 'RIGHT':
          tmp$_0 = 0;
          break;
        case 'UP':
          tmp$_0 = 0;
          break;
        case 'DOWN':
          tmp$_0 = 1;
          break;
        default:tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
      var n = tmp$_0;
      if (!closure$collisionChecker.colides_lu1900$($receiver.x + Kotlin.imul(m, TILE_SIZE), $receiver.y + Kotlin.imul(n, TILE_SIZE))) {
        closure$move($receiver);
      } else {
        closure$direction.v = closure$getRandomDirection();
      }
      return Unit;
    };
  }
  function ghost($receiver, collisionChecker, ghostType, continuation) {
    var snakeAtlas = Resources$Companion_getInstance().snakeAtlas;
    var appleTile = snakeAtlas.get_61zpoe$('Ghost_0' + ghostType + '.png');
    var $receiver_0 = new Ghost(appleTile, collisionChecker);
    $receiver_0.smoothing = false;
    var ghost = $receiver_0;
    $receiver.addChild_l5rad2$(ghost);
    var getRandomDirection = ghost$getRandomDirection;
    var direction = {v: getRandomDirection()};
    var move = ghost$move(direction);
    addFixedUpdater(ghost, MILLISECONDS_PER_FRAME, void 0, void 0, ghost$lambda(direction, collisionChecker, move, getRandomDirection));
  }
  function container$lambda($receiver) {
    return Unit;
  }
  function Pacoman(bitmap, collisionChecker) {
    Image.call(this, bitmap);
    this.collisionChecker = collisionChecker;
    this.spawn();
    this.smoothing = false;
  }
  Pacoman.prototype.spawn = function () {
    var point = this.collisionChecker.getRandomSpawnPoint();
    position(this, get_x(point), get_y(point));
  };
  Pacoman.prototype.die = function () {
    this.removeFromParent();
  };
  Pacoman.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pacoman',
    interfaces: [Image]
  };
  function pacoman$getRandomDirection() {
    return random(Direction$values(), Random.Default);
  }
  function pacoman$move(closure$direction) {
    return function ($receiver) {
      $receiver.x = $receiver.x + closure$direction.v.deltaX();
      $receiver.y = $receiver.y + closure$direction.v.deltaY();
      if ($receiver.x < (0 - TILE_SIZE | 0))
        $receiver.x = 800.0;
      if ($receiver.x > 800)
        $receiver.x = 0.0 - TILE_SIZE;
    };
  }
  function pacoman$lambda($receiver, it) {
    if (Kotlin.isType(it, Dot)) {
      it.die();
    }return Unit;
  }
  function pacoman$lambda_0(closure$animDelay, closure$frame1, closure$frame2, closure$direction, closure$collisionChecker, closure$move, closure$getRandomDirection) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$ = closure$animDelay.v;
      closure$animDelay.v = tmp$ + 1 | 0;
      if (closure$animDelay.v > 4) {
        closure$animDelay.v = 0;
        $receiver.bitmap = equals($receiver.bitmap, closure$frame1) ? closure$frame2 : closure$frame1;
      }switch (closure$direction.v.name) {
        case 'LEFT':
          tmp$_0 = 0;
          break;
        case 'RIGHT':
          tmp$_0 = 1;
          break;
        case 'UP':
          tmp$_0 = 0;
          break;
        case 'DOWN':
          tmp$_0 = 0;
          break;
        default:tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
      var m = tmp$_0;
      switch (closure$direction.v.name) {
        case 'LEFT':
          tmp$_1 = 0;
          break;
        case 'RIGHT':
          tmp$_1 = 0;
          break;
        case 'UP':
          tmp$_1 = 0;
          break;
        case 'DOWN':
          tmp$_1 = 1;
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      var n = tmp$_1;
      switch (closure$direction.v.name) {
        case 'RIGHT':
          tmp$_2 = 1.0;
          break;
        case 'LEFT':
          tmp$_2 = -1.0;
          break;
        case 'UP':
          tmp$_2 = 1.0;
          break;
        case 'DOWN':
          tmp$_2 = 1.0;
          break;
        default:tmp$_2 = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.scaleX = tmp$_2;
      switch (closure$direction.v.name) {
        case 'RIGHT':
          tmp$_3 = 0.0;
          break;
        case 'LEFT':
          tmp$_3 = 0.0;
          break;
        case 'UP':
          tmp$_3 = 270.0;
          break;
        case 'DOWN':
          tmp$_3 = 90.0;
          break;
        default:tmp$_3 = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.rotationDegrees = tmp$_3;
      anchor($receiver, 0.5, 0.5);
      if (!closure$collisionChecker.colides_lu1900$($receiver.x + Kotlin.imul(m, TILE_SIZE), $receiver.y + Kotlin.imul(n, TILE_SIZE))) {
        closure$move($receiver);
      } else {
        closure$direction.v = closure$getRandomDirection();
      }
      return Unit;
    };
  }
  function pacoman($receiver, collisionChecker, continuation) {
    var snakeAtlas = Resources$Companion_getInstance().snakeAtlas;
    var frame1 = snakeAtlas.get_61zpoe$('PacoMan_01.png');
    var frame2 = snakeAtlas.get_61zpoe$('PacoMan_02.png');
    var frames = listOf([frame1, frame2]);
    var $receiver_0 = new Pacoman(frame1, collisionChecker);
    $receiver_0.smoothing = false;
    var pacoman = $receiver_0;
    var $receiver_0_0 = addTo(new Container_init(), $receiver);
    $receiver_0_0.addChild_l5rad2$(pacoman);
    $receiver.addChild_l5rad2$(position_0($receiver_0_0, 16, 16));
    var getRandomDirection = pacoman$getRandomDirection;
    var direction = {v: getRandomDirection()};
    var move = pacoman$move(direction);
    var animDelay = {v: 0};
    onCollision(pacoman, void 0, void 0, void 0, pacoman$lambda);
    addFixedUpdater(pacoman, MILLISECONDS_PER_FRAME, void 0, void 0, pacoman$lambda_0(animDelay, frame1, frame2, direction, collisionChecker, move, getRandomDirection));
  }
  function image$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function container$lambda_0($receiver) {
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
  function Snake(startX, startY, numBodyParts, direction, width, updateBodyParts) {
    if (direction === void 0)
      direction = Direction$RIGHT_getInstance();
    if (width === void 0)
      width = 32;
    if (updateBodyParts === void 0)
      updateBodyParts = Snake_init$lambda;
    this.direction = direction;
    this.width = width;
    this.updateBodyParts = updateBodyParts;
    this.body = ArrayList_init();
    this.head_amlc5h$_0 = lazy(Snake$head$lambda(this));
    this.lastDirection = this.direction;
    this.lastPosX = startX;
    this.lastPosY = startY;
    this.bocadilloSmall_ipuq8t$_0 = this.bocadilloSmall_ipuq8t$_0;
    this.bocadilloBig_2ytzic$_0 = this.bocadilloBig_2ytzic$_0;
    this.cinematicMode = false;
    this.goRight = false;
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
  Object.defineProperty(Snake.prototype, 'bocadilloSmall', {
    get: function () {
      if (this.bocadilloSmall_ipuq8t$_0 == null)
        return throwUPAE('bocadilloSmall');
      return this.bocadilloSmall_ipuq8t$_0;
    },
    set: function (bocadilloSmall) {
      this.bocadilloSmall_ipuq8t$_0 = bocadilloSmall;
    }
  });
  Object.defineProperty(Snake.prototype, 'bocadilloBig', {
    get: function () {
      if (this.bocadilloBig_2ytzic$_0 == null)
        return throwUPAE('bocadilloBig');
      return this.bocadilloBig_2ytzic$_0;
    },
    set: function (bocadilloBig) {
      this.bocadilloBig_2ytzic$_0 = bocadilloBig;
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
  Snake.prototype.colides = function () {
    var tmp$;
    tmp$ = this.body.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if (!((tmp$_0 = this.head) != null ? tmp$_0.equals(element) : null) && this.head.x === element.x && this.head.y === element.y) {
        return true;
      }}
    return false;
  };
  function Snake_init$lambda(it) {
    return Unit;
  }
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
  function snake$lambda$updateBodyParts(closure$bodyParts) {
    return function (body) {
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = closure$bodyParts.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_1, tmp$_2;
        var bodyPart = body.get_za3lpa$(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)));
        item.x = bodyPart.xpos + (TILE_SIZE / 2 | 0);
        item.y = bodyPart.ypos + (TILE_SIZE / 2 | 0);
        switch (bodyPart.direction.name) {
          case 'RIGHT':
            tmp$_1 = 1.0;
            break;
          case 'LEFT':
            tmp$_1 = 1.0;
            break;
          case 'UP':
            tmp$_1 = -1.0;
            break;
          case 'DOWN':
            tmp$_1 = 1.0;
            break;
          default:tmp$_1 = Kotlin.noWhenBranchMatched();
            break;
        }
        item.scaleY = tmp$_1;
        switch (bodyPart.direction.name) {
          case 'RIGHT':
            tmp$_2 = 270.0;
            break;
          case 'LEFT':
            tmp$_2 = 90.0;
            break;
          case 'UP':
            tmp$_2 = 0.0;
            break;
          case 'DOWN':
            tmp$_2 = 0.0;
            break;
          default:tmp$_2 = Kotlin.noWhenBranchMatched();
            break;
        }
        item.rotationDegrees = tmp$_2;
        anchor(item, 0.5, 0.5);
      }
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
      $receiver_0.smoothing = false;
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
  function snake$lambda$enemyPacmanEaten(closure$ghostsAndPacmanCounter, closure$nextLevel) {
    return function () {
      var tmp$;
      tmp$ = closure$ghostsAndPacmanCounter.v;
      closure$ghostsAndPacmanCounter.v = tmp$ - 1 | 0;
      if (closure$ghostsAndPacmanCounter.v <= 0) {
        closure$nextLevel();
      }};
  }
  function snake$lambda$lambda_0(closure$addBodyPart, closure$onItemEaten, closure$remainingToGrow, closure$dotsToGrow, closure$enemyPacmanEaten) {
    return function ($receiver, it) {
      var tmp$;
      if (Kotlin.isType(it, Apple)) {
        it.spawn();
        closure$addBodyPart();
        closure$onItemEaten();
      }if (Kotlin.isType(it, Dot)) {
        it.die();
        tmp$ = closure$remainingToGrow.v;
        closure$remainingToGrow.v = tmp$ - 1 | 0;
        if (closure$remainingToGrow.v === 0) {
          closure$remainingToGrow.v = closure$dotsToGrow;
          closure$addBodyPart();
        }closure$onItemEaten();
      }if (Kotlin.isType(it, Ghost)) {
        it.die();
        closure$addBodyPart();
        closure$onItemEaten();
        closure$enemyPacmanEaten();
      }if (Kotlin.isType(it, Pacoman)) {
        it.die();
        closure$addBodyPart();
        closure$onItemEaten();
        closure$enemyPacmanEaten();
      }if (Kotlin.isType(it, Coin)) {
        it.die();
        closure$addBodyPart();
        closure$onItemEaten();
      }return Unit;
    };
  }
  function snake$lambda$lambda$disableWalkingBackwards(closure$newDirection, closure$snake) {
    return function () {
      var tmp$;
      switch (closure$newDirection.v.name) {
        case 'LEFT':
          tmp$ = closure$snake.direction === Direction$RIGHT_getInstance();
          break;
        case 'RIGHT':
          tmp$ = closure$snake.direction === Direction$LEFT_getInstance();
          break;
        case 'UP':
          tmp$ = closure$snake.direction === Direction$DOWN_getInstance();
          break;
        case 'DOWN':
          tmp$ = closure$snake.direction === Direction$UP_getInstance();
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var disable = tmp$;
      if (disable)
        closure$newDirection.v = closure$snake.direction;
    };
  }
  function snake$lambda$lambda$lambda(closure$snake, closure$nextLevel, closure$onDied) {
    return function () {
      if (closure$snake.goRight)
        closure$nextLevel();
      else
        closure$onDied();
      return Unit;
    };
  }
  function snake$lambda$lambda_1(closure$lockInput, closure$key, closure$newDirection, closure$snake, closure$movementMode, closure$speed, closure$frames, closure$collisionChecker, closure$nextLevel, closure$onDied, closure$bocadilloSmall, closure$head, closure$bocadilloBig, closure$updateBodyParts) {
    return function ($receiver) {
      var tmp$;
      if (currentGameState.paused) {
        return;
      }if (closure$lockInput.v === false) {
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
      }var disableWalkingBackwards = snake$lambda$lambda$disableWalkingBackwards(closure$newDirection, closure$snake);
      loop_label: switch (closure$movementMode.name) {
        case 'SNAKE':
          disableWalkingBackwards();
          if (!closure$snake.cinematicMode || closure$snake.goRight)
            closure$frames.v += closure$speed;
          if (closure$frames.v >= TILE_SIZE) {
            closure$lockInput.v = false;
            if (!closure$snake.cinematicMode || closure$snake.goRight)
              closure$frames.v = 0.0;
            closure$snake.lastDirection = closure$snake.direction;
            if (closure$snake.goRight)
              closure$snake.direction = Direction$RIGHT_getInstance();
            else
              closure$snake.direction = closure$newDirection.v;
            if (!closure$snake.cinematicMode || closure$snake.goRight)
              closure$snake.move();
            closure$collisionChecker.checkCollision_morwcd$(closure$snake.head.x, closure$snake.head.y, snake$lambda$lambda$lambda(closure$snake, closure$nextLevel, closure$onDied));
            if (closure$snake.colides())
              closure$onDied();
          } else {
            closure$snake.interpolate_14dthe$(closure$frames.v / TILE_SIZE);
          }

          break loop_label;
        case 'PACMAN':
          disableWalkingBackwards();
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
            }if (closure$snake.colides())
              closure$onDied();
          } else {
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
      var tmp$_1 = closure$bocadilloSmall;
      var point = closure$head.pos.plus_4l17gg$(new Point(15, -40));
      position(tmp$_1, get_x(point), get_y(point));
      var tmp$_2 = closure$bocadilloBig;
      var point_0 = closure$head.pos.plus_4l17gg$(new Point(15, -55));
      position(tmp$_2, get_x(point_0), get_y(point_0));
      if (!closure$snake.cinematicMode || closure$snake.goRight) {
        closure$updateBodyParts(closure$snake.body);
      }return Unit;
    };
  }
  function snake($receiver_0, views, pos, skin, collisionChecker, font, movementMode, onDied, onItemEaten, nextLevel, continuation) {
    if (movementMode === void 0)
      movementMode = MovementMode$SNAKE_getInstance();
    var snakeAtlas = Resources$Companion_getInstance().snakeAtlas;
    var headTile = snakeAtlas.get_61zpoe$(skin.headTile);
    var bodyTile = snakeAtlas.get_61zpoe$(skin.bodyTile);
    var tailTile = snakeAtlas.get_61zpoe$(skin.tailTile);
    var initialX = pos.x * 32.0;
    var initialY = pos.y * 32.0;
    var snake = new Snake(initialX, initialY, 2);
    var key = {v: 0};
    var prop = getPropertyCallableRef('onKeyDown', 1, function ($receiver) {
      return $receiver.onKeyDown;
    });
    var tmp$;
    if ((tmp$ = $receiver_0 != null ? get_keys($receiver_0) : null) != null) {
      prop.get(tmp$).add_25kf2w$(snake$lambda(key));
    }var prop_0 = getPropertyCallableRef('onKeyUp', 1, function ($receiver) {
      return $receiver.onKeyUp;
    });
    var tmp$_0;
    if ((tmp$_0 = $receiver_0 != null ? get_keys($receiver_0) : null) != null) {
      prop_0.get(tmp$_0).add_25kf2w$(snake$lambda_0(key));
    }var $receiver_0_0 = addTo(new Container_init(), $receiver_0);
    var $receiver_0_1 = addTo(new Image(headTile, 0.0, 0.0), $receiver_0_0);
    image$lambda($receiver_0_1);
    $receiver_0_1.smoothing = false;
    var $receiver_0_2 = addTo(new Image(bodyTile, 0.0, 0.0), $receiver_0_0);
    image$lambda($receiver_0_2);
    $receiver_0_2.smoothing = false;
    var $receiver_0_3 = addTo(new Image(tailTile, 0.0, 0.0), $receiver_0_0);
    image$lambda($receiver_0_3);
    $receiver_0_3.smoothing = false;
    var bodyParts = mutableListOf([$receiver_0_1, $receiver_0_2, $receiver_0_3]);
    var $receiver_0_4 = addTo(new Image(snakeAtlas.get_61zpoe$('bocadillo_02.png'), 0.0, 0.0), $receiver_0_0);
    image$lambda($receiver_0_4);
    var bocadilloSmall = $receiver_0_4;
    var color_0 = color.Colors.BLACK;
    var $receiver_0_5 = addTo(Text.Companion.invoke_8ii8iq$('!?', 16.0, color_0, font), $receiver_0_0);
    text$lambda($receiver_0_5);
    bocadilloSmall.addChild_l5rad2$(centerXOn($receiver_0_5, bocadilloSmall));
    var $receiver_0_6 = addTo(new Image(snakeAtlas.get_61zpoe$('bocadillo_01.png'), 0.0, 0.0), $receiver_0_0);
    image$lambda($receiver_0_6);
    var bocadilloBig = $receiver_0_6;
    scale(bocadilloBig, 1.5, 1.5);
    var text = 'Grrrr...';
    var color_0_0 = color.Colors.BLACK;
    var $receiver_0_7 = addTo(Text.Companion.invoke_8ii8iq$(text, 10.0, color_0_0, font), $receiver_0_0);
    text$lambda($receiver_0_7);
    bocadilloBig.addChild_l5rad2$(position_0($receiver_0_7, 5, 5));
    var updateBodyParts = snake$lambda$updateBodyParts(bodyParts);
    snake.updateBodyParts = getCallableRef('updateBodyParts', function (body) {
      return updateBodyParts(body), Unit;
    });
    snake.bocadilloSmall = bocadilloSmall;
    snake.bocadilloBig = bocadilloBig;
    var head = first(bodyParts);
    var addBodyPart = snake$lambda$addBodyPart(snake, bodyTile, bodyParts, tailTile, $receiver_0_0);
    var prop_1 = getPropertyCallableRef('onKeyDown', 1, function ($receiver) {
      return $receiver.onKeyDown;
    });
    var tmp$_1;
    if ((tmp$_1 = $receiver_0_0 != null ? get_keys($receiver_0_0) : null) != null) {
      prop_1.get(tmp$_1).add_25kf2w$(snake$lambda$lambda(addBodyPart));
    }var frames = {v: 0.0};
    var speed = 4.0;
    var newDirection = {v: snake.direction};
    var lockInput = {v: false};
    var dotsToGrow = 5;
    var remainingToGrow = {v: dotsToGrow};
    var ghostsAndPacmanCounter = {v: 5};
    var enemyPacmanEaten = snake$lambda$enemyPacmanEaten(ghostsAndPacmanCounter, nextLevel);
    onCollision(head, void 0, void 0, void 0, snake$lambda$lambda_0(addBodyPart, onItemEaten, remainingToGrow, dotsToGrow, enemyPacmanEaten));
    addFixedUpdater($receiver_0_0, MILLISECONDS_PER_FRAME, false, void 0, snake$lambda$lambda_1(lockInput, key, newDirection, snake, movementMode, speed, frames, collisionChecker, nextLevel, onDied, bocadilloSmall, head, bocadilloBig, updateBodyParts));
    return snake;
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
  function container$lambda_1($receiver) {
    return Unit;
  }
  function SnakeCinematic(container, player, coroutineContext) {
    this.player_0 = player;
    this.coroutineContext_0 = coroutineContext;
    var $receiver_0 = addTo(new Container_init(), container);
    this.player_0.bocadilloSmall.alpha = 0.0;
    this.player_0.bocadilloBig.alpha = 0.0;
    timeout($receiver_0, TimeSpan.Companion.fromSeconds_14dthe$(5), SnakeCinematic_init$lambda$lambda(this, $receiver_0));
  }
  function SnakeCinematic$goRight$lambda(this$SnakeCinematic, this$goRight) {
    return function () {
      this$SnakeCinematic.player_0.cinematicMode = false;
      if (this$SnakeCinematic.player_0.direction === Direction$LEFT_getInstance()) {
        this$SnakeCinematic.player_0.cinematicMode = false;
        this$SnakeCinematic.goRight_st8p7j$(this$goRight);
        return;
      }this$SnakeCinematic.talk_w2ut7v$(this$SnakeCinematic.player_0.bocadilloBig, 'FREEEDOM!!', 8.0);
      this$SnakeCinematic.player_0.goRight = true;
      return Unit;
    };
  }
  SnakeCinematic.prototype.goRight_st8p7j$ = function ($receiver) {
    timeout($receiver, TimeSpan.Companion.fromSeconds_14dthe$(5), SnakeCinematic$goRight$lambda(this, $receiver));
  };
  function Coroutine$SnakeCinematic$talk$lambda(this$talk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$talk = this$talk_0;
  }
  Coroutine$SnakeCinematic$talk$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeCinematic$talk$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeCinematic$talk$lambda.prototype.constructor = Coroutine$SnakeCinematic$talk$lambda;
  Coroutine$SnakeCinematic$talk$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = show(this.local$this$talk, TimeSpan.Companion.fromSeconds_14dthe$(1), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = wait(this.local$this$talk, TimeSpan.Companion.fromSeconds_14dthe$(2), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = hide(this.local$this$talk, TimeSpan.Companion.fromSeconds_14dthe$(1), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function SnakeCinematic$talk$lambda(this$talk_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SnakeCinematic$talk$lambda(this$talk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SnakeCinematic.prototype.talk_w2ut7v$ = function ($receiver, text, size) {
    if (size === void 0)
      size = 0.0;
    var tmp$;
    var $receiver_0 = Kotlin.isType(tmp$ = $receiver.getChildAt_za3lpa$(0), Text) ? tmp$ : throwCCE();
    $receiver_0.text = text;
    if (size !== 0.0)
      $receiver_0.textSize = size;
    launch(this.coroutineContext_0, SnakeCinematic$talk$lambda($receiver));
  };
  function SnakeCinematic_init$lambda$lambda(this$SnakeCinematic, this$) {
    return function () {
      this$SnakeCinematic.talk_w2ut7v$(this$SnakeCinematic.player_0.bocadilloBig, "I'M TIRED", 8.0);
      if (this$SnakeCinematic.player_0.direction !== Direction$LEFT_getInstance())
        this$SnakeCinematic.player_0.cinematicMode = true;
      this$SnakeCinematic.goRight_st8p7j$(this$);
      return Unit;
    };
  }
  SnakeCinematic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnakeCinematic',
    interfaces: []
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
  function GameState() {
    this.paused = false;
    this.restarting = false;
    this.score = 0;
  }
  GameState.prototype.reset = function () {
    this.paused = false;
    this.restarting = false;
    this.score = 0;
  };
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  var currentGameState;
  function StageConfig(level, itemLayer, startingPoint, movementMode, snakeSkin, scroll, horizontalLimit) {
    if (level === void 0)
      level = 1;
    if (itemLayer === void 0)
      itemLayer = 0;
    if (startingPoint === void 0) {
      startingPoint = new Point(12, 8);
    }if (movementMode === void 0)
      movementMode = MovementMode$SNAKE_getInstance();
    if (snakeSkin === void 0)
      snakeSkin = new SnakeSkin();
    if (scroll === void 0)
      scroll = false;
    if (horizontalLimit === void 0)
      horizontalLimit = true;
    this.level = level;
    this.itemLayer = itemLayer;
    this.startingPoint = startingPoint;
    this.movementMode = movementMode;
    this.snakeSkin = snakeSkin;
    this.scroll = scroll;
    this.horizontalLimit = horizontalLimit;
  }
  StageConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StageConfig',
    interfaces: []
  };
  StageConfig.prototype.component1 = function () {
    return this.level;
  };
  StageConfig.prototype.component2 = function () {
    return this.itemLayer;
  };
  StageConfig.prototype.component3 = function () {
    return this.startingPoint;
  };
  StageConfig.prototype.component4 = function () {
    return this.movementMode;
  };
  StageConfig.prototype.component5 = function () {
    return this.snakeSkin;
  };
  StageConfig.prototype.component6 = function () {
    return this.scroll;
  };
  StageConfig.prototype.component7 = function () {
    return this.horizontalLimit;
  };
  StageConfig.prototype.copy_itgynf$ = function (level, itemLayer, startingPoint, movementMode, snakeSkin, scroll, horizontalLimit) {
    return new StageConfig(level === void 0 ? this.level : level, itemLayer === void 0 ? this.itemLayer : itemLayer, startingPoint === void 0 ? this.startingPoint : startingPoint, movementMode === void 0 ? this.movementMode : movementMode, snakeSkin === void 0 ? this.snakeSkin : snakeSkin, scroll === void 0 ? this.scroll : scroll, horizontalLimit === void 0 ? this.horizontalLimit : horizontalLimit);
  };
  StageConfig.prototype.toString = function () {
    return 'StageConfig(level=' + Kotlin.toString(this.level) + (', itemLayer=' + Kotlin.toString(this.itemLayer)) + (', startingPoint=' + Kotlin.toString(this.startingPoint)) + (', movementMode=' + Kotlin.toString(this.movementMode)) + (', snakeSkin=' + Kotlin.toString(this.snakeSkin)) + (', scroll=' + Kotlin.toString(this.scroll)) + (', horizontalLimit=' + Kotlin.toString(this.horizontalLimit)) + ')';
  };
  StageConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.itemLayer) | 0;
    result = result * 31 + Kotlin.hashCode(this.startingPoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.movementMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.snakeSkin) | 0;
    result = result * 31 + Kotlin.hashCode(this.scroll) | 0;
    result = result * 31 + Kotlin.hashCode(this.horizontalLimit) | 0;
    return result;
  };
  StageConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.level, other.level) && Kotlin.equals(this.itemLayer, other.itemLayer) && Kotlin.equals(this.startingPoint, other.startingPoint) && Kotlin.equals(this.movementMode, other.movementMode) && Kotlin.equals(this.snakeSkin, other.snakeSkin) && Kotlin.equals(this.scroll, other.scroll) && Kotlin.equals(this.horizontalLimit, other.horizontalLimit)))));
  };
  var SnakeStageConfig;
  var PacmanStageConfig;
  var MarioStageConfig;
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
  function CollisionChecker(tiledMapView, horizontalLimit) {
    this.horizontalLimit = horizontalLimit;
    var $receiver = tiledMapView.tiledMap.data.allLayers;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, TiledMap$Layer$Patterns))
        destination.add_11rb$(element);
    }
    this.collisionLayer_0 = last(destination);
  }
  CollisionChecker.prototype.checkCollision_morwcd$ = function (x, y, block) {
    if (this.colides_lu1900$(x, y)) {
      block();
    }};
  CollisionChecker.prototype.colides_lu1900$ = function (x, y) {
    var tilePosX = numberToInt(x) / TILE_SIZE | 0;
    var tilePosY = numberToInt(y) / TILE_SIZE | 0;
    if (tilePosX < 0 || tilePosY < 0)
      return this.horizontalLimit;
    if (this.collisionLayer_0.map.width <= tilePosX)
      return this.horizontalLimit;
    if (this.collisionLayer_0.map.height <= tilePosY)
      return this.horizontalLimit;
    return this.collisionLayer_0.map.get_vux9f0$(tilePosX, tilePosY).value !== 0;
  };
  CollisionChecker.prototype.getRandomSpawnPoint = function () {
    var w = this.collisionLayer_0.map.width - 1 | 0;
    var h = this.collisionLayer_0.map.height - 1 | 0;
    var x = random_0(new IntRange(0, w), Random.Default) * TILE_SIZE;
    var y = random_0(new IntRange(0, h), Random.Default) * TILE_SIZE;
    if (!this.colides_lu1900$(x, y))
      return new Point(x, y);
    else
      return this.getRandomSpawnPoint();
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
            $receiver_0.smoothing = false;
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
  function ItemSpawner(tiledMapView, layer) {
    var $receiver = tiledMapView.tiledMap.data.allLayers;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, TiledMap$Layer$Patterns))
        destination.add_11rb$(element);
    }
    this.collisionLayer_0 = destination.get_za3lpa$(layer);
  }
  ItemSpawner.prototype.getSpawnPositions = function () {
    var list = ArrayList_init();
    var tmp$;
    tmp$ = (new IntRange(0, this.collisionLayer_0.map.height - 1 | 0)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = (new IntRange(0, this.collisionLayer_0.map.width - 1 | 0)).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (this.collisionLayer_0.map.get_vux9f0$(element_0, element).value !== 0) {
          list.add_11rb$(new Point(element_0, element));
        }}
    }
    return list;
  };
  ItemSpawner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItemSpawner',
    interfaces: []
  };
  function Resources(views) {
    Resources$Companion_getInstance();
    this.views = views;
  }
  function Resources$Companion() {
    Resources$Companion_instance = this;
    this.snakeAtlas_y4df72$_0 = this.snakeAtlas_y4df72$_0;
    this.font_vq8m0e$_0 = this.font_vq8m0e$_0;
    this.loaded_0 = false;
  }
  Object.defineProperty(Resources$Companion.prototype, 'snakeAtlas', {
    get: function () {
      if (this.snakeAtlas_y4df72$_0 == null)
        return throwUPAE('snakeAtlas');
      return this.snakeAtlas_y4df72$_0;
    },
    set: function (snakeAtlas) {
      this.snakeAtlas_y4df72$_0 = snakeAtlas;
    }
  });
  Object.defineProperty(Resources$Companion.prototype, 'font', {
    get: function () {
      if (this.font_vq8m0e$_0 == null)
        return throwUPAE('font');
      return this.font_vq8m0e$_0;
    },
    set: function (font) {
      this.font_vq8m0e$_0 = font;
    }
  });
  Resources$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Resources$Companion_instance = null;
  function Resources$Companion_getInstance() {
    if (Resources$Companion_instance === null) {
      new Resources$Companion();
    }return Resources$Companion_instance;
  }
  function Coroutine$loadAll($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$loadAll.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadAll.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadAll.prototype.constructor = Coroutine$loadAll;
  Coroutine$loadAll.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Resources$Companion_getInstance().loaded_0) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            Resources$Companion_getInstance().loaded_0 = true;
            this.state_0 = 3;
            this.result_0 = readAtlas(std.resourcesVfs.get_61zpoe$('snake.atlas.json'), this.$this.views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            Resources$Companion_getInstance().snakeAtlas = this.result_0;
            this.state_0 = 4;
            this.result_0 = readBitmapFont(std.resourcesVfs.get_61zpoe$('texts/I-pixel-u.fnt'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            Resources$Companion_getInstance().font = this.result_0;
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
  Resources.prototype.loadAll = function (continuation_0, suspended) {
    var instance = new Coroutine$loadAll(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Resources.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resources',
    interfaces: []
  };
  function solidRect$lambda($receiver) {
    return Unit;
  }
  function text$lambda_0($receiver) {
    return Unit;
  }
  function camera$lambda($receiver) {
    return Unit;
  }
  function GameScene(stageConfig) {
    Scene.call(this);
    this.stageConfig = stageConfig;
    this.fadeOff = false;
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
            }), true)], TimeSpan.Companion.fromSeconds_14dthe$(1), void 0, void 0, this);
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
    launch_0(this, GameScene$fade$lambda(fadeRect));
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
            }), true)], TimeSpan.Companion.fromSeconds_14dthe$(1), void 0, void 0, this);
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
  GameScene.prototype.unFade_st8p7j$ = function ($receiver, continuation) {
    var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1))), $receiver);
    solidRect$lambda($receiver_0);
    var fadeRect = $receiver_0;
    launch_0(this, GameScene$unFade$lambda(fadeRect));
  };
  GameScene.prototype.customInit_st8p7j$ = function ($receiver, continuation) {
  };
  function GameScene$sceneInit$lambda(this$GameScene) {
    return function ($receiver, it) {
      if (this$GameScene.fadeOff) {
        this$GameScene.fade_st8p7j$($receiver);
      }return Unit;
    };
  }
  function Coroutine$GameScene$sceneInit$lambda$lambda$lambda(closure$font_0, this$_0, this$GameScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$font = closure$font_0;
    this.local$this$ = this$_0;
    this.local$this$GameScene = this$GameScene_0;
  }
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda.prototype.constructor = Coroutine$GameScene$sceneInit$lambda$lambda$lambda;
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var $receiver = this.local$this$;
            var text = 'YOU DIED!';
            var font = this.local$closure$font;
            var color_0_0;
            color_0_0 = color_0.Colors.WHITE;
            var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 64.0, color_0_0, font), $receiver);
            text$lambda_0($receiver_0);
            centerBetween($receiver_0, numberToDouble(0), numberToDouble(0), numberToDouble(800), numberToDouble(400));
            this.state_0 = 2;
            this.result_0 = sleep(this.local$this$GameScene, TimeSpan.Companion.fromSeconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            currentGameState.restarting = true;
            tmp$ = this.local$this$GameScene.stageConfig;
            if (equals(tmp$, SnakeStageConfig)) {
              var $this = this.local$this$GameScene.sceneContainer;
              var injects = [];
              var time;
              var transition;
              if (time === void 0) {
                time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
              }if (transition === void 0)
                transition = $this.defaultTransition;
              this.state_0 = 5;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(RestartSnakeScene), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (equals(tmp$, PacmanStageConfig)) {
                var $this_0 = this.local$this$GameScene.sceneContainer;
                var injects_0 = [];
                var time_0;
                var transition_0;
                if (time_0 === void 0) {
                  time_0 = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
                }if (transition_0 === void 0)
                  transition_0 = $this_0.defaultTransition;
                this.state_0 = 3;
                this.result_0 = $this_0.changeTo_oszfv1$(getKClass(RestartPacmanScene), injects_0.slice(), time_0, transition_0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 4;
                continue;
              }
            }

          case 3:
            this.result_0;
            return this.result_0;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.result_0;
            return this.result_0;
          case 6:
            return Unit;
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
  function GameScene$sceneInit$lambda$lambda$lambda(closure$font_0, this$_0, this$GameScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda$lambda$lambda(closure$font_0, this$_0, this$GameScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GameScene$sceneInit$lambda$lambda(closure$font, this$, this$GameScene) {
    return function () {
      println('DIEDDD');
      currentGameState.paused = true;
      launchImmediately(this$GameScene, GameScene$sceneInit$lambda$lambda$lambda(closure$font, this$, this$GameScene));
      return Unit;
    };
  }
  function GameScene$sceneInit$lambda$lambda_0(this$GameScene) {
    return function () {
      this$GameScene.onItemEaten();
      return Unit;
    };
  }
  function Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0(this$GameScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GameScene = this$GameScene_0;
  }
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0.prototype.constructor = Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0;
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$GameScene.nextLevel(this);
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
  function GameScene$sceneInit$lambda$lambda$lambda_0(this$GameScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda$lambda$lambda_0(this$GameScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GameScene$sceneInit$lambda$lambda_1(this$GameScene) {
    return function () {
      launchImmediately(this$GameScene, GameScene$sceneInit$lambda$lambda$lambda_0(this$GameScene));
      return Unit;
    };
  }
  function Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1(this$GameScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GameScene = this$GameScene_0;
  }
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1.prototype.constructor = Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1;
  Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$GameScene.fadeOff = true;
            this.state_0 = 2;
            this.result_0 = sleep(this.local$this$GameScene, TimeSpan.Companion.fromSeconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this = this.local$this$GameScene.sceneContainer;
            var injects = [];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 3;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(RestartMarioScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function GameScene$sceneInit$lambda$lambda$lambda_1(this$GameScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda$lambda$lambda_1(this$GameScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function GameScene$sceneInit$lambda$lambda_2(this$GameScene, closure$fallen, closure$player) {
    return function ($receiver, it) {
      var tmp$;
      if ((tmp$ = this$GameScene.stageConfig) != null ? tmp$.equals(MarioStageConfig) : null) {
        if (!closure$fallen.v && last(closure$player.body).y > 632) {
          closure$fallen.v = true;
          currentGameState.paused = true;
          launch_0(this$GameScene, GameScene$sceneInit$lambda$lambda$lambda_1(this$GameScene));
        }}return Unit;
    };
  }
  function GameScene$sceneInit$lambda$lambda_3(closure$cameraCenter, closure$player, closure$cameraSpeed, closure$tiledMap, closure$screenSize) {
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
  function Coroutine$GameScene$sceneInit$lambda$lambda(closure$getReady_0, this$GameScene_0, closure$collisionChecker_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$getReady = closure$getReady_0;
    this.local$this$GameScene = this$GameScene_0;
    this.local$closure$collisionChecker = closure$collisionChecker_0;
    this.local$this$ = this$_0;
  }
  Coroutine$GameScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$GameScene$sceneInit$lambda$lambda;
  Coroutine$GameScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            currentGameState.paused = true;
            this.state_0 = 3;
            this.result_0 = delay(TimeSpan.Companion.fromSeconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$closure$getReady.visible = true;
            this.state_0 = 4;
            this.result_0 = delay(TimeSpan.Companion.fromSeconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$closure$getReady.visible = false;
            currentGameState.paused = false;
            this.state_0 = 5;
            this.result_0 = apple(this.local$this$, this.local$this$GameScene.views, this.local$closure$collisionChecker, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
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
  function GameScene$sceneInit$lambda$lambda_4(closure$getReady_0, this$GameScene_0, closure$collisionChecker_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda$lambda(closure$getReady_0, this$GameScene_0, closure$collisionChecker_0, this$_0, continuation_0);
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
    this.local$font = void 0;
    this.local$$receiver_0 = void 0;
    this.local$tiledMap = void 0;
    this.local$collisionChecker = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
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
            this.result_0 = (new Resources(this.$this.views)).loadAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$font = Resources$Companion_getInstance().font;
            addUpdater(this.local$$receiver, GameScene$sceneInit$lambda(this.$this));
            this.local$$receiver_0 = addTo(new Camera_init(), this.local$$receiver);
            var tmp$, tmp$_0;
            this.state_0 = 3;
            this.result_0 = tiledMap(this.local$$receiver_0, this.$this.stageConfig.level, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tiledMap = this.result_0;
            this.local$collisionChecker = new CollisionChecker(this.local$tiledMap, this.$this.stageConfig.horizontalLimit);
            if ((tmp$ = this.$this.stageConfig) != null ? tmp$.equals(PacmanStageConfig) : null) {
              this.local$tmp$ = (new ItemSpawner(this.local$tiledMap, this.$this.stageConfig.itemLayer)).getSpawnPositions().iterator();
              this.state_0 = 4;
              continue;
            } else {
              this.state_0 = 12;
              continue;
            }

          case 4:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var element = this.local$tmp$.next();
            this.state_0 = 5;
            this.result_0 = dot(this.local$$receiver_0, this.$this.views, element.times_za3lpa$(TILE_SIZE), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 4;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = ghost(this.local$$receiver_0, this.local$collisionChecker, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = ghost(this.local$$receiver_0, this.local$collisionChecker, 2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = ghost(this.local$$receiver_0, this.local$collisionChecker, 3, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = ghost(this.local$$receiver_0, this.local$collisionChecker, 4, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = pacoman(this.local$$receiver_0, this.local$collisionChecker, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            if ((tmp$_0 = this.$this.stageConfig) != null ? tmp$_0.equals(MarioStageConfig) : null) {
              this.local$tmp$_0 = (new ItemSpawner(this.local$tiledMap, this.$this.stageConfig.itemLayer)).getSpawnPositions().iterator();
              this.state_0 = 13;
              continue;
            } else {
              this.state_0 = 16;
              continue;
            }

          case 13:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 15;
              continue;
            }
            var element_0 = this.local$tmp$_0.next();
            this.state_0 = 14;
            this.result_0 = coin(this.local$$receiver_0, this.$this.views, element_0.times_za3lpa$(TILE_SIZE), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.state_0 = 13;
            continue;
          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 17;
            this.result_0 = snake(this.local$$receiver_0, this.$this.views, this.$this.stageConfig.startingPoint, this.$this.stageConfig.snakeSkin, this.local$collisionChecker, this.local$font, this.$this.stageConfig.movementMode, GameScene$sceneInit$lambda$lambda(this.local$font, this.local$$receiver_0, this.$this), GameScene$sceneInit$lambda$lambda_0(this.$this), GameScene$sceneInit$lambda$lambda_1(this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            var player = this.result_0;
            var fallen = {v: false};
            addUpdater(this.local$$receiver_0, GameScene$sceneInit$lambda$lambda_2(this.$this, fallen, player));
            if (this.$this.stageConfig.level === 1)
              new SnakeCinematic(this.local$$receiver, player, this.$this.coroutineContext);
            if (this.$this.stageConfig.scroll) {
              var cameraSpeed = 4;
              var cameraCenter = 400;
              var screenSize = 800;
              addFixedUpdater(this.local$$receiver_0, MILLISECONDS_PER_FRAME, void 0, void 0, GameScene$sceneInit$lambda$lambda_3(cameraCenter, player, cameraSpeed, this.local$tiledMap, screenSize));
            }
            var text = 'GET READY!';
            var color_0_0;
            color_0_0 = color_0.Colors.WHITE;
            var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 64.0, color_0_0, this.local$font), this.local$$receiver_0);
            text$lambda_0($receiver_0);
            var $receiver = centerBetween($receiver_0, numberToDouble(0), numberToDouble(0), numberToDouble(800), numberToDouble(400));
            $receiver.visible = false;
            var getReady = $receiver;
            launch_0(this.$this, GameScene$sceneInit$lambda$lambda_4(getReady, this.$this, this.local$collisionChecker, this.local$$receiver_0));
            this.state_0 = 18;
            this.result_0 = this.$this.customInit_st8p7j$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            if (!currentGameState.restarting) {
              this.state_0 = 19;
              this.result_0 = this.$this.unFade_st8p7j$(this.local$$receiver, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 20;
              continue;
            }

          case 19:
            this.state_0 = 20;
            continue;
          case 20:
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
  GameScene.prototype.onItemEaten = function () {
    currentGameState.score = currentGameState.score + 100 | 0;
  };
  GameScene.prototype.nextLevel = function (continuation) {
  };
  GameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameScene',
    interfaces: [Scene]
  };
  function SnakeGameScene() {
    GameScene.call(this, SnakeStageConfig);
    this.scoreText_i1j8wf$_0 = this.scoreText_i1j8wf$_0;
    this.apples = 0;
  }
  Object.defineProperty(SnakeGameScene.prototype, 'scoreText', {
    get: function () {
      if (this.scoreText_i1j8wf$_0 == null)
        return throwUPAE('scoreText');
      return this.scoreText_i1j8wf$_0;
    },
    set: function (scoreText) {
      this.scoreText_i1j8wf$_0 = scoreText;
    }
  });
  SnakeGameScene.prototype.customInit_st8p7j$ = function ($receiver, continuation) {
    var font = Resources$Companion_getInstance().font;
    var color_0_0;
    color_0_0 = color_0.Colors.WHITE;
    var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$('000000', 32.0, color_0_0, font), $receiver);
    text$lambda_0($receiver_0);
    this.scoreText = position_0($receiver_0, 25, 15);
    this.updateScore();
  };
  SnakeGameScene.prototype.updateScore = function () {
    this.scoreText.text = padStart(currentGameState.score.toString(), 6, 48);
  };
  SnakeGameScene.prototype.onItemEaten = function () {
    GameScene.prototype.onItemEaten.call(this);
    this.updateScore();
    this.apples = this.apples + 1 | 0;
  };
  function Coroutine$SnakeGameScene$nextLevel$lambda(this$SnakeGameScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$SnakeGameScene = this$SnakeGameScene_0;
  }
  Coroutine$SnakeGameScene$nextLevel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameScene$nextLevel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameScene$nextLevel$lambda.prototype.constructor = Coroutine$SnakeGameScene$nextLevel$lambda;
  Coroutine$SnakeGameScene$nextLevel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromSeconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this = this.local$this$SnakeGameScene.sceneContainer;
            var injects = [1];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 3;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(TransitionToPacmanScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function SnakeGameScene$nextLevel$lambda(this$SnakeGameScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SnakeGameScene$nextLevel$lambda(this$SnakeGameScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SnakeGameScene.prototype.nextLevel = function (continuation) {
    this.fadeOff = true;
    launch_0(this, SnakeGameScene$nextLevel$lambda(this));
  };
  SnakeGameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnakeGameScene',
    interfaces: [GameScene]
  };
  function PacmanGameScene() {
    GameScene.call(this, PacmanStageConfig);
  }
  function Coroutine$PacmanGameScene$nextLevel$lambda(this$PacmanGameScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$PacmanGameScene = this$PacmanGameScene_0;
  }
  Coroutine$PacmanGameScene$nextLevel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PacmanGameScene$nextLevel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PacmanGameScene$nextLevel$lambda.prototype.constructor = Coroutine$PacmanGameScene$nextLevel$lambda;
  Coroutine$PacmanGameScene$nextLevel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromSeconds_14dthe$(1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this = this.local$this$PacmanGameScene.sceneContainer;
            var injects = [1];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 3;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(TransitionToMarioScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function PacmanGameScene$nextLevel$lambda(this$PacmanGameScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$PacmanGameScene$nextLevel$lambda(this$PacmanGameScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  PacmanGameScene.prototype.nextLevel = function (continuation) {
    this.fadeOff = true;
    launch_0(this, PacmanGameScene$nextLevel$lambda(this));
  };
  PacmanGameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PacmanGameScene',
    interfaces: [GameScene]
  };
  function MarioGameScene() {
    GameScene.call(this, MarioStageConfig);
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
      position_0($receiver, 400, 300);
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
            this.result_0 = (new Resources(this.$this.views)).loadAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('korge.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function text$lambda_1($receiver) {
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
            this.result_0 = (new Resources(this.$this.views)).loadAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            currentGameState.reset();
            this.state_0 = 3;
            this.result_0 = tiledMap(this.local$$receiver, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$font = Resources$Companion_getInstance().font;
            var text = 'A CLASSIC SNAKE GAME';
            var color_0_0;
            color_0_0 = color_0.Colors.WHITE;
            var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 32.0, color_0_0, this.local$font), this.local$$receiver);
            text$lambda_1($receiver_0_0);
            positionY(centerXOn($receiver_0_0, this.local$$receiver), 200);
            var color_0_1;
            color_0_1 = color_0.Colors.WHITE;
            var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$('?', 32.0, color_0_1, this.local$font), this.local$$receiver);
            text$lambda_1($receiver_0_1);
            var questionMark = position_0($receiver_0_1, 632, 200);
            questionMark.color = RGBA.Companion.float_7b5o5w$(numberToDouble(255), numberToDouble(255), numberToDouble(255), numberToDouble(0));
            launch_0(this.$this, MainMenuScene$sceneInit$lambda(this.local$$receiver, questionMark));
            var color_0_2;
            color_0_2 = color_0.Colors.WHITE;
            var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$('PLAY', 28.0, color_0_2, this.local$font), this.local$$receiver);
            text$lambda_1($receiver_0_2);
            var $receiver = positionY(centerXOn($receiver_0_2, this.local$$receiver), 350);
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$;
            if ((tmp$ = $receiver != null ? get_mouse($receiver) : null) != null) {
              prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, MainMenuScene$sceneInit$lambda_0(this.$this)));
            }
            var color_0_3;
            color_0_3 = color_0.Colors.WHITE;
            var $receiver_0_3 = addTo(Text.Companion.invoke_8ii8iq$('PACMAN', 28.0, color_0_3, this.local$font), this.local$$receiver);
            text$lambda_1($receiver_0_3);
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
            var color_0_4;
            color_0_4 = color_0.Colors.WHITE;
            var $receiver_0_4 = addTo(Text.Companion.invoke_8ii8iq$('MARIO', 28.0, color_0_4, this.local$font), this.local$$receiver);
            text$lambda_1($receiver_0_4);
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
            var color_0_5;
            color_0_5 = color_0.Colors.WHITE;
            var $receiver_0_5 = addTo(Text.Companion.invoke_8ii8iq$('LEVELS', 28.0, color_0_5, this.local$font), this.local$$receiver);
            text$lambda_1($receiver_0_5);
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
  function solidRect$lambda_0($receiver) {
    return Unit;
  }
  function RestartMarioScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$_2($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_2.prototype.constructor = Coroutine$sceneInit_st8p7j$_2;
  Coroutine$sceneInit_st8p7j$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1))), this.local$$receiver);
            solidRect$lambda_0($receiver_0);
            currentGameState.paused = false;
            var $this = this.$this.sceneContainer;
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
  RestartMarioScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_2(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RestartMarioScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RestartMarioScene',
    interfaces: [Scene]
  };
  function solidRect$lambda_1($receiver) {
    return Unit;
  }
  function RestartPacmanScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$_3($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_3.prototype.constructor = Coroutine$sceneInit_st8p7j$_3;
  Coroutine$sceneInit_st8p7j$_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1))), this.local$$receiver);
            solidRect$lambda_1($receiver_0);
            currentGameState.paused = false;
            var $this = this.$this.sceneContainer;
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
  RestartPacmanScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_3(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RestartPacmanScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RestartPacmanScene',
    interfaces: [Scene]
  };
  function RestartSnakeScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$_4($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_4.prototype.constructor = Coroutine$sceneInit_st8p7j$_4;
  Coroutine$sceneInit_st8p7j$_4.prototype.doResume = function () {
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
            currentGameState.paused = false;
            var $this = this.$this.sceneContainer;
            var injects = [1];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 3;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(SnakeGameScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0;
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
  RestartSnakeScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_4(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RestartSnakeScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RestartSnakeScene',
    interfaces: [Scene]
  };
  function solidRect$lambda_2($receiver) {
    return Unit;
  }
  function TransitionToMarioScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$_5($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_5.prototype.constructor = Coroutine$sceneInit_st8p7j$_5;
  Coroutine$sceneInit_st8p7j$_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1))), this.local$$receiver);
            solidRect$lambda_2($receiver_0);
            currentGameState.paused = false;
            var $this = this.$this.sceneContainer;
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
  TransitionToMarioScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_5(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  TransitionToMarioScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionToMarioScene',
    interfaces: [Scene]
  };
  function solidRect$lambda_3($receiver) {
    return Unit;
  }
  function TransitionToPacmanScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$_6($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_6.prototype.constructor = Coroutine$sceneInit_st8p7j$_6;
  Coroutine$sceneInit_st8p7j$_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = addTo(new SolidRect_init(1000.0, 1000.0, RGBA.Companion.float_7b5o5w$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(1))), this.local$$receiver);
            solidRect$lambda_3($receiver_0);
            currentGameState.paused = false;
            var $this = this.$this.sceneContainer;
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
  TransitionToPacmanScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_6(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  TransitionToPacmanScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionToPacmanScene',
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
            return new RestartSnakeScene();
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
            return new RestartPacmanScene();
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
            return new RestartMarioScene();
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
  function Coroutine$SnakeGameModule$init$lambda$lambda_4($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_4.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_4;
  Coroutine$SnakeGameModule$init$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new TransitionToPacmanScene();
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
  function SnakeGameModule$init$lambda$lambda_4($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_4($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_5($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_5.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_5;
  Coroutine$SnakeGameModule$init$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new TransitionToMarioScene();
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
  function SnakeGameModule$init$lambda$lambda_5($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_5($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_6($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_6.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_6;
  Coroutine$SnakeGameModule$init$lambda$lambda_6.prototype.doResume = function () {
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
  function SnakeGameModule$init$lambda$lambda_6($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_6($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_7($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_7.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_7;
  Coroutine$SnakeGameModule$init$lambda$lambda_7.prototype.doResume = function () {
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
  function SnakeGameModule$init$lambda$lambda_7($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_7($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SnakeGameModule$init$lambda$lambda_8($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$SnakeGameModule$init$lambda$lambda_8.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SnakeGameModule$init$lambda$lambda_8.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SnakeGameModule$init$lambda$lambda_8.prototype.constructor = Coroutine$SnakeGameModule$init$lambda$lambda_8;
  Coroutine$SnakeGameModule$init$lambda$lambda_8.prototype.doResume = function () {
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
  function SnakeGameModule$init$lambda$lambda_8($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SnakeGameModule$init$lambda$lambda_8($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  SnakeGameModule.prototype.init_y6n311$ = function (injector, continuation) {
    var instance = new GameState();
    injector.mapInstance_b1ce0a$(getKClass(GameState), instance);
    injector.mapPrototype_siz2e9$(getKClass(LoadingScene), SnakeGameModule$init$lambda$lambda);
    injector.mapPrototype_siz2e9$(getKClass(MainMenuScene), SnakeGameModule$init$lambda$lambda_0);
    injector.mapPrototype_siz2e9$(getKClass(RestartSnakeScene), SnakeGameModule$init$lambda$lambda_1);
    injector.mapPrototype_siz2e9$(getKClass(RestartPacmanScene), SnakeGameModule$init$lambda$lambda_2);
    injector.mapPrototype_siz2e9$(getKClass(RestartMarioScene), SnakeGameModule$init$lambda$lambda_3);
    injector.mapPrototype_siz2e9$(getKClass(TransitionToPacmanScene), SnakeGameModule$init$lambda$lambda_4);
    injector.mapPrototype_siz2e9$(getKClass(TransitionToMarioScene), SnakeGameModule$init$lambda$lambda_5);
    injector.mapPrototype_siz2e9$(getKClass(SnakeGameScene), SnakeGameModule$init$lambda$lambda_6);
    injector.mapPrototype_siz2e9$(getKClass(PacmanGameScene), SnakeGameModule$init$lambda$lambda_7);
    injector.mapPrototype_siz2e9$(getKClass(MarioGameScene), SnakeGameModule$init$lambda$lambda_8);
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
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  var package$com = _.com || (_.com = {});
  var package$snakegame = package$com.snakegame || (package$com.snakegame = {});
  var package$actors = package$snakegame.actors || (package$snakegame.actors = {});
  package$actors.Apple = Apple;
  package$actors.apple_27fpe4$ = apple;
  package$actors.Coin = Coin;
  package$actors.coin_odin9u$ = coin;
  package$actors.Dot = Dot;
  package$actors.dot_odin9u$ = dot;
  package$actors.Ghost = Ghost;
  package$actors.ghost_vqgpqn$ = ghost;
  package$actors.Pacoman = Pacoman;
  package$actors.pacoman_q31wot$ = pacoman;
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
  $$importsForInline$$.korgejam = _;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  package$actors.snake_7unl9l$ = snake;
  package$actors.SnakeSkin = SnakeSkin;
  package$actors.PacmanSnakeSkin = PacmanSnakeSkin;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  var package$cinematics = package$snakegame.cinematics || (package$snakegame.cinematics = {});
  package$cinematics.SnakeCinematic = SnakeCinematic;
  Object.defineProperty(package$snakegame, 'DESIRED_FPS', {
    get: function () {
      return DESIRED_FPS;
    }
  });
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
  var package$gameplay = package$snakegame.gameplay || (package$snakegame.gameplay = {});
  package$gameplay.GameState = GameState;
  Object.defineProperty(package$gameplay, 'currentGameState', {
    get: function () {
      return currentGameState;
    },
    set: function (value) {
      currentGameState = value;
    }
  });
  package$gameplay.StageConfig = StageConfig;
  Object.defineProperty(package$gameplay, 'SnakeStageConfig', {
    get: function () {
      return SnakeStageConfig;
    }
  });
  Object.defineProperty(package$gameplay, 'PacmanStageConfig', {
    get: function () {
      return PacmanStageConfig;
    }
  });
  Object.defineProperty(package$gameplay, 'MarioStageConfig', {
    get: function () {
      return MarioStageConfig;
    }
  });
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
  package$map.ItemSpawner = ItemSpawner;
  Object.defineProperty(Resources, 'Companion', {
    get: Resources$Companion_getInstance
  });
  var package$resources = package$snakegame.resources || (package$snakegame.resources = {});
  package$resources.Resources = Resources;
  $$importsForInline$$['korim-root-korim'] = $module$korim_root_korim;
  var package$scenes = package$snakegame.scenes || (package$snakegame.scenes = {});
  package$scenes.GameScene = GameScene;
  package$scenes.SnakeGameScene = SnakeGameScene;
  package$scenes.PacmanGameScene = PacmanGameScene;
  package$scenes.MarioGameScene = MarioGameScene;
  package$scenes.LoadingScene = LoadingScene;
  package$scenes.MainMenuScene = MainMenuScene;
  package$scenes.RestartMarioScene = RestartMarioScene;
  package$scenes.RestartPacmanScene = RestartPacmanScene;
  package$scenes.RestartSnakeScene = RestartSnakeScene;
  package$scenes.TransitionToMarioScene = TransitionToMarioScene;
  package$scenes.TransitionToPacmanScene = TransitionToPacmanScene;
  _.main = main;
  $$importsForInline$$['korinject-root-korinject'] = $module$korinject_root_korinject;
  Object.defineProperty(_, 'SnakeGameModule', {
    get: SnakeGameModule_getInstance
  });
  DESIRED_FPS = 60;
  var $receiver_1 = 1000.0 / DESIRED_FPS;
  MILLISECONDS_PER_FRAME = TimeSpan.Companion.fromMilliseconds_14dthe$($receiver_1);
  TILE_SIZE = 32;
  currentGameState = new GameState();
  SnakeStageConfig = new StageConfig(1, 0, new Point(8, 8), MovementMode$SNAKE_getInstance(), new SnakeSkin(), false, true);
  PacmanStageConfig = new StageConfig(2, 0, new Point(0, 10), MovementMode$PACMAN_getInstance(), new PacmanSnakeSkin(), false, false);
  MarioStageConfig = new StageConfig(3, 1, new Point(0, 10), MovementMode$MARIO_getInstance(), new SnakeSkin(), true, true);
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
