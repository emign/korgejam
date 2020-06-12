(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio', 'klock', 'korma', 'kds', 'kmem'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio'), require('klock'), require('korma'), require('kds'), require('kmem'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korev'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korev'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korev'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korev'.");
    }
    if (typeof klock === 'undefined') {
      throw new Error("Error loading module 'korev'. Its dependency 'klock' was not found. Please, check whether 'klock' is loaded prior to 'korev'.");
    }
    if (typeof korma === 'undefined') {
      throw new Error("Error loading module 'korev'. Its dependency 'korma' was not found. Please, check whether 'korma' is loaded prior to 'korev'.");
    }
    if (typeof kds === 'undefined') {
      throw new Error("Error loading module 'korev'. Its dependency 'kds' was not found. Please, check whether 'kds' is loaded prior to 'korev'.");
    }
    if (typeof kmem === 'undefined') {
      throw new Error("Error loading module 'korev'. Its dependency 'kmem' was not found. Please, check whether 'kmem' is loaded prior to 'korev'.");
    }
    root.korev = factory(typeof korev === 'undefined' ? {} : korev, kotlin, korio, klock, korma, kds, kmem);
  }
}(this, function (_, Kotlin, $module$korio, $module$klock, $module$korma, $module$kds, $module$kmem) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var Closeable = $module$korio.com.soywiz.korio.lang.Closeable;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var DateTime = $module$klock.com.soywiz.klock.DateTime;
  var Point = $module$korma.com.soywiz.korma.geom.Point;
  var Extra = $module$kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds.com.soywiz.kds.Extra.Mixin;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var extract = $module$kmem.com.soywiz.kmem.extract_dqglrj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  PreventDefaultException.prototype = Object.create(Exception.prototype);
  PreventDefaultException.prototype.constructor = PreventDefaultException;
  MouseEvent$Type.prototype = Object.create(Enum.prototype);
  MouseEvent$Type.prototype.constructor = MouseEvent$Type;
  MouseEvent.prototype = Object.create(Event.prototype);
  MouseEvent.prototype.constructor = MouseEvent;
  TouchEvent$Type.prototype = Object.create(Enum.prototype);
  TouchEvent$Type.prototype.constructor = TouchEvent$Type;
  TouchEvent.prototype = Object.create(Event.prototype);
  TouchEvent.prototype.constructor = TouchEvent;
  KeyEvent$Type.prototype = Object.create(Enum.prototype);
  KeyEvent$Type.prototype.constructor = KeyEvent$Type;
  KeyEvent.prototype = Object.create(Event.prototype);
  KeyEvent.prototype.constructor = KeyEvent;
  GamePadConnectionEvent$Type.prototype = Object.create(Enum.prototype);
  GamePadConnectionEvent$Type.prototype.constructor = GamePadConnectionEvent$Type;
  GamePadConnectionEvent.prototype = Object.create(Event.prototype);
  GamePadConnectionEvent.prototype.constructor = GamePadConnectionEvent;
  GamePadUpdateEvent.prototype = Object.create(Event.prototype);
  GamePadUpdateEvent.prototype.constructor = GamePadUpdateEvent;
  GamePadButtonEvent$Type.prototype = Object.create(Enum.prototype);
  GamePadButtonEvent$Type.prototype.constructor = GamePadButtonEvent$Type;
  GamePadButtonEvent.prototype = Object.create(Event.prototype);
  GamePadButtonEvent.prototype.constructor = GamePadButtonEvent;
  GamePadStickEvent.prototype = Object.create(Event.prototype);
  GamePadStickEvent.prototype.constructor = GamePadStickEvent;
  ChangeEvent.prototype = Object.create(Event.prototype);
  ChangeEvent.prototype.constructor = ChangeEvent;
  ReshapeEvent.prototype = Object.create(Event.prototype);
  ReshapeEvent.prototype.constructor = ReshapeEvent;
  FullScreenEvent.prototype = Object.create(Event.prototype);
  FullScreenEvent.prototype.constructor = FullScreenEvent;
  RenderEvent.prototype = Object.create(Event.prototype);
  RenderEvent.prototype.constructor = RenderEvent;
  InitEvent.prototype = Object.create(Event.prototype);
  InitEvent.prototype.constructor = InitEvent;
  DisposeEvent.prototype = Object.create(Event.prototype);
  DisposeEvent.prototype.constructor = DisposeEvent;
  DropFileEvent$Type.prototype = Object.create(Enum.prototype);
  DropFileEvent$Type.prototype.constructor = DropFileEvent$Type;
  DropFileEvent.prototype = Object.create(Event.prototype);
  DropFileEvent.prototype.constructor = DropFileEvent;
  MouseButton.prototype = Object.create(Enum.prototype);
  MouseButton.prototype.constructor = MouseButton;
  Key.prototype = Object.create(Enum.prototype);
  Key.prototype.constructor = Key;
  GameStick.prototype = Object.create(Enum.prototype);
  GameStick.prototype.constructor = GameStick;
  GameButton.prototype = Object.create(Enum.prototype);
  GameButton.prototype.constructor = GameButton;
  StandardGamepadMapping.prototype = Object.create(GamepadMapping.prototype);
  StandardGamepadMapping.prototype.constructor = StandardGamepadMapping;
  function EventDispatcher() {
    EventDispatcher$Companion_getInstance();
  }
  EventDispatcher.prototype.copyFrom_qquois$ = function (other) {
  };
  function EventDispatcher$Mixin() {
    this.handlers_kcnnde$_0 = null;
  }
  EventDispatcher$Mixin.prototype.getHandlersFor_tu2jiv$_0 = function (clazz) {
    var tmp$, tmp$_0;
    if (this.handlers_kcnnde$_0 == null)
      return null;
    return (tmp$_0 = (tmp$ = this.handlers_kcnnde$_0) != null ? tmp$.get_11rb$(clazz) : null) == null || Kotlin.isType(tmp$_0, ArrayList) ? tmp$_0 : null;
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  EventDispatcher$Mixin.prototype.getHandlersForCreate_5hfomz$_0 = function (clazz) {
    var tmp$;
    if (this.handlers_kcnnde$_0 == null)
      this.handlers_kcnnde$_0 = LinkedHashMap_init();
    var $receiver = ensureNotNull(this.handlers_kcnnde$_0);
    var tmp$_0;
    var value = $receiver.get_11rb$(clazz);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(clazz, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, ArrayList) ? tmp$ : throwCCE();
  };
  function EventDispatcher$Mixin$addEventListener$lambda(closure$handlers, closure$handler) {
    return function () {
      var $receiver = closure$handlers;
      var element = closure$handler;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  EventDispatcher$Mixin.prototype.addEventListener_xa594f$ = function (clazz, handler) {
    var handlers = this.getHandlersForCreate_5hfomz$_0(clazz);
    handlers.add_11rb$(handler);
    return Closeable.Companion.invoke_o14v8n$(EventDispatcher$Mixin$addEventListener$lambda(handlers, handler));
  };
  EventDispatcher$Mixin.prototype.copyFrom_qquois$ = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    (tmp$ = this.handlers_kcnnde$_0) != null ? (tmp$.clear(), Unit) : null;
    if (Kotlin.isType(other, EventDispatcher$Mixin)) {
      var otherHandlers = other.handlers_kcnnde$_0;
      if (otherHandlers != null) {
        tmp$_0 = otherHandlers.entries.iterator();
        while (tmp$_0.hasNext()) {
          var tmp$_2 = tmp$_0.next();
          var clazz = tmp$_2.key;
          var events = tmp$_2.value;
          tmp$_1 = events.iterator();
          while (tmp$_1.hasNext()) {
            var event = tmp$_1.next();
            this.addEventListener_xa594f$(clazz, event);
          }
        }
      }
    }
  };
  EventDispatcher$Mixin.prototype.dispatch_nipq8w$ = function (clazz, event) {
    var tmp$;
    if (this.handlers_kcnnde$_0 == null)
      return;
    if ((tmp$ = this.getHandlersFor_tu2jiv$_0(clazz)) != null) {
      var tmp$_0;
      var n = 0;
      while (n < tmp$.size) {
        tmp$.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0))(event);
      }
    }
  };
  EventDispatcher$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [EventDispatcher]
  };
  function EventDispatcher$Companion() {
    EventDispatcher$Companion_instance = this;
  }
  EventDispatcher$Companion.prototype.invoke = function () {
    return new EventDispatcher$Mixin();
  };
  EventDispatcher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EventDispatcher$Companion_instance = null;
  function EventDispatcher$Companion_getInstance() {
    if (EventDispatcher$Companion_instance === null) {
      new EventDispatcher$Companion();
    }
    return EventDispatcher$Companion_instance;
  }
  EventDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventDispatcher',
    interfaces: []
  };
  function DummyEventDispatcher() {
    DummyEventDispatcher_instance = this;
  }
  DummyEventDispatcher.prototype.close = function () {
  };
  DummyEventDispatcher.prototype.addEventListener_xa594f$ = function (clazz, handler) {
    return this;
  };
  DummyEventDispatcher.prototype.dispatch_nipq8w$ = function (clazz, event) {
  };
  DummyEventDispatcher.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyEventDispatcher',
    interfaces: [Closeable, EventDispatcher]
  };
  var DummyEventDispatcher_instance = null;
  function DummyEventDispatcher_getInstance() {
    if (DummyEventDispatcher_instance === null) {
      new DummyEventDispatcher();
    }
    return DummyEventDispatcher_instance;
  }
  var addEventListener = defineInlineFunction('korev.com.soywiz.korev.addEventListener_f5v43j$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, handler) {
      return $receiver.addEventListener_xa594f$(getKClass(T_0), handler);
    };
  }));
  var dispatch = defineInlineFunction('korev.com.soywiz.korev.dispatch_jt1ots$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, event) {
      $receiver.dispatch_nipq8w$(getKClass(T_0), event);
    };
  }));
  var invoke = defineInlineFunction('korev.com.soywiz.korev.invoke_t8hnd5$', function ($receiver, callback) {
    callback($receiver);
    return $receiver;
  });
  function Event() {
    this.target = null;
  }
  Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  function preventDefault($receiver, reason) {
    if (reason === void 0)
      reason = null;
    throw new PreventDefaultException(reason);
  }
  function preventDefault_0(reason) {
    if (reason === void 0)
      reason = null;
    throw new PreventDefaultException(reason);
  }
  function PreventDefaultException(reason) {
    if (reason === void 0)
      reason = null;
    Exception_init(this);
    this.reason = reason;
    this.name = 'PreventDefaultException';
  }
  PreventDefaultException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreventDefaultException',
    interfaces: [Exception]
  };
  function MouseEvent(type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    if (type === void 0)
      type = MouseEvent$Type$MOVE_getInstance();
    if (id === void 0)
      id = 0;
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (button === void 0)
      button = MouseButton$LEFT_getInstance();
    if (buttons === void 0)
      buttons = 0;
    if (scrollDeltaX === void 0)
      scrollDeltaX = 0.0;
    if (scrollDeltaY === void 0)
      scrollDeltaY = 0.0;
    if (scrollDeltaZ === void 0)
      scrollDeltaZ = 0.0;
    if (isShiftDown === void 0)
      isShiftDown = false;
    if (isCtrlDown === void 0)
      isCtrlDown = false;
    if (isAltDown === void 0)
      isAltDown = false;
    if (isMetaDown === void 0)
      isMetaDown = false;
    if (scaleCoords === void 0)
      scaleCoords = true;
    Event.call(this);
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
    this.button = button;
    this.buttons = buttons;
    this.scrollDeltaX = scrollDeltaX;
    this.scrollDeltaY = scrollDeltaY;
    this.scrollDeltaZ = scrollDeltaZ;
    this.isShiftDown = isShiftDown;
    this.isCtrlDown = isCtrlDown;
    this.isAltDown = isAltDown;
    this.isMetaDown = isMetaDown;
    this.scaleCoords = scaleCoords;
  }
  function MouseEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseEvent$Type_initFields() {
    MouseEvent$Type_initFields = function () {
    };
    MouseEvent$Type$MOVE_instance = new MouseEvent$Type('MOVE', 0);
    MouseEvent$Type$DRAG_instance = new MouseEvent$Type('DRAG', 1);
    MouseEvent$Type$UP_instance = new MouseEvent$Type('UP', 2);
    MouseEvent$Type$DOWN_instance = new MouseEvent$Type('DOWN', 3);
    MouseEvent$Type$CLICK_instance = new MouseEvent$Type('CLICK', 4);
    MouseEvent$Type$ENTER_instance = new MouseEvent$Type('ENTER', 5);
    MouseEvent$Type$EXIT_instance = new MouseEvent$Type('EXIT', 6);
    MouseEvent$Type$SCROLL_instance = new MouseEvent$Type('SCROLL', 7);
  }
  var MouseEvent$Type$MOVE_instance;
  function MouseEvent$Type$MOVE_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$MOVE_instance;
  }
  var MouseEvent$Type$DRAG_instance;
  function MouseEvent$Type$DRAG_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$DRAG_instance;
  }
  var MouseEvent$Type$UP_instance;
  function MouseEvent$Type$UP_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$UP_instance;
  }
  var MouseEvent$Type$DOWN_instance;
  function MouseEvent$Type$DOWN_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$DOWN_instance;
  }
  var MouseEvent$Type$CLICK_instance;
  function MouseEvent$Type$CLICK_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$CLICK_instance;
  }
  var MouseEvent$Type$ENTER_instance;
  function MouseEvent$Type$ENTER_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$ENTER_instance;
  }
  var MouseEvent$Type$EXIT_instance;
  function MouseEvent$Type$EXIT_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$EXIT_instance;
  }
  var MouseEvent$Type$SCROLL_instance;
  function MouseEvent$Type$SCROLL_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$SCROLL_instance;
  }
  MouseEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function MouseEvent$Type$values() {
    return [MouseEvent$Type$MOVE_getInstance(), MouseEvent$Type$DRAG_getInstance(), MouseEvent$Type$UP_getInstance(), MouseEvent$Type$DOWN_getInstance(), MouseEvent$Type$CLICK_getInstance(), MouseEvent$Type$ENTER_getInstance(), MouseEvent$Type$EXIT_getInstance(), MouseEvent$Type$SCROLL_getInstance()];
  }
  MouseEvent$Type.values = MouseEvent$Type$values;
  function MouseEvent$Type$valueOf(name) {
    switch (name) {
      case 'MOVE':
        return MouseEvent$Type$MOVE_getInstance();
      case 'DRAG':
        return MouseEvent$Type$DRAG_getInstance();
      case 'UP':
        return MouseEvent$Type$UP_getInstance();
      case 'DOWN':
        return MouseEvent$Type$DOWN_getInstance();
      case 'CLICK':
        return MouseEvent$Type$CLICK_getInstance();
      case 'ENTER':
        return MouseEvent$Type$ENTER_getInstance();
      case 'EXIT':
        return MouseEvent$Type$EXIT_getInstance();
      case 'SCROLL':
        return MouseEvent$Type$SCROLL_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.MouseEvent.Type.' + name);
    }
  }
  MouseEvent$Type.valueOf_61zpoe$ = MouseEvent$Type$valueOf;
  MouseEvent.prototype.copyFrom_imq2sa$ = function (other) {
    this.type = other.type;
    this.id = other.id;
    this.x = other.x;
    this.y = other.y;
    this.button = other.button;
    this.buttons = other.buttons;
    this.scrollDeltaX = other.scrollDeltaX;
    this.scrollDeltaY = other.scrollDeltaY;
    this.scrollDeltaZ = other.scrollDeltaZ;
    this.isShiftDown = other.isShiftDown;
    this.isCtrlDown = other.isCtrlDown;
    this.isAltDown = other.isAltDown;
    this.isMetaDown = other.isMetaDown;
    this.scaleCoords = other.scaleCoords;
  };
  MouseEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvent',
    interfaces: [Event]
  };
  MouseEvent.prototype.component1 = function () {
    return this.type;
  };
  MouseEvent.prototype.component2 = function () {
    return this.id;
  };
  MouseEvent.prototype.component3 = function () {
    return this.x;
  };
  MouseEvent.prototype.component4 = function () {
    return this.y;
  };
  MouseEvent.prototype.component5 = function () {
    return this.button;
  };
  MouseEvent.prototype.component6 = function () {
    return this.buttons;
  };
  MouseEvent.prototype.component7 = function () {
    return this.scrollDeltaX;
  };
  MouseEvent.prototype.component8 = function () {
    return this.scrollDeltaY;
  };
  MouseEvent.prototype.component9 = function () {
    return this.scrollDeltaZ;
  };
  MouseEvent.prototype.component10 = function () {
    return this.isShiftDown;
  };
  MouseEvent.prototype.component11 = function () {
    return this.isCtrlDown;
  };
  MouseEvent.prototype.component12 = function () {
    return this.isAltDown;
  };
  MouseEvent.prototype.component13 = function () {
    return this.isMetaDown;
  };
  MouseEvent.prototype.component14 = function () {
    return this.scaleCoords;
  };
  MouseEvent.prototype.copy_4o2nlt$ = function (type, id, x, y, button, buttons, scrollDeltaX, scrollDeltaY, scrollDeltaZ, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    return new MouseEvent(type === void 0 ? this.type : type, id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y, button === void 0 ? this.button : button, buttons === void 0 ? this.buttons : buttons, scrollDeltaX === void 0 ? this.scrollDeltaX : scrollDeltaX, scrollDeltaY === void 0 ? this.scrollDeltaY : scrollDeltaY, scrollDeltaZ === void 0 ? this.scrollDeltaZ : scrollDeltaZ, isShiftDown === void 0 ? this.isShiftDown : isShiftDown, isCtrlDown === void 0 ? this.isCtrlDown : isCtrlDown, isAltDown === void 0 ? this.isAltDown : isAltDown, isMetaDown === void 0 ? this.isMetaDown : isMetaDown, scaleCoords === void 0 ? this.scaleCoords : scaleCoords);
  };
  MouseEvent.prototype.toString = function () {
    return 'MouseEvent(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', button=' + Kotlin.toString(this.button)) + (', buttons=' + Kotlin.toString(this.buttons)) + (', scrollDeltaX=' + Kotlin.toString(this.scrollDeltaX)) + (', scrollDeltaY=' + Kotlin.toString(this.scrollDeltaY)) + (', scrollDeltaZ=' + Kotlin.toString(this.scrollDeltaZ)) + (', isShiftDown=' + Kotlin.toString(this.isShiftDown)) + (', isCtrlDown=' + Kotlin.toString(this.isCtrlDown)) + (', isAltDown=' + Kotlin.toString(this.isAltDown)) + (', isMetaDown=' + Kotlin.toString(this.isMetaDown)) + (', scaleCoords=' + Kotlin.toString(this.scaleCoords)) + ')';
  };
  MouseEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.buttons) | 0;
    result = result * 31 + Kotlin.hashCode(this.scrollDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scrollDeltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.scrollDeltaZ) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShiftDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isCtrlDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isAltDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isMetaDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleCoords) | 0;
    return result;
  };
  MouseEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.buttons, other.buttons) && Kotlin.equals(this.scrollDeltaX, other.scrollDeltaX) && Kotlin.equals(this.scrollDeltaY, other.scrollDeltaY) && Kotlin.equals(this.scrollDeltaZ, other.scrollDeltaZ) && Kotlin.equals(this.isShiftDown, other.isShiftDown) && Kotlin.equals(this.isCtrlDown, other.isCtrlDown) && Kotlin.equals(this.isAltDown, other.isAltDown) && Kotlin.equals(this.isMetaDown, other.isMetaDown) && Kotlin.equals(this.scaleCoords, other.scaleCoords)))));
  };
  function Touch(index, active, id, startTime, currentTime, start, current) {
    Touch$Companion_getInstance();
    if (index === void 0)
      index = -1;
    if (active === void 0)
      active = false;
    if (id === void 0)
      id = -1;
    if (startTime === void 0)
      startTime = DateTime.Companion.EPOCH;
    if (currentTime === void 0)
      currentTime = DateTime.Companion.EPOCH;
    if (start === void 0)
      start = Point.Companion.invoke();
    if (current === void 0)
      current = Point.Companion.invoke();
    this.index = index;
    this.active = active;
    this.id = id;
    this.startTime = startTime;
    this.currentTime = currentTime;
    this.start = start;
    this.current = current;
    this.$delegate_kl8l8a$_0 = new Extra$Mixin();
  }
  function Touch$Companion() {
    Touch$Companion_instance = this;
    this.dummy = new Touch(-1);
  }
  Touch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Touch$Companion_instance = null;
  function Touch$Companion_getInstance() {
    if (Touch$Companion_instance === null) {
      new Touch$Companion();
    }
    return Touch$Companion_instance;
  }
  Touch.prototype.copyFrom_kl8l8a$ = function (other) {
    this.active = other.active;
    this.id = other.id;
    this.startTime = other.startTime;
    this.start.copyFrom_3qfxs9$(other.start);
    this.current.copyFrom_3qfxs9$(other.current);
  };
  Object.defineProperty(Touch.prototype, 'extra', {
    get: function () {
      return this.$delegate_kl8l8a$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_kl8l8a$_0.extra = tmp$;
    }
  });
  Touch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Touch',
    interfaces: [Extra]
  };
  Touch.prototype.component1 = function () {
    return this.index;
  };
  Touch.prototype.component2 = function () {
    return this.active;
  };
  Touch.prototype.component3 = function () {
    return this.id;
  };
  Touch.prototype.component4 = function () {
    return this.startTime;
  };
  Touch.prototype.component5 = function () {
    return this.currentTime;
  };
  Touch.prototype.component6 = function () {
    return this.start;
  };
  Touch.prototype.component7 = function () {
    return this.current;
  };
  Touch.prototype.copy_ohrl3p$ = function (index, active, id, startTime, currentTime, start, current) {
    return new Touch(index === void 0 ? this.index : index, active === void 0 ? this.active : active, id === void 0 ? this.id : id, startTime === void 0 ? this.startTime : startTime, currentTime === void 0 ? this.currentTime : currentTime, start === void 0 ? this.start : start, current === void 0 ? this.current : current);
  };
  Touch.prototype.toString = function () {
    return 'Touch(index=' + Kotlin.toString(this.index) + (', active=' + Kotlin.toString(this.active)) + (', id=' + Kotlin.toString(this.id)) + (', startTime=' + Kotlin.toString(this.startTime)) + (', currentTime=' + Kotlin.toString(this.currentTime)) + (', start=' + Kotlin.toString(this.start)) + (', current=' + Kotlin.toString(this.current)) + ')';
  };
  Touch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.current) | 0;
    return result;
  };
  Touch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.active, other.active) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.currentTime, other.currentTime) && Kotlin.equals(this.start, other.start) && Kotlin.equals(this.current, other.current)))));
  };
  var Array_0 = Array;
  function TouchEvent(type, screen, startTime, currentTime, scaleCoords) {
    TouchEvent$Companion_getInstance();
    if (type === void 0)
      type = TouchEvent$Type$START_getInstance();
    if (screen === void 0)
      screen = 0;
    if (startTime === void 0)
      startTime = DateTime.Companion.EPOCH;
    if (currentTime === void 0)
      currentTime = DateTime.Companion.EPOCH;
    if (scaleCoords === void 0)
      scaleCoords = true;
    Event.call(this);
    this.type = type;
    this.screen = screen;
    this.startTime = startTime;
    this.currentTime = currentTime;
    this.scaleCoords = scaleCoords;
    var array = Array_0(TouchEvent$Companion_getInstance().MAX_TOUCHES);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Touch(i);
    }
    this.bufferTouches_0 = array;
    this._touches_0 = LinkedHashSet_init();
  }
  function TouchEvent$Companion() {
    TouchEvent$Companion_instance = this;
    this.MAX_TOUCHES = 10;
  }
  TouchEvent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TouchEvent$Companion_instance = null;
  function TouchEvent$Companion_getInstance() {
    if (TouchEvent$Companion_instance === null) {
      new TouchEvent$Companion();
    }
    return TouchEvent$Companion_instance;
  }
  Object.defineProperty(TouchEvent.prototype, 'touches', {
    get: function () {
      return this._touches_0;
    }
  });
  TouchEvent.prototype.startFrame_dh6y7s$ = function (type) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.type = type;
    if (type === TouchEvent$Type$START_getInstance()) {
      this.startTime = DateTime.Companion.now();
      tmp$ = this.bufferTouches_0;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var touch = tmp$[tmp$_0];
        touch.id = -1;
      }
    }
    this.currentTime = DateTime.Companion.now();
    if (type !== TouchEvent$Type$END_getInstance()) {
      tmp$_1 = this.bufferTouches_0;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var touch_0 = tmp$_1[tmp$_2];
        touch_0.active = false;
      }
      this._touches_0.clear();
    }
  };
  TouchEvent.prototype.getTouchById_za3lpa$ = function (id) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    var $receiver = this.bufferTouches_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_3;
      for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
        var element = $receiver[tmp$_3];
        if (element.id === id) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_2 = tmp$;
    else {
      var $receiver_0 = this.bufferTouches_0;
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_4;
        for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
          var element_0 = $receiver_0[tmp$_4];
          if (element_0.id === -1) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      tmp$_2 = firstOrNull$result_0;
    }
    var tmp$_5;
    if ((tmp$_0 = tmp$_2) != null)
      tmp$_5 = tmp$_0;
    else {
      var $receiver_1 = this.bufferTouches_0;
      var firstOrNull$result_1;
      firstOrNull$break: do {
        var tmp$_6;
        for (tmp$_6 = 0; tmp$_6 !== $receiver_1.length; ++tmp$_6) {
          var element_1 = $receiver_1[tmp$_6];
          if (!element_1.active) {
            firstOrNull$result_1 = element_1;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_1 = null;
      }
       while (false);
      tmp$_5 = firstOrNull$result_1;
    }
    return (tmp$_1 = tmp$_5) != null ? tmp$_1 : this.bufferTouches_0[TouchEvent$Companion_getInstance().MAX_TOUCHES - 1 | 0];
  };
  TouchEvent.prototype.touch_w4xg1m$ = function (id, x, y) {
    var touch = this.getTouchById_za3lpa$(id);
    touch.id = id;
    touch.active = true;
    touch.currentTime = this.currentTime;
    touch.current.x = x;
    touch.current.y = y;
    if (this.type === TouchEvent$Type$START_getInstance()) {
      touch.startTime = this.currentTime;
      touch.start.x = x;
      touch.start.y = y;
    }
    this._touches_0.add_11rb$(touch);
  };
  TouchEvent.prototype.copyFrom_og577k$ = function (other) {
    var tmp$;
    this.type = other.type;
    this.screen = other.screen;
    this.startTime = other.startTime;
    this.currentTime = other.currentTime;
    this.scaleCoords = other.scaleCoords;
    tmp$ = TouchEvent$Companion_getInstance().MAX_TOUCHES;
    for (var n = 0; n < tmp$; n++) {
      this.bufferTouches_0[n].copyFrom_kl8l8a$(other.bufferTouches_0[n]);
    }
  };
  function TouchEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TouchEvent$Type_initFields() {
    TouchEvent$Type_initFields = function () {
    };
    TouchEvent$Type$START_instance = new TouchEvent$Type('START', 0);
    TouchEvent$Type$END_instance = new TouchEvent$Type('END', 1);
    TouchEvent$Type$MOVE_instance = new TouchEvent$Type('MOVE', 2);
  }
  var TouchEvent$Type$START_instance;
  function TouchEvent$Type$START_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$START_instance;
  }
  var TouchEvent$Type$END_instance;
  function TouchEvent$Type$END_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$END_instance;
  }
  var TouchEvent$Type$MOVE_instance;
  function TouchEvent$Type$MOVE_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$MOVE_instance;
  }
  TouchEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function TouchEvent$Type$values() {
    return [TouchEvent$Type$START_getInstance(), TouchEvent$Type$END_getInstance(), TouchEvent$Type$MOVE_getInstance()];
  }
  TouchEvent$Type.values = TouchEvent$Type$values;
  function TouchEvent$Type$valueOf(name) {
    switch (name) {
      case 'START':
        return TouchEvent$Type$START_getInstance();
      case 'END':
        return TouchEvent$Type$END_getInstance();
      case 'MOVE':
        return TouchEvent$Type$MOVE_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.TouchEvent.Type.' + name);
    }
  }
  TouchEvent$Type.valueOf_61zpoe$ = TouchEvent$Type$valueOf;
  TouchEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchEvent',
    interfaces: [Event]
  };
  TouchEvent.prototype.component1 = function () {
    return this.type;
  };
  TouchEvent.prototype.component2 = function () {
    return this.screen;
  };
  TouchEvent.prototype.component3 = function () {
    return this.startTime;
  };
  TouchEvent.prototype.component4 = function () {
    return this.currentTime;
  };
  TouchEvent.prototype.component5 = function () {
    return this.scaleCoords;
  };
  TouchEvent.prototype.copy_wegha1$ = function (type, screen, startTime, currentTime, scaleCoords) {
    return new TouchEvent(type === void 0 ? this.type : type, screen === void 0 ? this.screen : screen, startTime === void 0 ? this.startTime : startTime, currentTime === void 0 ? this.currentTime : currentTime, scaleCoords === void 0 ? this.scaleCoords : scaleCoords);
  };
  TouchEvent.prototype.toString = function () {
    return 'TouchEvent(type=' + Kotlin.toString(this.type) + (', screen=' + Kotlin.toString(this.screen)) + (', startTime=' + Kotlin.toString(this.startTime)) + (', currentTime=' + Kotlin.toString(this.currentTime)) + (', scaleCoords=' + Kotlin.toString(this.scaleCoords)) + ')';
  };
  TouchEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.screen) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleCoords) | 0;
    return result;
  };
  TouchEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.screen, other.screen) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.currentTime, other.currentTime) && Kotlin.equals(this.scaleCoords, other.scaleCoords)))));
  };
  function KeyEvent(type, id, key, keyCode, character) {
    if (type === void 0)
      type = KeyEvent$Type$UP_getInstance();
    if (id === void 0)
      id = 0;
    if (key === void 0)
      key = Key$UP_getInstance();
    if (keyCode === void 0)
      keyCode = 0;
    if (character === void 0)
      character = 0;
    Event.call(this);
    this.type = type;
    this.id = id;
    this.key = key;
    this.keyCode = keyCode;
    this.character = toBoxedChar(character);
  }
  function KeyEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyEvent$Type_initFields() {
    KeyEvent$Type_initFields = function () {
    };
    KeyEvent$Type$UP_instance = new KeyEvent$Type('UP', 0);
    KeyEvent$Type$DOWN_instance = new KeyEvent$Type('DOWN', 1);
    KeyEvent$Type$TYPE_instance = new KeyEvent$Type('TYPE', 2);
  }
  var KeyEvent$Type$UP_instance;
  function KeyEvent$Type$UP_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$UP_instance;
  }
  var KeyEvent$Type$DOWN_instance;
  function KeyEvent$Type$DOWN_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$DOWN_instance;
  }
  var KeyEvent$Type$TYPE_instance;
  function KeyEvent$Type$TYPE_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$TYPE_instance;
  }
  KeyEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function KeyEvent$Type$values() {
    return [KeyEvent$Type$UP_getInstance(), KeyEvent$Type$DOWN_getInstance(), KeyEvent$Type$TYPE_getInstance()];
  }
  KeyEvent$Type.values = KeyEvent$Type$values;
  function KeyEvent$Type$valueOf(name) {
    switch (name) {
      case 'UP':
        return KeyEvent$Type$UP_getInstance();
      case 'DOWN':
        return KeyEvent$Type$DOWN_getInstance();
      case 'TYPE':
        return KeyEvent$Type$TYPE_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.KeyEvent.Type.' + name);
    }
  }
  KeyEvent$Type.valueOf_61zpoe$ = KeyEvent$Type$valueOf;
  KeyEvent.prototype.copyFrom_5xeie8$ = function (other) {
    this.type = other.type;
    this.id = other.id;
    this.key = other.key;
    this.keyCode = other.keyCode;
    this.character = other.character;
  };
  KeyEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyEvent',
    interfaces: [Event]
  };
  KeyEvent.prototype.component1 = function () {
    return this.type;
  };
  KeyEvent.prototype.component2 = function () {
    return this.id;
  };
  KeyEvent.prototype.component3 = function () {
    return this.key;
  };
  KeyEvent.prototype.component4 = function () {
    return this.keyCode;
  };
  KeyEvent.prototype.component5 = function () {
    return this.character;
  };
  KeyEvent.prototype.copy_e4rfid$ = function (type, id, key, keyCode, character) {
    return new KeyEvent(type === void 0 ? this.type : type, id === void 0 ? this.id : id, key === void 0 ? this.key : key, keyCode === void 0 ? this.keyCode : keyCode, character === void 0 ? this.character : character);
  };
  KeyEvent.prototype.toString = function () {
    return 'KeyEvent(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', key=' + Kotlin.toString(this.key)) + (', keyCode=' + Kotlin.toString(this.keyCode)) + (', character=' + Kotlin.toString(this.character)) + ')';
  };
  KeyEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.character) | 0;
    return result;
  };
  KeyEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.key, other.key) && Kotlin.equals(this.keyCode, other.keyCode) && Kotlin.equals(this.character, other.character)))));
  };
  function GamePadConnectionEvent(type, gamepad) {
    if (type === void 0)
      type = GamePadConnectionEvent$Type$CONNECTED_getInstance();
    if (gamepad === void 0)
      gamepad = 0;
    Event.call(this);
    this.type = type;
    this.gamepad = gamepad;
  }
  function GamePadConnectionEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GamePadConnectionEvent$Type_initFields() {
    GamePadConnectionEvent$Type_initFields = function () {
    };
    GamePadConnectionEvent$Type$CONNECTED_instance = new GamePadConnectionEvent$Type('CONNECTED', 0);
    GamePadConnectionEvent$Type$DISCONNECTED_instance = new GamePadConnectionEvent$Type('DISCONNECTED', 1);
  }
  var GamePadConnectionEvent$Type$CONNECTED_instance;
  function GamePadConnectionEvent$Type$CONNECTED_getInstance() {
    GamePadConnectionEvent$Type_initFields();
    return GamePadConnectionEvent$Type$CONNECTED_instance;
  }
  var GamePadConnectionEvent$Type$DISCONNECTED_instance;
  function GamePadConnectionEvent$Type$DISCONNECTED_getInstance() {
    GamePadConnectionEvent$Type_initFields();
    return GamePadConnectionEvent$Type$DISCONNECTED_instance;
  }
  GamePadConnectionEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function GamePadConnectionEvent$Type$values() {
    return [GamePadConnectionEvent$Type$CONNECTED_getInstance(), GamePadConnectionEvent$Type$DISCONNECTED_getInstance()];
  }
  GamePadConnectionEvent$Type.values = GamePadConnectionEvent$Type$values;
  function GamePadConnectionEvent$Type$valueOf(name) {
    switch (name) {
      case 'CONNECTED':
        return GamePadConnectionEvent$Type$CONNECTED_getInstance();
      case 'DISCONNECTED':
        return GamePadConnectionEvent$Type$DISCONNECTED_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GamePadConnectionEvent.Type.' + name);
    }
  }
  GamePadConnectionEvent$Type.valueOf_61zpoe$ = GamePadConnectionEvent$Type$valueOf;
  GamePadConnectionEvent.prototype.copyFrom_a4csu8$ = function (other) {
    this.type = other.type;
    this.gamepad = other.gamepad;
  };
  GamePadConnectionEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadConnectionEvent',
    interfaces: [Event]
  };
  GamePadConnectionEvent.prototype.component1 = function () {
    return this.type;
  };
  GamePadConnectionEvent.prototype.component2 = function () {
    return this.gamepad;
  };
  GamePadConnectionEvent.prototype.copy_o8775y$ = function (type, gamepad) {
    return new GamePadConnectionEvent(type === void 0 ? this.type : type, gamepad === void 0 ? this.gamepad : gamepad);
  };
  GamePadConnectionEvent.prototype.toString = function () {
    return 'GamePadConnectionEvent(type=' + Kotlin.toString(this.type) + (', gamepad=' + Kotlin.toString(this.gamepad)) + ')';
  };
  GamePadConnectionEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    return result;
  };
  GamePadConnectionEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.gamepad, other.gamepad)))));
  };
  function GamePadUpdateEvent(gamepadsLength, gamepads) {
    if (gamepadsLength === void 0)
      gamepadsLength = 0;
    if (gamepads === void 0) {
      var array = Array_0(8);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = new GamepadInfo();
      }
      gamepads = array;
    }
    Event.call(this);
    this.gamepadsLength = gamepadsLength;
    this.gamepads = gamepads;
  }
  GamePadUpdateEvent.prototype.copyFrom_ypku17$ = function (that) {
    var tmp$;
    this.gamepadsLength = that.gamepadsLength;
    tmp$ = this.gamepads.length;
    for (var n = 0; n < tmp$; n++) {
      this.gamepads[n].copyFrom_u2qnca$(that.gamepads[n]);
    }
  };
  GamePadUpdateEvent.prototype.toString = function () {
    var $receiver = this.gamepads;
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (element.connected)
        destination.add_11rb$(element);
    }
    return 'GamePadUpdateEvent(' + destination + ')';
  };
  GamePadUpdateEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadUpdateEvent',
    interfaces: [Event]
  };
  GamePadUpdateEvent.prototype.component1 = function () {
    return this.gamepadsLength;
  };
  GamePadUpdateEvent.prototype.component2 = function () {
    return this.gamepads;
  };
  GamePadUpdateEvent.prototype.copy_eepwu$ = function (gamepadsLength, gamepads) {
    return new GamePadUpdateEvent(gamepadsLength === void 0 ? this.gamepadsLength : gamepadsLength, gamepads === void 0 ? this.gamepads : gamepads);
  };
  GamePadUpdateEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gamepadsLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepads) | 0;
    return result;
  };
  GamePadUpdateEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gamepadsLength, other.gamepadsLength) && Kotlin.equals(this.gamepads, other.gamepads)))));
  };
  function GamePadButtonEvent(type, gamepad, button, value) {
    if (type === void 0)
      type = GamePadButtonEvent$Type$DOWN_getInstance();
    if (gamepad === void 0)
      gamepad = 0;
    if (button === void 0)
      button = GameButton$BUTTON0_getInstance();
    if (value === void 0)
      value = 0.0;
    Event.call(this);
    this.type = type;
    this.gamepad = gamepad;
    this.button = button;
    this.value = value;
  }
  function GamePadButtonEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GamePadButtonEvent$Type_initFields() {
    GamePadButtonEvent$Type_initFields = function () {
    };
    GamePadButtonEvent$Type$UP_instance = new GamePadButtonEvent$Type('UP', 0);
    GamePadButtonEvent$Type$DOWN_instance = new GamePadButtonEvent$Type('DOWN', 1);
  }
  var GamePadButtonEvent$Type$UP_instance;
  function GamePadButtonEvent$Type$UP_getInstance() {
    GamePadButtonEvent$Type_initFields();
    return GamePadButtonEvent$Type$UP_instance;
  }
  var GamePadButtonEvent$Type$DOWN_instance;
  function GamePadButtonEvent$Type$DOWN_getInstance() {
    GamePadButtonEvent$Type_initFields();
    return GamePadButtonEvent$Type$DOWN_instance;
  }
  GamePadButtonEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function GamePadButtonEvent$Type$values() {
    return [GamePadButtonEvent$Type$UP_getInstance(), GamePadButtonEvent$Type$DOWN_getInstance()];
  }
  GamePadButtonEvent$Type.values = GamePadButtonEvent$Type$values;
  function GamePadButtonEvent$Type$valueOf(name) {
    switch (name) {
      case 'UP':
        return GamePadButtonEvent$Type$UP_getInstance();
      case 'DOWN':
        return GamePadButtonEvent$Type$DOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GamePadButtonEvent.Type.' + name);
    }
  }
  GamePadButtonEvent$Type.valueOf_61zpoe$ = GamePadButtonEvent$Type$valueOf;
  GamePadButtonEvent.prototype.copyFrom_gpfygc$ = function (other) {
    this.type = other.type;
    this.gamepad = other.gamepad;
    this.button = other.button;
    this.value = other.value;
  };
  GamePadButtonEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadButtonEvent',
    interfaces: [Event]
  };
  GamePadButtonEvent.prototype.component1 = function () {
    return this.type;
  };
  GamePadButtonEvent.prototype.component2 = function () {
    return this.gamepad;
  };
  GamePadButtonEvent.prototype.component3 = function () {
    return this.button;
  };
  GamePadButtonEvent.prototype.component4 = function () {
    return this.value;
  };
  GamePadButtonEvent.prototype.copy_1xkha9$ = function (type, gamepad, button, value) {
    return new GamePadButtonEvent(type === void 0 ? this.type : type, gamepad === void 0 ? this.gamepad : gamepad, button === void 0 ? this.button : button, value === void 0 ? this.value : value);
  };
  GamePadButtonEvent.prototype.toString = function () {
    return 'GamePadButtonEvent(type=' + Kotlin.toString(this.type) + (', gamepad=' + Kotlin.toString(this.gamepad)) + (', button=' + Kotlin.toString(this.button)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  GamePadButtonEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  GamePadButtonEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.gamepad, other.gamepad) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.value, other.value)))));
  };
  function GamePadStickEvent(gamepad, stick, x, y) {
    if (gamepad === void 0)
      gamepad = 0;
    if (stick === void 0)
      stick = GameStick$LEFT_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    Event.call(this);
    this.gamepad = gamepad;
    this.stick = stick;
    this.x = x;
    this.y = y;
  }
  GamePadStickEvent.prototype.copyFrom_8q9l1i$ = function (other) {
    this.gamepad = other.gamepad;
    this.stick = other.stick;
    this.x = other.x;
    this.y = other.y;
  };
  GamePadStickEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadStickEvent',
    interfaces: [Event]
  };
  GamePadStickEvent.prototype.component1 = function () {
    return this.gamepad;
  };
  GamePadStickEvent.prototype.component2 = function () {
    return this.stick;
  };
  GamePadStickEvent.prototype.component3 = function () {
    return this.x;
  };
  GamePadStickEvent.prototype.component4 = function () {
    return this.y;
  };
  GamePadStickEvent.prototype.copy_ctxsiv$ = function (gamepad, stick, x, y) {
    return new GamePadStickEvent(gamepad === void 0 ? this.gamepad : gamepad, stick === void 0 ? this.stick : stick, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GamePadStickEvent.prototype.toString = function () {
    return 'GamePadStickEvent(gamepad=' + Kotlin.toString(this.gamepad) + (', stick=' + Kotlin.toString(this.stick)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GamePadStickEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    result = result * 31 + Kotlin.hashCode(this.stick) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GamePadStickEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gamepad, other.gamepad) && Kotlin.equals(this.stick, other.stick) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function ChangeEvent(oldValue, newValue) {
    if (oldValue === void 0)
      oldValue = null;
    if (newValue === void 0)
      newValue = null;
    Event.call(this);
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
  ChangeEvent.prototype.copyFrom_pmilob$ = function (other) {
    this.oldValue = other.oldValue;
    this.newValue = other.newValue;
  };
  ChangeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeEvent',
    interfaces: [Event]
  };
  ChangeEvent.prototype.component1 = function () {
    return this.oldValue;
  };
  ChangeEvent.prototype.component2 = function () {
    return this.newValue;
  };
  ChangeEvent.prototype.copy_oaftn8$ = function (oldValue, newValue) {
    return new ChangeEvent(oldValue === void 0 ? this.oldValue : oldValue, newValue === void 0 ? this.newValue : newValue);
  };
  ChangeEvent.prototype.toString = function () {
    return 'ChangeEvent(oldValue=' + Kotlin.toString(this.oldValue) + (', newValue=' + Kotlin.toString(this.newValue)) + ')';
  };
  ChangeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.oldValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.newValue) | 0;
    return result;
  };
  ChangeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.oldValue, other.oldValue) && Kotlin.equals(this.newValue, other.newValue)))));
  };
  function ReshapeEvent(x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    Event.call(this);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  ReshapeEvent.prototype.copyFrom_itcimp$ = function (other) {
    this.x = other.x;
    this.y = other.y;
    this.width = other.width;
    this.height = other.height;
  };
  ReshapeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReshapeEvent',
    interfaces: [Event]
  };
  ReshapeEvent.prototype.component1 = function () {
    return this.x;
  };
  ReshapeEvent.prototype.component2 = function () {
    return this.y;
  };
  ReshapeEvent.prototype.component3 = function () {
    return this.width;
  };
  ReshapeEvent.prototype.component4 = function () {
    return this.height;
  };
  ReshapeEvent.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new ReshapeEvent(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  ReshapeEvent.prototype.toString = function () {
    return 'ReshapeEvent(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  ReshapeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  ReshapeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function FullScreenEvent(fullscreen) {
    if (fullscreen === void 0)
      fullscreen = false;
    Event.call(this);
    this.fullscreen = fullscreen;
  }
  FullScreenEvent.prototype.copyFrom_jpj46y$ = function (other) {
    this.fullscreen = other.fullscreen;
  };
  FullScreenEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FullScreenEvent',
    interfaces: [Event]
  };
  FullScreenEvent.prototype.component1 = function () {
    return this.fullscreen;
  };
  FullScreenEvent.prototype.copy_6taknv$ = function (fullscreen) {
    return new FullScreenEvent(fullscreen === void 0 ? this.fullscreen : fullscreen);
  };
  FullScreenEvent.prototype.toString = function () {
    return 'FullScreenEvent(fullscreen=' + Kotlin.toString(this.fullscreen) + ')';
  };
  FullScreenEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fullscreen) | 0;
    return result;
  };
  FullScreenEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.fullscreen, other.fullscreen))));
  };
  function RenderEvent() {
    Event.call(this);
  }
  RenderEvent.prototype.copyFrom_p6hw0x$ = function (other) {
  };
  RenderEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderEvent',
    interfaces: [Event]
  };
  function InitEvent() {
    Event.call(this);
  }
  InitEvent.prototype.copyFrom_6vf17f$ = function (other) {
  };
  InitEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InitEvent',
    interfaces: [Event]
  };
  function DisposeEvent() {
    Event.call(this);
  }
  DisposeEvent.prototype.copyFrom_7fwhls$ = function (other) {
  };
  DisposeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisposeEvent',
    interfaces: [Event]
  };
  function DropFileEvent(type, files) {
    if (type === void 0)
      type = DropFileEvent$Type$ENTER_getInstance();
    if (files === void 0)
      files = null;
    Event.call(this);
    this.type = type;
    this.files = files;
  }
  function DropFileEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DropFileEvent$Type_initFields() {
    DropFileEvent$Type_initFields = function () {
    };
    DropFileEvent$Type$ENTER_instance = new DropFileEvent$Type('ENTER', 0);
    DropFileEvent$Type$EXIT_instance = new DropFileEvent$Type('EXIT', 1);
    DropFileEvent$Type$DROP_instance = new DropFileEvent$Type('DROP', 2);
  }
  var DropFileEvent$Type$ENTER_instance;
  function DropFileEvent$Type$ENTER_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$ENTER_instance;
  }
  var DropFileEvent$Type$EXIT_instance;
  function DropFileEvent$Type$EXIT_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$EXIT_instance;
  }
  var DropFileEvent$Type$DROP_instance;
  function DropFileEvent$Type$DROP_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$DROP_instance;
  }
  DropFileEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function DropFileEvent$Type$values() {
    return [DropFileEvent$Type$ENTER_getInstance(), DropFileEvent$Type$EXIT_getInstance(), DropFileEvent$Type$DROP_getInstance()];
  }
  DropFileEvent$Type.values = DropFileEvent$Type$values;
  function DropFileEvent$Type$valueOf(name) {
    switch (name) {
      case 'ENTER':
        return DropFileEvent$Type$ENTER_getInstance();
      case 'EXIT':
        return DropFileEvent$Type$EXIT_getInstance();
      case 'DROP':
        return DropFileEvent$Type$DROP_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.DropFileEvent.Type.' + name);
    }
  }
  DropFileEvent$Type.valueOf_61zpoe$ = DropFileEvent$Type$valueOf;
  DropFileEvent.prototype.copyFrom_2nqp3e$ = function (other) {
    var tmp$;
    this.type = other.type;
    this.files = (tmp$ = other.files) != null ? toList(tmp$) : null;
  };
  DropFileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropFileEvent',
    interfaces: [Event]
  };
  DropFileEvent.prototype.component1 = function () {
    return this.type;
  };
  DropFileEvent.prototype.component2 = function () {
    return this.files;
  };
  DropFileEvent.prototype.copy_efoes9$ = function (type, files) {
    return new DropFileEvent(type === void 0 ? this.type : type, files === void 0 ? this.files : files);
  };
  DropFileEvent.prototype.toString = function () {
    return 'DropFileEvent(type=' + Kotlin.toString(this.type) + (', files=' + Kotlin.toString(this.files)) + ')';
  };
  DropFileEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.files) | 0;
    return result;
  };
  DropFileEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.files, other.files)))));
  };
  function MouseEvents(ed) {
    this.ed = ed;
  }
  function MouseEvents$click$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$CLICK_getInstance())
        closure$callback();
      return Unit;
    };
  }
  var getKClass = Kotlin.getKClass;
  MouseEvents.prototype.click_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$click$lambda(callback));
  };
  function MouseEvents$up$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$UP_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.up_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$up$lambda(callback));
  };
  function MouseEvents$down$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$DOWN_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.down_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$down$lambda(callback));
  };
  function MouseEvents$move$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$MOVE_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.move_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$move$lambda(callback));
  };
  function MouseEvents$drag$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$DRAG_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.drag_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$drag$lambda(callback));
  };
  function MouseEvents$enter$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$ENTER_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.enter_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$enter$lambda(callback));
  };
  function MouseEvents$exit$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$EXIT_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.exit_o14v8n$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(MouseEvent), MouseEvents$exit$lambda(callback));
  };
  MouseEvents.prototype.close = function () {
  };
  MouseEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvents',
    interfaces: [Closeable]
  };
  function KeysEvents(ed) {
    this.ed = ed;
  }
  function KeysEvents$down$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$DOWN_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.down_3u38lt$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$down$lambda(callback));
  };
  function KeysEvents$up$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$UP_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.up_3u38lt$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$up$lambda(callback));
  };
  function KeysEvents$press$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$TYPE_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.press_3u38lt$ = function (callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$press$lambda(callback));
  };
  function KeysEvents$down$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$DOWN_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.down_sorlsz$ = function (key, callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$down$lambda_0(key, callback));
  };
  function KeysEvents$up$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$UP_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.up_sorlsz$ = function (key, callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$up$lambda_0(key, callback));
  };
  function KeysEvents$press$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$TYPE_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.press_sorlsz$ = function (key, callback) {
    return this.ed.addEventListener_xa594f$(getKClass(KeyEvent), KeysEvents$press$lambda_0(key, callback));
  };
  KeysEvents.prototype.close = function () {
  };
  KeysEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeysEvents',
    interfaces: [Closeable]
  };
  function mouse($receiver, callback) {
    var $receiver_0 = new MouseEvents($receiver);
    callback($receiver_0);
    return $receiver_0;
  }
  function keys($receiver, callback) {
    var $receiver_0 = new KeysEvents($receiver);
    callback($receiver_0);
    return $receiver_0;
  }
  function MouseButton(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseButton_initFields() {
    MouseButton_initFields = function () {
    };
    MouseButton$LEFT_instance = new MouseButton('LEFT', 0, 0);
    MouseButton$RIGHT_instance = new MouseButton('RIGHT', 1, 1);
    MouseButton$MIDDLE_instance = new MouseButton('MIDDLE', 2, 2);
    MouseButton$BUTTON3_instance = new MouseButton('BUTTON3', 3, 3);
    MouseButton$BUTTON4_instance = new MouseButton('BUTTON4', 4, 4);
    MouseButton$BUTTON5_instance = new MouseButton('BUTTON5', 5, 5);
    MouseButton$BUTTON_UNKNOWN_instance = new MouseButton('BUTTON_UNKNOWN', 6, 6);
    MouseButton$Companion_getInstance();
  }
  var MouseButton$LEFT_instance;
  function MouseButton$LEFT_getInstance() {
    MouseButton_initFields();
    return MouseButton$LEFT_instance;
  }
  var MouseButton$RIGHT_instance;
  function MouseButton$RIGHT_getInstance() {
    MouseButton_initFields();
    return MouseButton$RIGHT_instance;
  }
  var MouseButton$MIDDLE_instance;
  function MouseButton$MIDDLE_getInstance() {
    MouseButton_initFields();
    return MouseButton$MIDDLE_instance;
  }
  var MouseButton$BUTTON3_instance;
  function MouseButton$BUTTON3_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON3_instance;
  }
  var MouseButton$BUTTON4_instance;
  function MouseButton$BUTTON4_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON4_instance;
  }
  var MouseButton$BUTTON5_instance;
  function MouseButton$BUTTON5_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON5_instance;
  }
  var MouseButton$BUTTON_UNKNOWN_instance;
  function MouseButton$BUTTON_UNKNOWN_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON_UNKNOWN_instance;
  }
  function MouseButton$Companion() {
    MouseButton$Companion_instance = this;
    this.BUTTONS = MouseButton$values();
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  MouseButton$Companion.prototype.get_za3lpa$ = function (id) {
    var $receiver = this.BUTTONS;
    return id >= 0 && id <= get_lastIndex($receiver) ? $receiver[id] : MouseButton$BUTTON_UNKNOWN_getInstance();
  };
  MouseButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MouseButton$Companion_instance = null;
  function MouseButton$Companion_getInstance() {
    MouseButton_initFields();
    if (MouseButton$Companion_instance === null) {
      new MouseButton$Companion();
    }
    return MouseButton$Companion_instance;
  }
  MouseButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseButton',
    interfaces: [Enum]
  };
  function MouseButton$values() {
    return [MouseButton$LEFT_getInstance(), MouseButton$RIGHT_getInstance(), MouseButton$MIDDLE_getInstance(), MouseButton$BUTTON3_getInstance(), MouseButton$BUTTON4_getInstance(), MouseButton$BUTTON5_getInstance(), MouseButton$BUTTON_UNKNOWN_getInstance()];
  }
  MouseButton.values = MouseButton$values;
  function MouseButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return MouseButton$LEFT_getInstance();
      case 'RIGHT':
        return MouseButton$RIGHT_getInstance();
      case 'MIDDLE':
        return MouseButton$MIDDLE_getInstance();
      case 'BUTTON3':
        return MouseButton$BUTTON3_getInstance();
      case 'BUTTON4':
        return MouseButton$BUTTON4_getInstance();
      case 'BUTTON5':
        return MouseButton$BUTTON5_getInstance();
      case 'BUTTON_UNKNOWN':
        return MouseButton$BUTTON_UNKNOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.MouseButton.' + name);
    }
  }
  MouseButton.valueOf_61zpoe$ = MouseButton$valueOf;
  function Key(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Key_initFields() {
    Key_initFields = function () {
    };
    Key$SPACE_instance = new Key('SPACE', 0);
    Key$APOSTROPHE_instance = new Key('APOSTROPHE', 1);
    Key$COMMA_instance = new Key('COMMA', 2);
    Key$MINUS_instance = new Key('MINUS', 3);
    Key$PERIOD_instance = new Key('PERIOD', 4);
    Key$SLASH_instance = new Key('SLASH', 5);
    Key$N0_instance = new Key('N0', 6);
    Key$N1_instance = new Key('N1', 7);
    Key$N2_instance = new Key('N2', 8);
    Key$N3_instance = new Key('N3', 9);
    Key$N4_instance = new Key('N4', 10);
    Key$N5_instance = new Key('N5', 11);
    Key$N6_instance = new Key('N6', 12);
    Key$N7_instance = new Key('N7', 13);
    Key$N8_instance = new Key('N8', 14);
    Key$N9_instance = new Key('N9', 15);
    Key$SEMICOLON_instance = new Key('SEMICOLON', 16);
    Key$EQUAL_instance = new Key('EQUAL', 17);
    Key$A_instance = new Key('A', 18);
    Key$B_instance = new Key('B', 19);
    Key$C_instance = new Key('C', 20);
    Key$D_instance = new Key('D', 21);
    Key$E_instance = new Key('E', 22);
    Key$F_instance = new Key('F', 23);
    Key$G_instance = new Key('G', 24);
    Key$H_instance = new Key('H', 25);
    Key$I_instance = new Key('I', 26);
    Key$J_instance = new Key('J', 27);
    Key$K_instance = new Key('K', 28);
    Key$L_instance = new Key('L', 29);
    Key$M_instance = new Key('M', 30);
    Key$N_instance = new Key('N', 31);
    Key$O_instance = new Key('O', 32);
    Key$P_instance = new Key('P', 33);
    Key$Q_instance = new Key('Q', 34);
    Key$R_instance = new Key('R', 35);
    Key$S_instance = new Key('S', 36);
    Key$T_instance = new Key('T', 37);
    Key$U_instance = new Key('U', 38);
    Key$V_instance = new Key('V', 39);
    Key$W_instance = new Key('W', 40);
    Key$X_instance = new Key('X', 41);
    Key$Y_instance = new Key('Y', 42);
    Key$Z_instance = new Key('Z', 43);
    Key$LEFT_BRACKET_instance = new Key('LEFT_BRACKET', 44);
    Key$BACKSLASH_instance = new Key('BACKSLASH', 45);
    Key$RIGHT_BRACKET_instance = new Key('RIGHT_BRACKET', 46);
    Key$GRAVE_ACCENT_instance = new Key('GRAVE_ACCENT', 47);
    Key$WORLD_1_instance = new Key('WORLD_1', 48);
    Key$WORLD_2_instance = new Key('WORLD_2', 49);
    Key$ESCAPE_instance = new Key('ESCAPE', 50);
    Key$META_instance = new Key('META', 51);
    Key$ENTER_instance = new Key('ENTER', 52);
    Key$TAB_instance = new Key('TAB', 53);
    Key$BACKSPACE_instance = new Key('BACKSPACE', 54);
    Key$INSERT_instance = new Key('INSERT', 55);
    Key$DELETE_instance = new Key('DELETE', 56);
    Key$RIGHT_instance = new Key('RIGHT', 57);
    Key$LEFT_instance = new Key('LEFT', 58);
    Key$DOWN_instance = new Key('DOWN', 59);
    Key$UP_instance = new Key('UP', 60);
    Key$PAGE_UP_instance = new Key('PAGE_UP', 61);
    Key$PAGE_DOWN_instance = new Key('PAGE_DOWN', 62);
    Key$FUNCTION_instance = new Key('FUNCTION', 63);
    Key$HELP_instance = new Key('HELP', 64);
    Key$MUTE_instance = new Key('MUTE', 65);
    Key$VOLUME_DOWN_instance = new Key('VOLUME_DOWN', 66);
    Key$VOLUME_UP_instance = new Key('VOLUME_UP', 67);
    Key$HOME_instance = new Key('HOME', 68);
    Key$END_instance = new Key('END', 69);
    Key$CAPS_LOCK_instance = new Key('CAPS_LOCK', 70);
    Key$SCROLL_LOCK_instance = new Key('SCROLL_LOCK', 71);
    Key$NUM_LOCK_instance = new Key('NUM_LOCK', 72);
    Key$PRINT_SCREEN_instance = new Key('PRINT_SCREEN', 73);
    Key$PAUSE_instance = new Key('PAUSE', 74);
    Key$F1_instance = new Key('F1', 75);
    Key$F2_instance = new Key('F2', 76);
    Key$F3_instance = new Key('F3', 77);
    Key$F4_instance = new Key('F4', 78);
    Key$F5_instance = new Key('F5', 79);
    Key$F6_instance = new Key('F6', 80);
    Key$F7_instance = new Key('F7', 81);
    Key$F8_instance = new Key('F8', 82);
    Key$F9_instance = new Key('F9', 83);
    Key$F10_instance = new Key('F10', 84);
    Key$F11_instance = new Key('F11', 85);
    Key$F12_instance = new Key('F12', 86);
    Key$F13_instance = new Key('F13', 87);
    Key$F14_instance = new Key('F14', 88);
    Key$F15_instance = new Key('F15', 89);
    Key$F16_instance = new Key('F16', 90);
    Key$F17_instance = new Key('F17', 91);
    Key$F18_instance = new Key('F18', 92);
    Key$F19_instance = new Key('F19', 93);
    Key$F20_instance = new Key('F20', 94);
    Key$F21_instance = new Key('F21', 95);
    Key$F22_instance = new Key('F22', 96);
    Key$F23_instance = new Key('F23', 97);
    Key$F24_instance = new Key('F24', 98);
    Key$F25_instance = new Key('F25', 99);
    Key$KP_0_instance = new Key('KP_0', 100);
    Key$KP_1_instance = new Key('KP_1', 101);
    Key$KP_2_instance = new Key('KP_2', 102);
    Key$KP_3_instance = new Key('KP_3', 103);
    Key$KP_4_instance = new Key('KP_4', 104);
    Key$KP_5_instance = new Key('KP_5', 105);
    Key$KP_6_instance = new Key('KP_6', 106);
    Key$KP_7_instance = new Key('KP_7', 107);
    Key$KP_8_instance = new Key('KP_8', 108);
    Key$KP_9_instance = new Key('KP_9', 109);
    Key$KP_DECIMAL_instance = new Key('KP_DECIMAL', 110);
    Key$KP_DIVIDE_instance = new Key('KP_DIVIDE', 111);
    Key$KP_MULTIPLY_instance = new Key('KP_MULTIPLY', 112);
    Key$KP_SUBTRACT_instance = new Key('KP_SUBTRACT', 113);
    Key$KP_ADD_instance = new Key('KP_ADD', 114);
    Key$KP_ENTER_instance = new Key('KP_ENTER', 115);
    Key$KP_EQUAL_instance = new Key('KP_EQUAL', 116);
    Key$KP_SEPARATOR_instance = new Key('KP_SEPARATOR', 117);
    Key$LEFT_SHIFT_instance = new Key('LEFT_SHIFT', 118);
    Key$LEFT_CONTROL_instance = new Key('LEFT_CONTROL', 119);
    Key$LEFT_ALT_instance = new Key('LEFT_ALT', 120);
    Key$LEFT_SUPER_instance = new Key('LEFT_SUPER', 121);
    Key$RIGHT_SHIFT_instance = new Key('RIGHT_SHIFT', 122);
    Key$RIGHT_CONTROL_instance = new Key('RIGHT_CONTROL', 123);
    Key$RIGHT_ALT_instance = new Key('RIGHT_ALT', 124);
    Key$RIGHT_SUPER_instance = new Key('RIGHT_SUPER', 125);
    Key$MENU_instance = new Key('MENU', 126);
    Key$BACKQUOTE_instance = new Key('BACKQUOTE', 127);
    Key$QUOTE_instance = new Key('QUOTE', 128);
    Key$KP_UP_instance = new Key('KP_UP', 129);
    Key$KP_DOWN_instance = new Key('KP_DOWN', 130);
    Key$KP_LEFT_instance = new Key('KP_LEFT', 131);
    Key$KP_RIGHT_instance = new Key('KP_RIGHT', 132);
    Key$UNDERLINE_instance = new Key('UNDERLINE', 133);
    Key$SELECT_KEY_instance = new Key('SELECT_KEY', 134);
    Key$CANCEL_instance = new Key('CANCEL', 135);
    Key$CLEAR_instance = new Key('CLEAR', 136);
    Key$OPEN_BRACKET_instance = new Key('OPEN_BRACKET', 137);
    Key$CLOSE_BRACKET_instance = new Key('CLOSE_BRACKET', 138);
    Key$UNDEFINED_instance = new Key('UNDEFINED', 139);
    Key$UNKNOWN_instance = new Key('UNKNOWN', 140);
    Key$Companion_getInstance();
  }
  var Key$SPACE_instance;
  function Key$SPACE_getInstance() {
    Key_initFields();
    return Key$SPACE_instance;
  }
  var Key$APOSTROPHE_instance;
  function Key$APOSTROPHE_getInstance() {
    Key_initFields();
    return Key$APOSTROPHE_instance;
  }
  var Key$COMMA_instance;
  function Key$COMMA_getInstance() {
    Key_initFields();
    return Key$COMMA_instance;
  }
  var Key$MINUS_instance;
  function Key$MINUS_getInstance() {
    Key_initFields();
    return Key$MINUS_instance;
  }
  var Key$PERIOD_instance;
  function Key$PERIOD_getInstance() {
    Key_initFields();
    return Key$PERIOD_instance;
  }
  var Key$SLASH_instance;
  function Key$SLASH_getInstance() {
    Key_initFields();
    return Key$SLASH_instance;
  }
  var Key$N0_instance;
  function Key$N0_getInstance() {
    Key_initFields();
    return Key$N0_instance;
  }
  var Key$N1_instance;
  function Key$N1_getInstance() {
    Key_initFields();
    return Key$N1_instance;
  }
  var Key$N2_instance;
  function Key$N2_getInstance() {
    Key_initFields();
    return Key$N2_instance;
  }
  var Key$N3_instance;
  function Key$N3_getInstance() {
    Key_initFields();
    return Key$N3_instance;
  }
  var Key$N4_instance;
  function Key$N4_getInstance() {
    Key_initFields();
    return Key$N4_instance;
  }
  var Key$N5_instance;
  function Key$N5_getInstance() {
    Key_initFields();
    return Key$N5_instance;
  }
  var Key$N6_instance;
  function Key$N6_getInstance() {
    Key_initFields();
    return Key$N6_instance;
  }
  var Key$N7_instance;
  function Key$N7_getInstance() {
    Key_initFields();
    return Key$N7_instance;
  }
  var Key$N8_instance;
  function Key$N8_getInstance() {
    Key_initFields();
    return Key$N8_instance;
  }
  var Key$N9_instance;
  function Key$N9_getInstance() {
    Key_initFields();
    return Key$N9_instance;
  }
  var Key$SEMICOLON_instance;
  function Key$SEMICOLON_getInstance() {
    Key_initFields();
    return Key$SEMICOLON_instance;
  }
  var Key$EQUAL_instance;
  function Key$EQUAL_getInstance() {
    Key_initFields();
    return Key$EQUAL_instance;
  }
  var Key$A_instance;
  function Key$A_getInstance() {
    Key_initFields();
    return Key$A_instance;
  }
  var Key$B_instance;
  function Key$B_getInstance() {
    Key_initFields();
    return Key$B_instance;
  }
  var Key$C_instance;
  function Key$C_getInstance() {
    Key_initFields();
    return Key$C_instance;
  }
  var Key$D_instance;
  function Key$D_getInstance() {
    Key_initFields();
    return Key$D_instance;
  }
  var Key$E_instance;
  function Key$E_getInstance() {
    Key_initFields();
    return Key$E_instance;
  }
  var Key$F_instance;
  function Key$F_getInstance() {
    Key_initFields();
    return Key$F_instance;
  }
  var Key$G_instance;
  function Key$G_getInstance() {
    Key_initFields();
    return Key$G_instance;
  }
  var Key$H_instance;
  function Key$H_getInstance() {
    Key_initFields();
    return Key$H_instance;
  }
  var Key$I_instance;
  function Key$I_getInstance() {
    Key_initFields();
    return Key$I_instance;
  }
  var Key$J_instance;
  function Key$J_getInstance() {
    Key_initFields();
    return Key$J_instance;
  }
  var Key$K_instance;
  function Key$K_getInstance() {
    Key_initFields();
    return Key$K_instance;
  }
  var Key$L_instance;
  function Key$L_getInstance() {
    Key_initFields();
    return Key$L_instance;
  }
  var Key$M_instance;
  function Key$M_getInstance() {
    Key_initFields();
    return Key$M_instance;
  }
  var Key$N_instance;
  function Key$N_getInstance() {
    Key_initFields();
    return Key$N_instance;
  }
  var Key$O_instance;
  function Key$O_getInstance() {
    Key_initFields();
    return Key$O_instance;
  }
  var Key$P_instance;
  function Key$P_getInstance() {
    Key_initFields();
    return Key$P_instance;
  }
  var Key$Q_instance;
  function Key$Q_getInstance() {
    Key_initFields();
    return Key$Q_instance;
  }
  var Key$R_instance;
  function Key$R_getInstance() {
    Key_initFields();
    return Key$R_instance;
  }
  var Key$S_instance;
  function Key$S_getInstance() {
    Key_initFields();
    return Key$S_instance;
  }
  var Key$T_instance;
  function Key$T_getInstance() {
    Key_initFields();
    return Key$T_instance;
  }
  var Key$U_instance;
  function Key$U_getInstance() {
    Key_initFields();
    return Key$U_instance;
  }
  var Key$V_instance;
  function Key$V_getInstance() {
    Key_initFields();
    return Key$V_instance;
  }
  var Key$W_instance;
  function Key$W_getInstance() {
    Key_initFields();
    return Key$W_instance;
  }
  var Key$X_instance;
  function Key$X_getInstance() {
    Key_initFields();
    return Key$X_instance;
  }
  var Key$Y_instance;
  function Key$Y_getInstance() {
    Key_initFields();
    return Key$Y_instance;
  }
  var Key$Z_instance;
  function Key$Z_getInstance() {
    Key_initFields();
    return Key$Z_instance;
  }
  var Key$LEFT_BRACKET_instance;
  function Key$LEFT_BRACKET_getInstance() {
    Key_initFields();
    return Key$LEFT_BRACKET_instance;
  }
  var Key$BACKSLASH_instance;
  function Key$BACKSLASH_getInstance() {
    Key_initFields();
    return Key$BACKSLASH_instance;
  }
  var Key$RIGHT_BRACKET_instance;
  function Key$RIGHT_BRACKET_getInstance() {
    Key_initFields();
    return Key$RIGHT_BRACKET_instance;
  }
  var Key$GRAVE_ACCENT_instance;
  function Key$GRAVE_ACCENT_getInstance() {
    Key_initFields();
    return Key$GRAVE_ACCENT_instance;
  }
  var Key$WORLD_1_instance;
  function Key$WORLD_1_getInstance() {
    Key_initFields();
    return Key$WORLD_1_instance;
  }
  var Key$WORLD_2_instance;
  function Key$WORLD_2_getInstance() {
    Key_initFields();
    return Key$WORLD_2_instance;
  }
  var Key$ESCAPE_instance;
  function Key$ESCAPE_getInstance() {
    Key_initFields();
    return Key$ESCAPE_instance;
  }
  var Key$META_instance;
  function Key$META_getInstance() {
    Key_initFields();
    return Key$META_instance;
  }
  var Key$ENTER_instance;
  function Key$ENTER_getInstance() {
    Key_initFields();
    return Key$ENTER_instance;
  }
  var Key$TAB_instance;
  function Key$TAB_getInstance() {
    Key_initFields();
    return Key$TAB_instance;
  }
  var Key$BACKSPACE_instance;
  function Key$BACKSPACE_getInstance() {
    Key_initFields();
    return Key$BACKSPACE_instance;
  }
  var Key$INSERT_instance;
  function Key$INSERT_getInstance() {
    Key_initFields();
    return Key$INSERT_instance;
  }
  var Key$DELETE_instance;
  function Key$DELETE_getInstance() {
    Key_initFields();
    return Key$DELETE_instance;
  }
  var Key$RIGHT_instance;
  function Key$RIGHT_getInstance() {
    Key_initFields();
    return Key$RIGHT_instance;
  }
  var Key$LEFT_instance;
  function Key$LEFT_getInstance() {
    Key_initFields();
    return Key$LEFT_instance;
  }
  var Key$DOWN_instance;
  function Key$DOWN_getInstance() {
    Key_initFields();
    return Key$DOWN_instance;
  }
  var Key$UP_instance;
  function Key$UP_getInstance() {
    Key_initFields();
    return Key$UP_instance;
  }
  var Key$PAGE_UP_instance;
  function Key$PAGE_UP_getInstance() {
    Key_initFields();
    return Key$PAGE_UP_instance;
  }
  var Key$PAGE_DOWN_instance;
  function Key$PAGE_DOWN_getInstance() {
    Key_initFields();
    return Key$PAGE_DOWN_instance;
  }
  var Key$FUNCTION_instance;
  function Key$FUNCTION_getInstance() {
    Key_initFields();
    return Key$FUNCTION_instance;
  }
  var Key$HELP_instance;
  function Key$HELP_getInstance() {
    Key_initFields();
    return Key$HELP_instance;
  }
  var Key$MUTE_instance;
  function Key$MUTE_getInstance() {
    Key_initFields();
    return Key$MUTE_instance;
  }
  var Key$VOLUME_DOWN_instance;
  function Key$VOLUME_DOWN_getInstance() {
    Key_initFields();
    return Key$VOLUME_DOWN_instance;
  }
  var Key$VOLUME_UP_instance;
  function Key$VOLUME_UP_getInstance() {
    Key_initFields();
    return Key$VOLUME_UP_instance;
  }
  var Key$HOME_instance;
  function Key$HOME_getInstance() {
    Key_initFields();
    return Key$HOME_instance;
  }
  var Key$END_instance;
  function Key$END_getInstance() {
    Key_initFields();
    return Key$END_instance;
  }
  var Key$CAPS_LOCK_instance;
  function Key$CAPS_LOCK_getInstance() {
    Key_initFields();
    return Key$CAPS_LOCK_instance;
  }
  var Key$SCROLL_LOCK_instance;
  function Key$SCROLL_LOCK_getInstance() {
    Key_initFields();
    return Key$SCROLL_LOCK_instance;
  }
  var Key$NUM_LOCK_instance;
  function Key$NUM_LOCK_getInstance() {
    Key_initFields();
    return Key$NUM_LOCK_instance;
  }
  var Key$PRINT_SCREEN_instance;
  function Key$PRINT_SCREEN_getInstance() {
    Key_initFields();
    return Key$PRINT_SCREEN_instance;
  }
  var Key$PAUSE_instance;
  function Key$PAUSE_getInstance() {
    Key_initFields();
    return Key$PAUSE_instance;
  }
  var Key$F1_instance;
  function Key$F1_getInstance() {
    Key_initFields();
    return Key$F1_instance;
  }
  var Key$F2_instance;
  function Key$F2_getInstance() {
    Key_initFields();
    return Key$F2_instance;
  }
  var Key$F3_instance;
  function Key$F3_getInstance() {
    Key_initFields();
    return Key$F3_instance;
  }
  var Key$F4_instance;
  function Key$F4_getInstance() {
    Key_initFields();
    return Key$F4_instance;
  }
  var Key$F5_instance;
  function Key$F5_getInstance() {
    Key_initFields();
    return Key$F5_instance;
  }
  var Key$F6_instance;
  function Key$F6_getInstance() {
    Key_initFields();
    return Key$F6_instance;
  }
  var Key$F7_instance;
  function Key$F7_getInstance() {
    Key_initFields();
    return Key$F7_instance;
  }
  var Key$F8_instance;
  function Key$F8_getInstance() {
    Key_initFields();
    return Key$F8_instance;
  }
  var Key$F9_instance;
  function Key$F9_getInstance() {
    Key_initFields();
    return Key$F9_instance;
  }
  var Key$F10_instance;
  function Key$F10_getInstance() {
    Key_initFields();
    return Key$F10_instance;
  }
  var Key$F11_instance;
  function Key$F11_getInstance() {
    Key_initFields();
    return Key$F11_instance;
  }
  var Key$F12_instance;
  function Key$F12_getInstance() {
    Key_initFields();
    return Key$F12_instance;
  }
  var Key$F13_instance;
  function Key$F13_getInstance() {
    Key_initFields();
    return Key$F13_instance;
  }
  var Key$F14_instance;
  function Key$F14_getInstance() {
    Key_initFields();
    return Key$F14_instance;
  }
  var Key$F15_instance;
  function Key$F15_getInstance() {
    Key_initFields();
    return Key$F15_instance;
  }
  var Key$F16_instance;
  function Key$F16_getInstance() {
    Key_initFields();
    return Key$F16_instance;
  }
  var Key$F17_instance;
  function Key$F17_getInstance() {
    Key_initFields();
    return Key$F17_instance;
  }
  var Key$F18_instance;
  function Key$F18_getInstance() {
    Key_initFields();
    return Key$F18_instance;
  }
  var Key$F19_instance;
  function Key$F19_getInstance() {
    Key_initFields();
    return Key$F19_instance;
  }
  var Key$F20_instance;
  function Key$F20_getInstance() {
    Key_initFields();
    return Key$F20_instance;
  }
  var Key$F21_instance;
  function Key$F21_getInstance() {
    Key_initFields();
    return Key$F21_instance;
  }
  var Key$F22_instance;
  function Key$F22_getInstance() {
    Key_initFields();
    return Key$F22_instance;
  }
  var Key$F23_instance;
  function Key$F23_getInstance() {
    Key_initFields();
    return Key$F23_instance;
  }
  var Key$F24_instance;
  function Key$F24_getInstance() {
    Key_initFields();
    return Key$F24_instance;
  }
  var Key$F25_instance;
  function Key$F25_getInstance() {
    Key_initFields();
    return Key$F25_instance;
  }
  var Key$KP_0_instance;
  function Key$KP_0_getInstance() {
    Key_initFields();
    return Key$KP_0_instance;
  }
  var Key$KP_1_instance;
  function Key$KP_1_getInstance() {
    Key_initFields();
    return Key$KP_1_instance;
  }
  var Key$KP_2_instance;
  function Key$KP_2_getInstance() {
    Key_initFields();
    return Key$KP_2_instance;
  }
  var Key$KP_3_instance;
  function Key$KP_3_getInstance() {
    Key_initFields();
    return Key$KP_3_instance;
  }
  var Key$KP_4_instance;
  function Key$KP_4_getInstance() {
    Key_initFields();
    return Key$KP_4_instance;
  }
  var Key$KP_5_instance;
  function Key$KP_5_getInstance() {
    Key_initFields();
    return Key$KP_5_instance;
  }
  var Key$KP_6_instance;
  function Key$KP_6_getInstance() {
    Key_initFields();
    return Key$KP_6_instance;
  }
  var Key$KP_7_instance;
  function Key$KP_7_getInstance() {
    Key_initFields();
    return Key$KP_7_instance;
  }
  var Key$KP_8_instance;
  function Key$KP_8_getInstance() {
    Key_initFields();
    return Key$KP_8_instance;
  }
  var Key$KP_9_instance;
  function Key$KP_9_getInstance() {
    Key_initFields();
    return Key$KP_9_instance;
  }
  var Key$KP_DECIMAL_instance;
  function Key$KP_DECIMAL_getInstance() {
    Key_initFields();
    return Key$KP_DECIMAL_instance;
  }
  var Key$KP_DIVIDE_instance;
  function Key$KP_DIVIDE_getInstance() {
    Key_initFields();
    return Key$KP_DIVIDE_instance;
  }
  var Key$KP_MULTIPLY_instance;
  function Key$KP_MULTIPLY_getInstance() {
    Key_initFields();
    return Key$KP_MULTIPLY_instance;
  }
  var Key$KP_SUBTRACT_instance;
  function Key$KP_SUBTRACT_getInstance() {
    Key_initFields();
    return Key$KP_SUBTRACT_instance;
  }
  var Key$KP_ADD_instance;
  function Key$KP_ADD_getInstance() {
    Key_initFields();
    return Key$KP_ADD_instance;
  }
  var Key$KP_ENTER_instance;
  function Key$KP_ENTER_getInstance() {
    Key_initFields();
    return Key$KP_ENTER_instance;
  }
  var Key$KP_EQUAL_instance;
  function Key$KP_EQUAL_getInstance() {
    Key_initFields();
    return Key$KP_EQUAL_instance;
  }
  var Key$KP_SEPARATOR_instance;
  function Key$KP_SEPARATOR_getInstance() {
    Key_initFields();
    return Key$KP_SEPARATOR_instance;
  }
  var Key$LEFT_SHIFT_instance;
  function Key$LEFT_SHIFT_getInstance() {
    Key_initFields();
    return Key$LEFT_SHIFT_instance;
  }
  var Key$LEFT_CONTROL_instance;
  function Key$LEFT_CONTROL_getInstance() {
    Key_initFields();
    return Key$LEFT_CONTROL_instance;
  }
  var Key$LEFT_ALT_instance;
  function Key$LEFT_ALT_getInstance() {
    Key_initFields();
    return Key$LEFT_ALT_instance;
  }
  var Key$LEFT_SUPER_instance;
  function Key$LEFT_SUPER_getInstance() {
    Key_initFields();
    return Key$LEFT_SUPER_instance;
  }
  var Key$RIGHT_SHIFT_instance;
  function Key$RIGHT_SHIFT_getInstance() {
    Key_initFields();
    return Key$RIGHT_SHIFT_instance;
  }
  var Key$RIGHT_CONTROL_instance;
  function Key$RIGHT_CONTROL_getInstance() {
    Key_initFields();
    return Key$RIGHT_CONTROL_instance;
  }
  var Key$RIGHT_ALT_instance;
  function Key$RIGHT_ALT_getInstance() {
    Key_initFields();
    return Key$RIGHT_ALT_instance;
  }
  var Key$RIGHT_SUPER_instance;
  function Key$RIGHT_SUPER_getInstance() {
    Key_initFields();
    return Key$RIGHT_SUPER_instance;
  }
  var Key$MENU_instance;
  function Key$MENU_getInstance() {
    Key_initFields();
    return Key$MENU_instance;
  }
  var Key$BACKQUOTE_instance;
  function Key$BACKQUOTE_getInstance() {
    Key_initFields();
    return Key$BACKQUOTE_instance;
  }
  var Key$QUOTE_instance;
  function Key$QUOTE_getInstance() {
    Key_initFields();
    return Key$QUOTE_instance;
  }
  var Key$KP_UP_instance;
  function Key$KP_UP_getInstance() {
    Key_initFields();
    return Key$KP_UP_instance;
  }
  var Key$KP_DOWN_instance;
  function Key$KP_DOWN_getInstance() {
    Key_initFields();
    return Key$KP_DOWN_instance;
  }
  var Key$KP_LEFT_instance;
  function Key$KP_LEFT_getInstance() {
    Key_initFields();
    return Key$KP_LEFT_instance;
  }
  var Key$KP_RIGHT_instance;
  function Key$KP_RIGHT_getInstance() {
    Key_initFields();
    return Key$KP_RIGHT_instance;
  }
  var Key$UNDERLINE_instance;
  function Key$UNDERLINE_getInstance() {
    Key_initFields();
    return Key$UNDERLINE_instance;
  }
  var Key$SELECT_KEY_instance;
  function Key$SELECT_KEY_getInstance() {
    Key_initFields();
    return Key$SELECT_KEY_instance;
  }
  var Key$CANCEL_instance;
  function Key$CANCEL_getInstance() {
    Key_initFields();
    return Key$CANCEL_instance;
  }
  var Key$CLEAR_instance;
  function Key$CLEAR_getInstance() {
    Key_initFields();
    return Key$CLEAR_instance;
  }
  var Key$OPEN_BRACKET_instance;
  function Key$OPEN_BRACKET_getInstance() {
    Key_initFields();
    return Key$OPEN_BRACKET_instance;
  }
  var Key$CLOSE_BRACKET_instance;
  function Key$CLOSE_BRACKET_getInstance() {
    Key_initFields();
    return Key$CLOSE_BRACKET_instance;
  }
  var Key$UNDEFINED_instance;
  function Key$UNDEFINED_getInstance() {
    Key_initFields();
    return Key$UNDEFINED_instance;
  }
  var Key$UNKNOWN_instance;
  function Key$UNKNOWN_getInstance() {
    Key_initFields();
    return Key$UNKNOWN_instance;
  }
  function Key$Companion() {
    Key$Companion_instance = this;
    this.MAX = Key$UNKNOWN_getInstance().ordinal + 1 | 0;
    this.NUMPAD0 = Key$N0_getInstance();
    this.NUMPAD1 = Key$N1_getInstance();
    this.NUMPAD2 = Key$N2_getInstance();
    this.NUMPAD3 = Key$N3_getInstance();
    this.NUMPAD4 = Key$N4_getInstance();
    this.NUMPAD5 = Key$N5_getInstance();
    this.NUMPAD6 = Key$N6_getInstance();
    this.NUMPAD7 = Key$N7_getInstance();
    this.NUMPAD8 = Key$N8_getInstance();
    this.NUMPAD9 = Key$N9_getInstance();
  }
  Key$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Key$Companion_instance = null;
  function Key$Companion_getInstance() {
    Key_initFields();
    if (Key$Companion_instance === null) {
      new Key$Companion();
    }
    return Key$Companion_instance;
  }
  Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function Key$values() {
    return [Key$SPACE_getInstance(), Key$APOSTROPHE_getInstance(), Key$COMMA_getInstance(), Key$MINUS_getInstance(), Key$PERIOD_getInstance(), Key$SLASH_getInstance(), Key$N0_getInstance(), Key$N1_getInstance(), Key$N2_getInstance(), Key$N3_getInstance(), Key$N4_getInstance(), Key$N5_getInstance(), Key$N6_getInstance(), Key$N7_getInstance(), Key$N8_getInstance(), Key$N9_getInstance(), Key$SEMICOLON_getInstance(), Key$EQUAL_getInstance(), Key$A_getInstance(), Key$B_getInstance(), Key$C_getInstance(), Key$D_getInstance(), Key$E_getInstance(), Key$F_getInstance(), Key$G_getInstance(), Key$H_getInstance(), Key$I_getInstance(), Key$J_getInstance(), Key$K_getInstance(), Key$L_getInstance(), Key$M_getInstance(), Key$N_getInstance(), Key$O_getInstance(), Key$P_getInstance(), Key$Q_getInstance(), Key$R_getInstance(), Key$S_getInstance(), Key$T_getInstance(), Key$U_getInstance(), Key$V_getInstance(), Key$W_getInstance(), Key$X_getInstance(), Key$Y_getInstance(), Key$Z_getInstance(), Key$LEFT_BRACKET_getInstance(), Key$BACKSLASH_getInstance(), Key$RIGHT_BRACKET_getInstance(), Key$GRAVE_ACCENT_getInstance(), Key$WORLD_1_getInstance(), Key$WORLD_2_getInstance(), Key$ESCAPE_getInstance(), Key$META_getInstance(), Key$ENTER_getInstance(), Key$TAB_getInstance(), Key$BACKSPACE_getInstance(), Key$INSERT_getInstance(), Key$DELETE_getInstance(), Key$RIGHT_getInstance(), Key$LEFT_getInstance(), Key$DOWN_getInstance(), Key$UP_getInstance(), Key$PAGE_UP_getInstance(), Key$PAGE_DOWN_getInstance(), Key$FUNCTION_getInstance(), Key$HELP_getInstance(), Key$MUTE_getInstance(), Key$VOLUME_DOWN_getInstance(), Key$VOLUME_UP_getInstance(), Key$HOME_getInstance(), Key$END_getInstance(), Key$CAPS_LOCK_getInstance(), Key$SCROLL_LOCK_getInstance(), Key$NUM_LOCK_getInstance(), Key$PRINT_SCREEN_getInstance(), Key$PAUSE_getInstance(), Key$F1_getInstance(), Key$F2_getInstance(), Key$F3_getInstance(), Key$F4_getInstance(), Key$F5_getInstance(), Key$F6_getInstance(), Key$F7_getInstance(), Key$F8_getInstance(), Key$F9_getInstance(), Key$F10_getInstance(), Key$F11_getInstance(), Key$F12_getInstance(), Key$F13_getInstance(), Key$F14_getInstance(), Key$F15_getInstance(), Key$F16_getInstance(), Key$F17_getInstance(), Key$F18_getInstance(), Key$F19_getInstance(), Key$F20_getInstance(), Key$F21_getInstance(), Key$F22_getInstance(), Key$F23_getInstance(), Key$F24_getInstance(), Key$F25_getInstance(), Key$KP_0_getInstance(), Key$KP_1_getInstance(), Key$KP_2_getInstance(), Key$KP_3_getInstance(), Key$KP_4_getInstance(), Key$KP_5_getInstance(), Key$KP_6_getInstance(), Key$KP_7_getInstance(), Key$KP_8_getInstance(), Key$KP_9_getInstance(), Key$KP_DECIMAL_getInstance(), Key$KP_DIVIDE_getInstance(), Key$KP_MULTIPLY_getInstance(), Key$KP_SUBTRACT_getInstance(), Key$KP_ADD_getInstance(), Key$KP_ENTER_getInstance(), Key$KP_EQUAL_getInstance(), Key$KP_SEPARATOR_getInstance(), Key$LEFT_SHIFT_getInstance(), Key$LEFT_CONTROL_getInstance(), Key$LEFT_ALT_getInstance(), Key$LEFT_SUPER_getInstance(), Key$RIGHT_SHIFT_getInstance(), Key$RIGHT_CONTROL_getInstance(), Key$RIGHT_ALT_getInstance(), Key$RIGHT_SUPER_getInstance(), Key$MENU_getInstance(), Key$BACKQUOTE_getInstance(), Key$QUOTE_getInstance(), Key$KP_UP_getInstance(), Key$KP_DOWN_getInstance(), Key$KP_LEFT_getInstance(), Key$KP_RIGHT_getInstance(), Key$UNDERLINE_getInstance(), Key$SELECT_KEY_getInstance(), Key$CANCEL_getInstance(), Key$CLEAR_getInstance(), Key$OPEN_BRACKET_getInstance(), Key$CLOSE_BRACKET_getInstance(), Key$UNDEFINED_getInstance(), Key$UNKNOWN_getInstance()];
  }
  Key.values = Key$values;
  function Key$valueOf(name) {
    switch (name) {
      case 'SPACE':
        return Key$SPACE_getInstance();
      case 'APOSTROPHE':
        return Key$APOSTROPHE_getInstance();
      case 'COMMA':
        return Key$COMMA_getInstance();
      case 'MINUS':
        return Key$MINUS_getInstance();
      case 'PERIOD':
        return Key$PERIOD_getInstance();
      case 'SLASH':
        return Key$SLASH_getInstance();
      case 'N0':
        return Key$N0_getInstance();
      case 'N1':
        return Key$N1_getInstance();
      case 'N2':
        return Key$N2_getInstance();
      case 'N3':
        return Key$N3_getInstance();
      case 'N4':
        return Key$N4_getInstance();
      case 'N5':
        return Key$N5_getInstance();
      case 'N6':
        return Key$N6_getInstance();
      case 'N7':
        return Key$N7_getInstance();
      case 'N8':
        return Key$N8_getInstance();
      case 'N9':
        return Key$N9_getInstance();
      case 'SEMICOLON':
        return Key$SEMICOLON_getInstance();
      case 'EQUAL':
        return Key$EQUAL_getInstance();
      case 'A':
        return Key$A_getInstance();
      case 'B':
        return Key$B_getInstance();
      case 'C':
        return Key$C_getInstance();
      case 'D':
        return Key$D_getInstance();
      case 'E':
        return Key$E_getInstance();
      case 'F':
        return Key$F_getInstance();
      case 'G':
        return Key$G_getInstance();
      case 'H':
        return Key$H_getInstance();
      case 'I':
        return Key$I_getInstance();
      case 'J':
        return Key$J_getInstance();
      case 'K':
        return Key$K_getInstance();
      case 'L':
        return Key$L_getInstance();
      case 'M':
        return Key$M_getInstance();
      case 'N':
        return Key$N_getInstance();
      case 'O':
        return Key$O_getInstance();
      case 'P':
        return Key$P_getInstance();
      case 'Q':
        return Key$Q_getInstance();
      case 'R':
        return Key$R_getInstance();
      case 'S':
        return Key$S_getInstance();
      case 'T':
        return Key$T_getInstance();
      case 'U':
        return Key$U_getInstance();
      case 'V':
        return Key$V_getInstance();
      case 'W':
        return Key$W_getInstance();
      case 'X':
        return Key$X_getInstance();
      case 'Y':
        return Key$Y_getInstance();
      case 'Z':
        return Key$Z_getInstance();
      case 'LEFT_BRACKET':
        return Key$LEFT_BRACKET_getInstance();
      case 'BACKSLASH':
        return Key$BACKSLASH_getInstance();
      case 'RIGHT_BRACKET':
        return Key$RIGHT_BRACKET_getInstance();
      case 'GRAVE_ACCENT':
        return Key$GRAVE_ACCENT_getInstance();
      case 'WORLD_1':
        return Key$WORLD_1_getInstance();
      case 'WORLD_2':
        return Key$WORLD_2_getInstance();
      case 'ESCAPE':
        return Key$ESCAPE_getInstance();
      case 'META':
        return Key$META_getInstance();
      case 'ENTER':
        return Key$ENTER_getInstance();
      case 'TAB':
        return Key$TAB_getInstance();
      case 'BACKSPACE':
        return Key$BACKSPACE_getInstance();
      case 'INSERT':
        return Key$INSERT_getInstance();
      case 'DELETE':
        return Key$DELETE_getInstance();
      case 'RIGHT':
        return Key$RIGHT_getInstance();
      case 'LEFT':
        return Key$LEFT_getInstance();
      case 'DOWN':
        return Key$DOWN_getInstance();
      case 'UP':
        return Key$UP_getInstance();
      case 'PAGE_UP':
        return Key$PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return Key$PAGE_DOWN_getInstance();
      case 'FUNCTION':
        return Key$FUNCTION_getInstance();
      case 'HELP':
        return Key$HELP_getInstance();
      case 'MUTE':
        return Key$MUTE_getInstance();
      case 'VOLUME_DOWN':
        return Key$VOLUME_DOWN_getInstance();
      case 'VOLUME_UP':
        return Key$VOLUME_UP_getInstance();
      case 'HOME':
        return Key$HOME_getInstance();
      case 'END':
        return Key$END_getInstance();
      case 'CAPS_LOCK':
        return Key$CAPS_LOCK_getInstance();
      case 'SCROLL_LOCK':
        return Key$SCROLL_LOCK_getInstance();
      case 'NUM_LOCK':
        return Key$NUM_LOCK_getInstance();
      case 'PRINT_SCREEN':
        return Key$PRINT_SCREEN_getInstance();
      case 'PAUSE':
        return Key$PAUSE_getInstance();
      case 'F1':
        return Key$F1_getInstance();
      case 'F2':
        return Key$F2_getInstance();
      case 'F3':
        return Key$F3_getInstance();
      case 'F4':
        return Key$F4_getInstance();
      case 'F5':
        return Key$F5_getInstance();
      case 'F6':
        return Key$F6_getInstance();
      case 'F7':
        return Key$F7_getInstance();
      case 'F8':
        return Key$F8_getInstance();
      case 'F9':
        return Key$F9_getInstance();
      case 'F10':
        return Key$F10_getInstance();
      case 'F11':
        return Key$F11_getInstance();
      case 'F12':
        return Key$F12_getInstance();
      case 'F13':
        return Key$F13_getInstance();
      case 'F14':
        return Key$F14_getInstance();
      case 'F15':
        return Key$F15_getInstance();
      case 'F16':
        return Key$F16_getInstance();
      case 'F17':
        return Key$F17_getInstance();
      case 'F18':
        return Key$F18_getInstance();
      case 'F19':
        return Key$F19_getInstance();
      case 'F20':
        return Key$F20_getInstance();
      case 'F21':
        return Key$F21_getInstance();
      case 'F22':
        return Key$F22_getInstance();
      case 'F23':
        return Key$F23_getInstance();
      case 'F24':
        return Key$F24_getInstance();
      case 'F25':
        return Key$F25_getInstance();
      case 'KP_0':
        return Key$KP_0_getInstance();
      case 'KP_1':
        return Key$KP_1_getInstance();
      case 'KP_2':
        return Key$KP_2_getInstance();
      case 'KP_3':
        return Key$KP_3_getInstance();
      case 'KP_4':
        return Key$KP_4_getInstance();
      case 'KP_5':
        return Key$KP_5_getInstance();
      case 'KP_6':
        return Key$KP_6_getInstance();
      case 'KP_7':
        return Key$KP_7_getInstance();
      case 'KP_8':
        return Key$KP_8_getInstance();
      case 'KP_9':
        return Key$KP_9_getInstance();
      case 'KP_DECIMAL':
        return Key$KP_DECIMAL_getInstance();
      case 'KP_DIVIDE':
        return Key$KP_DIVIDE_getInstance();
      case 'KP_MULTIPLY':
        return Key$KP_MULTIPLY_getInstance();
      case 'KP_SUBTRACT':
        return Key$KP_SUBTRACT_getInstance();
      case 'KP_ADD':
        return Key$KP_ADD_getInstance();
      case 'KP_ENTER':
        return Key$KP_ENTER_getInstance();
      case 'KP_EQUAL':
        return Key$KP_EQUAL_getInstance();
      case 'KP_SEPARATOR':
        return Key$KP_SEPARATOR_getInstance();
      case 'LEFT_SHIFT':
        return Key$LEFT_SHIFT_getInstance();
      case 'LEFT_CONTROL':
        return Key$LEFT_CONTROL_getInstance();
      case 'LEFT_ALT':
        return Key$LEFT_ALT_getInstance();
      case 'LEFT_SUPER':
        return Key$LEFT_SUPER_getInstance();
      case 'RIGHT_SHIFT':
        return Key$RIGHT_SHIFT_getInstance();
      case 'RIGHT_CONTROL':
        return Key$RIGHT_CONTROL_getInstance();
      case 'RIGHT_ALT':
        return Key$RIGHT_ALT_getInstance();
      case 'RIGHT_SUPER':
        return Key$RIGHT_SUPER_getInstance();
      case 'MENU':
        return Key$MENU_getInstance();
      case 'BACKQUOTE':
        return Key$BACKQUOTE_getInstance();
      case 'QUOTE':
        return Key$QUOTE_getInstance();
      case 'KP_UP':
        return Key$KP_UP_getInstance();
      case 'KP_DOWN':
        return Key$KP_DOWN_getInstance();
      case 'KP_LEFT':
        return Key$KP_LEFT_getInstance();
      case 'KP_RIGHT':
        return Key$KP_RIGHT_getInstance();
      case 'UNDERLINE':
        return Key$UNDERLINE_getInstance();
      case 'SELECT_KEY':
        return Key$SELECT_KEY_getInstance();
      case 'CANCEL':
        return Key$CANCEL_getInstance();
      case 'CLEAR':
        return Key$CLEAR_getInstance();
      case 'OPEN_BRACKET':
        return Key$OPEN_BRACKET_getInstance();
      case 'CLOSE_BRACKET':
        return Key$CLOSE_BRACKET_getInstance();
      case 'UNDEFINED':
        return Key$UNDEFINED_getInstance();
      case 'UNKNOWN':
        return Key$UNKNOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.Key.' + name);
    }
  }
  Key.valueOf_61zpoe$ = Key$valueOf;
  function GameStick(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameStick_initFields() {
    GameStick_initFields = function () {
    };
    GameStick$LEFT_instance = new GameStick('LEFT', 0, 0);
    GameStick$RIGHT_instance = new GameStick('RIGHT', 1, 1);
    GameStick$Companion_getInstance();
  }
  var GameStick$LEFT_instance;
  function GameStick$LEFT_getInstance() {
    GameStick_initFields();
    return GameStick$LEFT_instance;
  }
  var GameStick$RIGHT_instance;
  function GameStick$RIGHT_getInstance() {
    GameStick_initFields();
    return GameStick$RIGHT_instance;
  }
  function GameStick$Companion() {
    GameStick$Companion_instance = this;
    this.STICKS = GameStick$values();
  }
  GameStick$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameStick$Companion_instance = null;
  function GameStick$Companion_getInstance() {
    GameStick_initFields();
    if (GameStick$Companion_instance === null) {
      new GameStick$Companion();
    }
    return GameStick$Companion_instance;
  }
  GameStick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameStick',
    interfaces: [Enum]
  };
  function GameStick$values() {
    return [GameStick$LEFT_getInstance(), GameStick$RIGHT_getInstance()];
  }
  GameStick.values = GameStick$values;
  function GameStick$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return GameStick$LEFT_getInstance();
      case 'RIGHT':
        return GameStick$RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GameStick.' + name);
    }
  }
  GameStick.valueOf_61zpoe$ = GameStick$valueOf;
  function GameButton(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameButton_initFields() {
    GameButton_initFields = function () {
    };
    GameButton$LEFT_instance = new GameButton('LEFT', 0, 0);
    GameButton$RIGHT_instance = new GameButton('RIGHT', 1, 1);
    GameButton$UP_instance = new GameButton('UP', 2, 2);
    GameButton$DOWN_instance = new GameButton('DOWN', 3, 3);
    GameButton$BUTTON0_instance = new GameButton('BUTTON0', 4, 4);
    GameButton$BUTTON1_instance = new GameButton('BUTTON1', 5, 5);
    GameButton$BUTTON2_instance = new GameButton('BUTTON2', 6, 6);
    GameButton$BUTTON3_instance = new GameButton('BUTTON3', 7, 7);
    GameButton$SELECT_instance = new GameButton('SELECT', 8, 8);
    GameButton$START_instance = new GameButton('START', 9, 9);
    GameButton$SYSTEM_instance = new GameButton('SYSTEM', 10, 10);
    GameButton$L1_instance = new GameButton('L1', 11, 11);
    GameButton$R1_instance = new GameButton('R1', 12, 12);
    GameButton$L2_instance = new GameButton('L2', 13, 13);
    GameButton$R2_instance = new GameButton('R2', 14, 14);
    GameButton$L3_instance = new GameButton('L3', 15, 15);
    GameButton$R3_instance = new GameButton('R3', 16, 16);
    GameButton$LX_instance = new GameButton('LX', 17, 17);
    GameButton$LY_instance = new GameButton('LY', 18, 18);
    GameButton$RX_instance = new GameButton('RX', 19, 19);
    GameButton$RY_instance = new GameButton('RY', 20, 20);
    GameButton$BUTTON4_instance = new GameButton('BUTTON4', 21, 24);
    GameButton$BUTTON5_instance = new GameButton('BUTTON5', 22, 25);
    GameButton$BUTTON6_instance = new GameButton('BUTTON6', 23, 26);
    GameButton$BUTTON7_instance = new GameButton('BUTTON7', 24, 27);
    GameButton$BUTTON8_instance = new GameButton('BUTTON8', 25, 28);
    GameButton$Companion_getInstance();
  }
  var GameButton$LEFT_instance;
  function GameButton$LEFT_getInstance() {
    GameButton_initFields();
    return GameButton$LEFT_instance;
  }
  var GameButton$RIGHT_instance;
  function GameButton$RIGHT_getInstance() {
    GameButton_initFields();
    return GameButton$RIGHT_instance;
  }
  var GameButton$UP_instance;
  function GameButton$UP_getInstance() {
    GameButton_initFields();
    return GameButton$UP_instance;
  }
  var GameButton$DOWN_instance;
  function GameButton$DOWN_getInstance() {
    GameButton_initFields();
    return GameButton$DOWN_instance;
  }
  var GameButton$BUTTON0_instance;
  function GameButton$BUTTON0_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON0_instance;
  }
  var GameButton$BUTTON1_instance;
  function GameButton$BUTTON1_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON1_instance;
  }
  var GameButton$BUTTON2_instance;
  function GameButton$BUTTON2_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON2_instance;
  }
  var GameButton$BUTTON3_instance;
  function GameButton$BUTTON3_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON3_instance;
  }
  var GameButton$SELECT_instance;
  function GameButton$SELECT_getInstance() {
    GameButton_initFields();
    return GameButton$SELECT_instance;
  }
  var GameButton$START_instance;
  function GameButton$START_getInstance() {
    GameButton_initFields();
    return GameButton$START_instance;
  }
  var GameButton$SYSTEM_instance;
  function GameButton$SYSTEM_getInstance() {
    GameButton_initFields();
    return GameButton$SYSTEM_instance;
  }
  var GameButton$L1_instance;
  function GameButton$L1_getInstance() {
    GameButton_initFields();
    return GameButton$L1_instance;
  }
  var GameButton$R1_instance;
  function GameButton$R1_getInstance() {
    GameButton_initFields();
    return GameButton$R1_instance;
  }
  var GameButton$L2_instance;
  function GameButton$L2_getInstance() {
    GameButton_initFields();
    return GameButton$L2_instance;
  }
  var GameButton$R2_instance;
  function GameButton$R2_getInstance() {
    GameButton_initFields();
    return GameButton$R2_instance;
  }
  var GameButton$L3_instance;
  function GameButton$L3_getInstance() {
    GameButton_initFields();
    return GameButton$L3_instance;
  }
  var GameButton$R3_instance;
  function GameButton$R3_getInstance() {
    GameButton_initFields();
    return GameButton$R3_instance;
  }
  var GameButton$LX_instance;
  function GameButton$LX_getInstance() {
    GameButton_initFields();
    return GameButton$LX_instance;
  }
  var GameButton$LY_instance;
  function GameButton$LY_getInstance() {
    GameButton_initFields();
    return GameButton$LY_instance;
  }
  var GameButton$RX_instance;
  function GameButton$RX_getInstance() {
    GameButton_initFields();
    return GameButton$RX_instance;
  }
  var GameButton$RY_instance;
  function GameButton$RY_getInstance() {
    GameButton_initFields();
    return GameButton$RY_instance;
  }
  var GameButton$BUTTON4_instance;
  function GameButton$BUTTON4_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON4_instance;
  }
  var GameButton$BUTTON5_instance;
  function GameButton$BUTTON5_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON5_instance;
  }
  var GameButton$BUTTON6_instance;
  function GameButton$BUTTON6_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON6_instance;
  }
  var GameButton$BUTTON7_instance;
  function GameButton$BUTTON7_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON7_instance;
  }
  var GameButton$BUTTON8_instance;
  function GameButton$BUTTON8_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON8_instance;
  }
  function GameButton$Companion() {
    GameButton$Companion_instance = this;
    this.BUTTONS = GameButton$values();
    this.MAX = 32;
  }
  GameButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameButton$Companion_instance = null;
  function GameButton$Companion_getInstance() {
    GameButton_initFields();
    if (GameButton$Companion_instance === null) {
      new GameButton$Companion();
    }
    return GameButton$Companion_instance;
  }
  GameButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameButton',
    interfaces: [Enum]
  };
  function GameButton$values() {
    return [GameButton$LEFT_getInstance(), GameButton$RIGHT_getInstance(), GameButton$UP_getInstance(), GameButton$DOWN_getInstance(), GameButton$BUTTON0_getInstance(), GameButton$BUTTON1_getInstance(), GameButton$BUTTON2_getInstance(), GameButton$BUTTON3_getInstance(), GameButton$SELECT_getInstance(), GameButton$START_getInstance(), GameButton$SYSTEM_getInstance(), GameButton$L1_getInstance(), GameButton$R1_getInstance(), GameButton$L2_getInstance(), GameButton$R2_getInstance(), GameButton$L3_getInstance(), GameButton$R3_getInstance(), GameButton$LX_getInstance(), GameButton$LY_getInstance(), GameButton$RX_getInstance(), GameButton$RY_getInstance(), GameButton$BUTTON4_getInstance(), GameButton$BUTTON5_getInstance(), GameButton$BUTTON6_getInstance(), GameButton$BUTTON7_getInstance(), GameButton$BUTTON8_getInstance()];
  }
  GameButton.values = GameButton$values;
  function GameButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return GameButton$LEFT_getInstance();
      case 'RIGHT':
        return GameButton$RIGHT_getInstance();
      case 'UP':
        return GameButton$UP_getInstance();
      case 'DOWN':
        return GameButton$DOWN_getInstance();
      case 'BUTTON0':
        return GameButton$BUTTON0_getInstance();
      case 'BUTTON1':
        return GameButton$BUTTON1_getInstance();
      case 'BUTTON2':
        return GameButton$BUTTON2_getInstance();
      case 'BUTTON3':
        return GameButton$BUTTON3_getInstance();
      case 'SELECT':
        return GameButton$SELECT_getInstance();
      case 'START':
        return GameButton$START_getInstance();
      case 'SYSTEM':
        return GameButton$SYSTEM_getInstance();
      case 'L1':
        return GameButton$L1_getInstance();
      case 'R1':
        return GameButton$R1_getInstance();
      case 'L2':
        return GameButton$L2_getInstance();
      case 'R2':
        return GameButton$R2_getInstance();
      case 'L3':
        return GameButton$L3_getInstance();
      case 'R3':
        return GameButton$R3_getInstance();
      case 'LX':
        return GameButton$LX_getInstance();
      case 'LY':
        return GameButton$LY_getInstance();
      case 'RX':
        return GameButton$RX_getInstance();
      case 'RY':
        return GameButton$RY_getInstance();
      case 'BUTTON4':
        return GameButton$BUTTON4_getInstance();
      case 'BUTTON5':
        return GameButton$BUTTON5_getInstance();
      case 'BUTTON6':
        return GameButton$BUTTON6_getInstance();
      case 'BUTTON7':
        return GameButton$BUTTON7_getInstance();
      case 'BUTTON8':
        return GameButton$BUTTON8_getInstance();
      default:throwISE('No enum constant com.soywiz.korev.GameButton.' + name);
    }
  }
  GameButton.valueOf_61zpoe$ = GameButton$valueOf;
  function GamepadInfo(index, connected, name, mapping, rawButtonsPressure, rawButtonsPressed, rawAxes, axesLength, buttonsLength) {
    if (index === void 0)
      index = 0;
    if (connected === void 0)
      connected = false;
    if (name === void 0)
      name = 'unknown';
    if (mapping === void 0)
      mapping = StandardGamepadMapping_getInstance();
    if (rawButtonsPressure === void 0)
      rawButtonsPressure = new Float64Array(64);
    if (rawButtonsPressed === void 0)
      rawButtonsPressed = 0;
    if (rawAxes === void 0)
      rawAxes = new Float64Array(16);
    if (axesLength === void 0)
      axesLength = 0;
    if (buttonsLength === void 0)
      buttonsLength = 0;
    this.index = index;
    this.connected = connected;
    this.name = name;
    this.mapping = mapping;
    this.rawButtonsPressure = rawButtonsPressure;
    this.rawButtonsPressed = rawButtonsPressed;
    this.rawAxes = rawAxes;
    this.axesLength = axesLength;
    this.buttonsLength = buttonsLength;
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Point.Companion.invoke();
    }
    this.axesData_0 = array;
  }
  var Math_0 = Math;
  var arraycopy$lambda = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  GamepadInfo.prototype.copyFrom_u2qnca$ = function (that) {
    this.index = that.index;
    this.name = that.name;
    this.mapping = that.mapping;
    this.rawButtonsPressed = that.rawButtonsPressed;
    this.connected = that.connected;
    this.axesLength = that.axesLength;
    this.buttonsLength = that.buttonsLength;
    var tmp$ = that.axesData_0;
    var tmp$_0 = this.axesData_0;
    var a = this.axesData_0.length;
    var b = that.axesData_0.length;
    arrayCopy(tmp$, tmp$_0, 0, 0, 0 + Math_0.min(a, b) | 0);
    var tmp$_1 = that.rawButtonsPressure;
    var tmp$_2 = this.rawButtonsPressure;
    var a_0 = this.rawButtonsPressure.length;
    var b_0 = that.rawButtonsPressure.length;
    arrayCopy(tmp$_1, tmp$_2, 0, 0, 0 + Math_0.min(a_0, b_0) | 0);
    var tmp$_3 = that.rawAxes;
    var tmp$_4 = this.rawAxes;
    var a_1 = this.rawAxes.length;
    var b_1 = that.rawAxes.length;
    arrayCopy(tmp$_3, tmp$_4, 0, 0, 0 + Math_0.min(a_1, b_1) | 0);
  };
  GamepadInfo.prototype.get_4pistl$ = function (button) {
    return this.mapping.get_nr7vgt$(button, this);
  };
  GamepadInfo.prototype.get_e5pshl$ = function (stick) {
    var $receiver = this.axesData_0[stick.id];
    $receiver.x = this.getX_e5pshl$(stick);
    $receiver.y = this.getY_e5pshl$(stick);
    return $receiver;
  };
  GamepadInfo.prototype.getX_e5pshl$ = function (stick) {
    switch (stick.name) {
      case 'LEFT':
        return this.get_4pistl$(GameButton$LX_getInstance());
      case 'RIGHT':
        return this.get_4pistl$(GameButton$LY_getInstance());
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  GamepadInfo.prototype.getY_e5pshl$ = function (stick) {
    switch (stick.name) {
      case 'LEFT':
        return this.get_4pistl$(GameButton$RX_getInstance());
      case 'RIGHT':
        return this.get_4pistl$(GameButton$RY_getInstance());
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  GamepadInfo.prototype.toString = function () {
    return 'Gamepad[' + this.index + '][' + this.name + ']' + this.mapping.toString_u2qnca$(this);
  };
  GamepadInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamepadInfo',
    interfaces: []
  };
  function GamepadMapping() {
  }
  GamepadMapping.prototype.getButton_92twlb$_0 = function ($receiver, index) {
    return extract($receiver, index) ? 1.0 : 0.0;
  };
  GamepadMapping.prototype.getRawButton_qw5gbr$ = function ($receiver, index) {
    return this.getButton_92twlb$_0($receiver.rawButtonsPressed, index);
  };
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_bvy38s$;
  GamepadMapping.prototype.getRawAxe_qw5gbr$ = function ($receiver, index) {
    var $receiver_0 = $receiver.rawAxes;
    return index >= 0 && index <= get_lastIndex_0($receiver_0) ? $receiver_0[index] : 0.0;
  };
  function GamepadMapping$toString$lambda(closure$info, this$GamepadMapping) {
    return function (it) {
      return it.name + '=' + this$GamepadMapping.get_nr7vgt$(it, closure$info);
    };
  }
  GamepadMapping.prototype.toString_u2qnca$ = function (info) {
    return this.id + '(' + joinToString(GameButton$values(), ', ', void 0, void 0, void 0, void 0, GamepadMapping$toString$lambda(info, this)) + ')';
  };
  GamepadMapping.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamepadMapping',
    interfaces: []
  };
  function StandardGamepadMapping() {
    StandardGamepadMapping_instance = this;
    GamepadMapping.call(this);
    this.id_tj66ww$_0 = 'Standard';
  }
  Object.defineProperty(StandardGamepadMapping.prototype, 'id', {
    get: function () {
      return this.id_tj66ww$_0;
    }
  });
  StandardGamepadMapping.prototype.get_nr7vgt$ = function (button, info) {
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
      case 'SELECT':
        tmp$ = this.getRawButton_qw5gbr$(info, 8);
        break;
      case 'START':
        tmp$ = this.getRawButton_qw5gbr$(info, 9);
        break;
      case 'L3':
        tmp$ = this.getRawButton_qw5gbr$(info, 10);
        break;
      case 'R3':
        tmp$ = this.getRawButton_qw5gbr$(info, 11);
        break;
      case 'UP':
        tmp$ = this.getRawButton_qw5gbr$(info, 12);
        break;
      case 'DOWN':
        tmp$ = this.getRawButton_qw5gbr$(info, 13);
        break;
      case 'LEFT':
        tmp$ = this.getRawButton_qw5gbr$(info, 14);
        break;
      case 'RIGHT':
        tmp$ = this.getRawButton_qw5gbr$(info, 15);
        break;
      case 'SYSTEM':
        tmp$ = this.getRawButton_qw5gbr$(info, 16);
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
  StandardGamepadMapping.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StandardGamepadMapping',
    interfaces: [GamepadMapping]
  };
  var StandardGamepadMapping_instance = null;
  function StandardGamepadMapping_getInstance() {
    if (StandardGamepadMapping_instance === null) {
      new StandardGamepadMapping();
    }
    return StandardGamepadMapping_instance;
  }
  var fastForEach = defineInlineFunction('korev.com.soywiz.korev.internal.fastForEach_kf7q02$', function ($receiver, callback) {
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      callback($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
    }
  });
  $$importsForInline$$.korev = _;
  EventDispatcher.Mixin = EventDispatcher$Mixin;
  Object.defineProperty(EventDispatcher, 'Companion', {
    get: EventDispatcher$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korev = package$soywiz.korev || (package$soywiz.korev = {});
  package$korev.EventDispatcher = EventDispatcher;
  Object.defineProperty(package$korev, 'DummyEventDispatcher', {
    get: DummyEventDispatcher_getInstance
  });
  package$korev.invoke_t8hnd5$ = invoke;
  package$korev.Event = Event;
  package$korev.preventDefault_uh9o5i$ = preventDefault;
  package$korev.preventDefault_s8jyv4$ = preventDefault_0;
  package$korev.PreventDefaultException = PreventDefaultException;
  Object.defineProperty(MouseEvent$Type, 'MOVE', {
    get: MouseEvent$Type$MOVE_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'DRAG', {
    get: MouseEvent$Type$DRAG_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'UP', {
    get: MouseEvent$Type$UP_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'DOWN', {
    get: MouseEvent$Type$DOWN_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'CLICK', {
    get: MouseEvent$Type$CLICK_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'ENTER', {
    get: MouseEvent$Type$ENTER_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'EXIT', {
    get: MouseEvent$Type$EXIT_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'SCROLL', {
    get: MouseEvent$Type$SCROLL_getInstance
  });
  MouseEvent.Type = MouseEvent$Type;
  package$korev.MouseEvent = MouseEvent;
  Object.defineProperty(Touch, 'Companion', {
    get: Touch$Companion_getInstance
  });
  package$korev.Touch = Touch;
  Object.defineProperty(TouchEvent, 'Companion', {
    get: TouchEvent$Companion_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'START', {
    get: TouchEvent$Type$START_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'END', {
    get: TouchEvent$Type$END_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'MOVE', {
    get: TouchEvent$Type$MOVE_getInstance
  });
  TouchEvent.Type = TouchEvent$Type;
  package$korev.TouchEvent = TouchEvent;
  Object.defineProperty(KeyEvent$Type, 'UP', {
    get: KeyEvent$Type$UP_getInstance
  });
  Object.defineProperty(KeyEvent$Type, 'DOWN', {
    get: KeyEvent$Type$DOWN_getInstance
  });
  Object.defineProperty(KeyEvent$Type, 'TYPE', {
    get: KeyEvent$Type$TYPE_getInstance
  });
  KeyEvent.Type = KeyEvent$Type;
  package$korev.KeyEvent = KeyEvent;
  Object.defineProperty(GamePadConnectionEvent$Type, 'CONNECTED', {
    get: GamePadConnectionEvent$Type$CONNECTED_getInstance
  });
  Object.defineProperty(GamePadConnectionEvent$Type, 'DISCONNECTED', {
    get: GamePadConnectionEvent$Type$DISCONNECTED_getInstance
  });
  GamePadConnectionEvent.Type = GamePadConnectionEvent$Type;
  package$korev.GamePadConnectionEvent = GamePadConnectionEvent;
  package$korev.GamePadUpdateEvent = GamePadUpdateEvent;
  Object.defineProperty(GamePadButtonEvent$Type, 'UP', {
    get: GamePadButtonEvent$Type$UP_getInstance
  });
  Object.defineProperty(GamePadButtonEvent$Type, 'DOWN', {
    get: GamePadButtonEvent$Type$DOWN_getInstance
  });
  GamePadButtonEvent.Type = GamePadButtonEvent$Type;
  package$korev.GamePadButtonEvent = GamePadButtonEvent;
  package$korev.GamePadStickEvent = GamePadStickEvent;
  package$korev.ChangeEvent = ChangeEvent;
  package$korev.ReshapeEvent = ReshapeEvent;
  package$korev.FullScreenEvent = FullScreenEvent;
  package$korev.RenderEvent = RenderEvent;
  package$korev.InitEvent = InitEvent;
  package$korev.DisposeEvent = DisposeEvent;
  Object.defineProperty(DropFileEvent$Type, 'ENTER', {
    get: DropFileEvent$Type$ENTER_getInstance
  });
  Object.defineProperty(DropFileEvent$Type, 'EXIT', {
    get: DropFileEvent$Type$EXIT_getInstance
  });
  Object.defineProperty(DropFileEvent$Type, 'DROP', {
    get: DropFileEvent$Type$DROP_getInstance
  });
  DropFileEvent.Type = DropFileEvent$Type;
  package$korev.DropFileEvent = DropFileEvent;
  package$korev.MouseEvents = MouseEvents;
  package$korev.KeysEvents = KeysEvents;
  package$korev.mouse_3owenf$ = mouse;
  package$korev.keys_1ue75a$ = keys;
  Object.defineProperty(MouseButton, 'LEFT', {
    get: MouseButton$LEFT_getInstance
  });
  Object.defineProperty(MouseButton, 'RIGHT', {
    get: MouseButton$RIGHT_getInstance
  });
  Object.defineProperty(MouseButton, 'MIDDLE', {
    get: MouseButton$MIDDLE_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON3', {
    get: MouseButton$BUTTON3_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON4', {
    get: MouseButton$BUTTON4_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON5', {
    get: MouseButton$BUTTON5_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON_UNKNOWN', {
    get: MouseButton$BUTTON_UNKNOWN_getInstance
  });
  Object.defineProperty(MouseButton, 'Companion', {
    get: MouseButton$Companion_getInstance
  });
  package$korev.MouseButton = MouseButton;
  Object.defineProperty(Key, 'SPACE', {
    get: Key$SPACE_getInstance
  });
  Object.defineProperty(Key, 'APOSTROPHE', {
    get: Key$APOSTROPHE_getInstance
  });
  Object.defineProperty(Key, 'COMMA', {
    get: Key$COMMA_getInstance
  });
  Object.defineProperty(Key, 'MINUS', {
    get: Key$MINUS_getInstance
  });
  Object.defineProperty(Key, 'PERIOD', {
    get: Key$PERIOD_getInstance
  });
  Object.defineProperty(Key, 'SLASH', {
    get: Key$SLASH_getInstance
  });
  Object.defineProperty(Key, 'N0', {
    get: Key$N0_getInstance
  });
  Object.defineProperty(Key, 'N1', {
    get: Key$N1_getInstance
  });
  Object.defineProperty(Key, 'N2', {
    get: Key$N2_getInstance
  });
  Object.defineProperty(Key, 'N3', {
    get: Key$N3_getInstance
  });
  Object.defineProperty(Key, 'N4', {
    get: Key$N4_getInstance
  });
  Object.defineProperty(Key, 'N5', {
    get: Key$N5_getInstance
  });
  Object.defineProperty(Key, 'N6', {
    get: Key$N6_getInstance
  });
  Object.defineProperty(Key, 'N7', {
    get: Key$N7_getInstance
  });
  Object.defineProperty(Key, 'N8', {
    get: Key$N8_getInstance
  });
  Object.defineProperty(Key, 'N9', {
    get: Key$N9_getInstance
  });
  Object.defineProperty(Key, 'SEMICOLON', {
    get: Key$SEMICOLON_getInstance
  });
  Object.defineProperty(Key, 'EQUAL', {
    get: Key$EQUAL_getInstance
  });
  Object.defineProperty(Key, 'A', {
    get: Key$A_getInstance
  });
  Object.defineProperty(Key, 'B', {
    get: Key$B_getInstance
  });
  Object.defineProperty(Key, 'C', {
    get: Key$C_getInstance
  });
  Object.defineProperty(Key, 'D', {
    get: Key$D_getInstance
  });
  Object.defineProperty(Key, 'E', {
    get: Key$E_getInstance
  });
  Object.defineProperty(Key, 'F', {
    get: Key$F_getInstance
  });
  Object.defineProperty(Key, 'G', {
    get: Key$G_getInstance
  });
  Object.defineProperty(Key, 'H', {
    get: Key$H_getInstance
  });
  Object.defineProperty(Key, 'I', {
    get: Key$I_getInstance
  });
  Object.defineProperty(Key, 'J', {
    get: Key$J_getInstance
  });
  Object.defineProperty(Key, 'K', {
    get: Key$K_getInstance
  });
  Object.defineProperty(Key, 'L', {
    get: Key$L_getInstance
  });
  Object.defineProperty(Key, 'M', {
    get: Key$M_getInstance
  });
  Object.defineProperty(Key, 'N', {
    get: Key$N_getInstance
  });
  Object.defineProperty(Key, 'O', {
    get: Key$O_getInstance
  });
  Object.defineProperty(Key, 'P', {
    get: Key$P_getInstance
  });
  Object.defineProperty(Key, 'Q', {
    get: Key$Q_getInstance
  });
  Object.defineProperty(Key, 'R', {
    get: Key$R_getInstance
  });
  Object.defineProperty(Key, 'S', {
    get: Key$S_getInstance
  });
  Object.defineProperty(Key, 'T', {
    get: Key$T_getInstance
  });
  Object.defineProperty(Key, 'U', {
    get: Key$U_getInstance
  });
  Object.defineProperty(Key, 'V', {
    get: Key$V_getInstance
  });
  Object.defineProperty(Key, 'W', {
    get: Key$W_getInstance
  });
  Object.defineProperty(Key, 'X', {
    get: Key$X_getInstance
  });
  Object.defineProperty(Key, 'Y', {
    get: Key$Y_getInstance
  });
  Object.defineProperty(Key, 'Z', {
    get: Key$Z_getInstance
  });
  Object.defineProperty(Key, 'LEFT_BRACKET', {
    get: Key$LEFT_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'BACKSLASH', {
    get: Key$BACKSLASH_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_BRACKET', {
    get: Key$RIGHT_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'GRAVE_ACCENT', {
    get: Key$GRAVE_ACCENT_getInstance
  });
  Object.defineProperty(Key, 'WORLD_1', {
    get: Key$WORLD_1_getInstance
  });
  Object.defineProperty(Key, 'WORLD_2', {
    get: Key$WORLD_2_getInstance
  });
  Object.defineProperty(Key, 'ESCAPE', {
    get: Key$ESCAPE_getInstance
  });
  Object.defineProperty(Key, 'META', {
    get: Key$META_getInstance
  });
  Object.defineProperty(Key, 'ENTER', {
    get: Key$ENTER_getInstance
  });
  Object.defineProperty(Key, 'TAB', {
    get: Key$TAB_getInstance
  });
  Object.defineProperty(Key, 'BACKSPACE', {
    get: Key$BACKSPACE_getInstance
  });
  Object.defineProperty(Key, 'INSERT', {
    get: Key$INSERT_getInstance
  });
  Object.defineProperty(Key, 'DELETE', {
    get: Key$DELETE_getInstance
  });
  Object.defineProperty(Key, 'RIGHT', {
    get: Key$RIGHT_getInstance
  });
  Object.defineProperty(Key, 'LEFT', {
    get: Key$LEFT_getInstance
  });
  Object.defineProperty(Key, 'DOWN', {
    get: Key$DOWN_getInstance
  });
  Object.defineProperty(Key, 'UP', {
    get: Key$UP_getInstance
  });
  Object.defineProperty(Key, 'PAGE_UP', {
    get: Key$PAGE_UP_getInstance
  });
  Object.defineProperty(Key, 'PAGE_DOWN', {
    get: Key$PAGE_DOWN_getInstance
  });
  Object.defineProperty(Key, 'FUNCTION', {
    get: Key$FUNCTION_getInstance
  });
  Object.defineProperty(Key, 'HELP', {
    get: Key$HELP_getInstance
  });
  Object.defineProperty(Key, 'MUTE', {
    get: Key$MUTE_getInstance
  });
  Object.defineProperty(Key, 'VOLUME_DOWN', {
    get: Key$VOLUME_DOWN_getInstance
  });
  Object.defineProperty(Key, 'VOLUME_UP', {
    get: Key$VOLUME_UP_getInstance
  });
  Object.defineProperty(Key, 'HOME', {
    get: Key$HOME_getInstance
  });
  Object.defineProperty(Key, 'END', {
    get: Key$END_getInstance
  });
  Object.defineProperty(Key, 'CAPS_LOCK', {
    get: Key$CAPS_LOCK_getInstance
  });
  Object.defineProperty(Key, 'SCROLL_LOCK', {
    get: Key$SCROLL_LOCK_getInstance
  });
  Object.defineProperty(Key, 'NUM_LOCK', {
    get: Key$NUM_LOCK_getInstance
  });
  Object.defineProperty(Key, 'PRINT_SCREEN', {
    get: Key$PRINT_SCREEN_getInstance
  });
  Object.defineProperty(Key, 'PAUSE', {
    get: Key$PAUSE_getInstance
  });
  Object.defineProperty(Key, 'F1', {
    get: Key$F1_getInstance
  });
  Object.defineProperty(Key, 'F2', {
    get: Key$F2_getInstance
  });
  Object.defineProperty(Key, 'F3', {
    get: Key$F3_getInstance
  });
  Object.defineProperty(Key, 'F4', {
    get: Key$F4_getInstance
  });
  Object.defineProperty(Key, 'F5', {
    get: Key$F5_getInstance
  });
  Object.defineProperty(Key, 'F6', {
    get: Key$F6_getInstance
  });
  Object.defineProperty(Key, 'F7', {
    get: Key$F7_getInstance
  });
  Object.defineProperty(Key, 'F8', {
    get: Key$F8_getInstance
  });
  Object.defineProperty(Key, 'F9', {
    get: Key$F9_getInstance
  });
  Object.defineProperty(Key, 'F10', {
    get: Key$F10_getInstance
  });
  Object.defineProperty(Key, 'F11', {
    get: Key$F11_getInstance
  });
  Object.defineProperty(Key, 'F12', {
    get: Key$F12_getInstance
  });
  Object.defineProperty(Key, 'F13', {
    get: Key$F13_getInstance
  });
  Object.defineProperty(Key, 'F14', {
    get: Key$F14_getInstance
  });
  Object.defineProperty(Key, 'F15', {
    get: Key$F15_getInstance
  });
  Object.defineProperty(Key, 'F16', {
    get: Key$F16_getInstance
  });
  Object.defineProperty(Key, 'F17', {
    get: Key$F17_getInstance
  });
  Object.defineProperty(Key, 'F18', {
    get: Key$F18_getInstance
  });
  Object.defineProperty(Key, 'F19', {
    get: Key$F19_getInstance
  });
  Object.defineProperty(Key, 'F20', {
    get: Key$F20_getInstance
  });
  Object.defineProperty(Key, 'F21', {
    get: Key$F21_getInstance
  });
  Object.defineProperty(Key, 'F22', {
    get: Key$F22_getInstance
  });
  Object.defineProperty(Key, 'F23', {
    get: Key$F23_getInstance
  });
  Object.defineProperty(Key, 'F24', {
    get: Key$F24_getInstance
  });
  Object.defineProperty(Key, 'F25', {
    get: Key$F25_getInstance
  });
  Object.defineProperty(Key, 'KP_0', {
    get: Key$KP_0_getInstance
  });
  Object.defineProperty(Key, 'KP_1', {
    get: Key$KP_1_getInstance
  });
  Object.defineProperty(Key, 'KP_2', {
    get: Key$KP_2_getInstance
  });
  Object.defineProperty(Key, 'KP_3', {
    get: Key$KP_3_getInstance
  });
  Object.defineProperty(Key, 'KP_4', {
    get: Key$KP_4_getInstance
  });
  Object.defineProperty(Key, 'KP_5', {
    get: Key$KP_5_getInstance
  });
  Object.defineProperty(Key, 'KP_6', {
    get: Key$KP_6_getInstance
  });
  Object.defineProperty(Key, 'KP_7', {
    get: Key$KP_7_getInstance
  });
  Object.defineProperty(Key, 'KP_8', {
    get: Key$KP_8_getInstance
  });
  Object.defineProperty(Key, 'KP_9', {
    get: Key$KP_9_getInstance
  });
  Object.defineProperty(Key, 'KP_DECIMAL', {
    get: Key$KP_DECIMAL_getInstance
  });
  Object.defineProperty(Key, 'KP_DIVIDE', {
    get: Key$KP_DIVIDE_getInstance
  });
  Object.defineProperty(Key, 'KP_MULTIPLY', {
    get: Key$KP_MULTIPLY_getInstance
  });
  Object.defineProperty(Key, 'KP_SUBTRACT', {
    get: Key$KP_SUBTRACT_getInstance
  });
  Object.defineProperty(Key, 'KP_ADD', {
    get: Key$KP_ADD_getInstance
  });
  Object.defineProperty(Key, 'KP_ENTER', {
    get: Key$KP_ENTER_getInstance
  });
  Object.defineProperty(Key, 'KP_EQUAL', {
    get: Key$KP_EQUAL_getInstance
  });
  Object.defineProperty(Key, 'KP_SEPARATOR', {
    get: Key$KP_SEPARATOR_getInstance
  });
  Object.defineProperty(Key, 'LEFT_SHIFT', {
    get: Key$LEFT_SHIFT_getInstance
  });
  Object.defineProperty(Key, 'LEFT_CONTROL', {
    get: Key$LEFT_CONTROL_getInstance
  });
  Object.defineProperty(Key, 'LEFT_ALT', {
    get: Key$LEFT_ALT_getInstance
  });
  Object.defineProperty(Key, 'LEFT_SUPER', {
    get: Key$LEFT_SUPER_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_SHIFT', {
    get: Key$RIGHT_SHIFT_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_CONTROL', {
    get: Key$RIGHT_CONTROL_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_ALT', {
    get: Key$RIGHT_ALT_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_SUPER', {
    get: Key$RIGHT_SUPER_getInstance
  });
  Object.defineProperty(Key, 'MENU', {
    get: Key$MENU_getInstance
  });
  Object.defineProperty(Key, 'BACKQUOTE', {
    get: Key$BACKQUOTE_getInstance
  });
  Object.defineProperty(Key, 'QUOTE', {
    get: Key$QUOTE_getInstance
  });
  Object.defineProperty(Key, 'KP_UP', {
    get: Key$KP_UP_getInstance
  });
  Object.defineProperty(Key, 'KP_DOWN', {
    get: Key$KP_DOWN_getInstance
  });
  Object.defineProperty(Key, 'KP_LEFT', {
    get: Key$KP_LEFT_getInstance
  });
  Object.defineProperty(Key, 'KP_RIGHT', {
    get: Key$KP_RIGHT_getInstance
  });
  Object.defineProperty(Key, 'UNDERLINE', {
    get: Key$UNDERLINE_getInstance
  });
  Object.defineProperty(Key, 'SELECT_KEY', {
    get: Key$SELECT_KEY_getInstance
  });
  Object.defineProperty(Key, 'CANCEL', {
    get: Key$CANCEL_getInstance
  });
  Object.defineProperty(Key, 'CLEAR', {
    get: Key$CLEAR_getInstance
  });
  Object.defineProperty(Key, 'OPEN_BRACKET', {
    get: Key$OPEN_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'CLOSE_BRACKET', {
    get: Key$CLOSE_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'UNDEFINED', {
    get: Key$UNDEFINED_getInstance
  });
  Object.defineProperty(Key, 'UNKNOWN', {
    get: Key$UNKNOWN_getInstance
  });
  Object.defineProperty(Key, 'Companion', {
    get: Key$Companion_getInstance
  });
  package$korev.Key = Key;
  Object.defineProperty(GameStick, 'LEFT', {
    get: GameStick$LEFT_getInstance
  });
  Object.defineProperty(GameStick, 'RIGHT', {
    get: GameStick$RIGHT_getInstance
  });
  Object.defineProperty(GameStick, 'Companion', {
    get: GameStick$Companion_getInstance
  });
  package$korev.GameStick = GameStick;
  Object.defineProperty(GameButton, 'LEFT', {
    get: GameButton$LEFT_getInstance
  });
  Object.defineProperty(GameButton, 'RIGHT', {
    get: GameButton$RIGHT_getInstance
  });
  Object.defineProperty(GameButton, 'UP', {
    get: GameButton$UP_getInstance
  });
  Object.defineProperty(GameButton, 'DOWN', {
    get: GameButton$DOWN_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON0', {
    get: GameButton$BUTTON0_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON1', {
    get: GameButton$BUTTON1_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON2', {
    get: GameButton$BUTTON2_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON3', {
    get: GameButton$BUTTON3_getInstance
  });
  Object.defineProperty(GameButton, 'SELECT', {
    get: GameButton$SELECT_getInstance
  });
  Object.defineProperty(GameButton, 'START', {
    get: GameButton$START_getInstance
  });
  Object.defineProperty(GameButton, 'SYSTEM', {
    get: GameButton$SYSTEM_getInstance
  });
  Object.defineProperty(GameButton, 'L1', {
    get: GameButton$L1_getInstance
  });
  Object.defineProperty(GameButton, 'R1', {
    get: GameButton$R1_getInstance
  });
  Object.defineProperty(GameButton, 'L2', {
    get: GameButton$L2_getInstance
  });
  Object.defineProperty(GameButton, 'R2', {
    get: GameButton$R2_getInstance
  });
  Object.defineProperty(GameButton, 'L3', {
    get: GameButton$L3_getInstance
  });
  Object.defineProperty(GameButton, 'R3', {
    get: GameButton$R3_getInstance
  });
  Object.defineProperty(GameButton, 'LX', {
    get: GameButton$LX_getInstance
  });
  Object.defineProperty(GameButton, 'LY', {
    get: GameButton$LY_getInstance
  });
  Object.defineProperty(GameButton, 'RX', {
    get: GameButton$RX_getInstance
  });
  Object.defineProperty(GameButton, 'RY', {
    get: GameButton$RY_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON4', {
    get: GameButton$BUTTON4_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON5', {
    get: GameButton$BUTTON5_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON6', {
    get: GameButton$BUTTON6_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON7', {
    get: GameButton$BUTTON7_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON8', {
    get: GameButton$BUTTON8_getInstance
  });
  Object.defineProperty(GameButton, 'Companion', {
    get: GameButton$Companion_getInstance
  });
  package$korev.GameButton = GameButton;
  $$importsForInline$$.kmem = $module$kmem;
  package$korev.GamepadInfo = GamepadInfo;
  package$korev.GamepadMapping = GamepadMapping;
  Object.defineProperty(package$korev, 'StandardGamepadMapping', {
    get: StandardGamepadMapping_getInstance
  });
  var package$internal = package$korev.internal || (package$korev.internal = {});
  package$internal.fastForEach_kf7q02$ = fastForEach;
  DummyEventDispatcher.prototype.copyFrom_qquois$ = EventDispatcher.prototype.copyFrom_qquois$;
  Kotlin.defineModule('korev', _);
  return _;
}));

//# sourceMappingURL=korev.js.map
