(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem', 'korio', 'korim', 'kds', 'korma', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem'), require('korio'), require('korim'), require('kds'), require('korma'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korag'.");
    }
    if (typeof kmem === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'kmem' was not found. Please, check whether 'kmem' is loaded prior to 'korag'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korag'.");
    }
    if (typeof korim === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'korim' was not found. Please, check whether 'korim' is loaded prior to 'korag'.");
    }
    if (typeof kds === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'kds' was not found. Please, check whether 'kds' is loaded prior to 'korag'.");
    }
    if (typeof korma === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'korma' was not found. Please, check whether 'korma' is loaded prior to 'korag'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korag'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korag'.");
    }
    root.korag = factory(typeof korag === 'undefined' ? {} : korag, kotlin, kmem, korio, korim, kds, korma, this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kmem, $module$korio, $module$korim, $module$kds, $module$korma, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var coroutines = Kotlin.kotlin.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var asyncImmediately = $module$korio.com.soywiz.korio.async.asyncImmediately_nt96rv$;
  var Closeable = $module$korio.com.soywiz.korio.lang.Closeable;
  var FBuffer = $module$kmem.com.soywiz.kmem.FBuffer;
  var ensureNotNull = Kotlin.ensureNotNull;
  var invalidOp = $module$korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var color = $module$korim.com.soywiz.korim.color;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Bitmap32 = $module$korim.com.soywiz.korim.bitmap.Bitmap32;
  var bitmap = $module$korim.com.soywiz.korim.bitmap;
  var equals = Kotlin.equals;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var List = Kotlin.kotlin.collections.List;
  var throwCCE = Kotlin.throwCCE;
  var Extra = $module$kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds.com.soywiz.kds.Extra.Mixin;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Signal = $module$korio.com.soywiz.korio.async.Signal;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Pool_init = $module$kds.com.soywiz.kds.Pool_init_rz0iom$;
  var Any = Object;
  var toString = Kotlin.toString;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var minus_0 = Kotlin.kotlin.collections.minus_q4559j$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var printStackTrace = $module$korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var numberToInt = Kotlin.numberToInt;
  var Matrix3D = $module$korma.com.soywiz.korma.geom.Matrix3D;
  var Indenter = $module$korio.com.soywiz.korio.util.Indenter;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var lang = $module$korio.com.soywiz.korio.lang;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var nextAlignedTo = $module$kmem.com.soywiz.kmem.nextAlignedTo_dqglrj$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  AG$BlendEquation.prototype = Object.create(Enum.prototype);
  AG$BlendEquation.prototype.constructor = AG$BlendEquation;
  AG$BlendFactor.prototype = Object.create(Enum.prototype);
  AG$BlendFactor.prototype.constructor = AG$BlendFactor;
  AG$TextureKind.prototype = Object.create(Enum.prototype);
  AG$TextureKind.prototype.constructor = AG$TextureKind;
  AG$Buffer$Kind.prototype = Object.create(Enum.prototype);
  AG$Buffer$Kind.prototype.constructor = AG$Buffer$Kind;
  AG$DrawType.prototype = Object.create(Enum.prototype);
  AG$DrawType.prototype.constructor = AG$DrawType;
  AG$StencilOp.prototype = Object.create(Enum.prototype);
  AG$StencilOp.prototype.constructor = AG$StencilOp;
  AG$TriangleFace.prototype = Object.create(Enum.prototype);
  AG$TriangleFace.prototype.constructor = AG$TriangleFace;
  AG$CompareMode.prototype = Object.create(Enum.prototype);
  AG$CompareMode.prototype.constructor = AG$CompareMode;
  AG$FrontFace.prototype = Object.create(Enum.prototype);
  AG$FrontFace.prototype.constructor = AG$FrontFace;
  DummyAG.prototype = Object.create(AG.prototype);
  DummyAG.prototype.constructor = DummyAG;
  LogAG$LogTexture.prototype = Object.create(AG$Texture.prototype);
  LogAG$LogTexture.prototype.constructor = LogAG$LogTexture;
  LogAG$LogBuffer.prototype = Object.create(AG$Buffer.prototype);
  LogAG$LogBuffer.prototype.constructor = LogAG$LogBuffer;
  LogAG$LogRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  LogAG$LogRenderBuffer.prototype.constructor = LogAG$LogRenderBuffer;
  LogAG.prototype = Object.create(AG.prototype);
  LogAG.prototype.constructor = LogAG;
  GlslGenerator.prototype = Object.create(Program$Visitor.prototype);
  GlslGenerator.prototype.constructor = GlslGenerator;
  VarKind.prototype = Object.create(Enum.prototype);
  VarKind.prototype.constructor = VarKind;
  VarType.prototype = Object.create(Enum.prototype);
  VarType.prototype.constructor = VarType;
  ShaderType.prototype = Object.create(Enum.prototype);
  ShaderType.prototype.constructor = ShaderType;
  Variable.prototype = Object.create(Operand.prototype);
  Variable.prototype.constructor = Variable;
  Attribute.prototype = Object.create(Variable.prototype);
  Attribute.prototype.constructor = Attribute;
  Varying.prototype = Object.create(Variable.prototype);
  Varying.prototype.constructor = Varying;
  Uniform.prototype = Object.create(Variable.prototype);
  Uniform.prototype.constructor = Uniform;
  Temp.prototype = Object.create(Variable.prototype);
  Temp.prototype.constructor = Temp;
  Output.prototype = Object.create(Variable.prototype);
  Output.prototype.constructor = Output;
  Program$Binop.prototype = Object.create(Operand.prototype);
  Program$Binop.prototype.constructor = Program$Binop;
  Program$IntLiteral.prototype = Object.create(Operand.prototype);
  Program$IntLiteral.prototype.constructor = Program$IntLiteral;
  Program$FloatLiteral.prototype = Object.create(Operand.prototype);
  Program$FloatLiteral.prototype.constructor = Program$FloatLiteral;
  Program$BoolLiteral.prototype = Object.create(Operand.prototype);
  Program$BoolLiteral.prototype.constructor = Program$BoolLiteral;
  Program$Vector.prototype = Object.create(Operand.prototype);
  Program$Vector.prototype.constructor = Program$Vector;
  Program$Swizzle.prototype = Object.create(Operand.prototype);
  Program$Swizzle.prototype.constructor = Program$Swizzle;
  Program$ArrayAccess.prototype = Object.create(Operand.prototype);
  Program$ArrayAccess.prototype.constructor = Program$ArrayAccess;
  Program$Func.prototype = Object.create(Operand.prototype);
  Program$Func.prototype.constructor = Program$Func;
  Program$Stm$Stms.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Stms.prototype.constructor = Program$Stm$Stms;
  Program$Stm$Set.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Set.prototype.constructor = Program$Stm$Set;
  Program$Stm$Discard.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Discard.prototype.constructor = Program$Stm$Discard;
  Program$Stm$If.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$If.prototype.constructor = Program$Stm$If;
  Shader$uniforms$lambda$ObjectLiteral.prototype = Object.create(Program$Visitor.prototype);
  Shader$uniforms$lambda$ObjectLiteral.prototype.constructor = Shader$uniforms$lambda$ObjectLiteral;
  Shader$attributes$lambda$ObjectLiteral.prototype = Object.create(Program$Visitor.prototype);
  Shader$attributes$lambda$ObjectLiteral.prototype.constructor = Shader$attributes$lambda$ObjectLiteral;
  VertexShader.prototype = Object.create(Shader.prototype);
  VertexShader.prototype.constructor = VertexShader;
  FragmentShader.prototype = Object.create(Shader.prototype);
  FragmentShader.prototype.constructor = FragmentShader;
  AGSoftware.prototype = Object.create(AG.prototype);
  AGSoftware.prototype.constructor = AGSoftware;
  function AGFactory() {
  }
  AGFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGFactory',
    interfaces: []
  };
  function AGConfig(antialiasHint) {
    if (antialiasHint === void 0)
      antialiasHint = true;
    this.antialiasHint = antialiasHint;
  }
  AGConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGConfig',
    interfaces: []
  };
  AGConfig.prototype.component1 = function () {
    return this.antialiasHint;
  };
  AGConfig.prototype.copy_6taknv$ = function (antialiasHint) {
    return new AGConfig(antialiasHint === void 0 ? this.antialiasHint : antialiasHint);
  };
  AGConfig.prototype.toString = function () {
    return 'AGConfig(antialiasHint=' + Kotlin.toString(this.antialiasHint) + ')';
  };
  AGConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.antialiasHint) | 0;
    return result;
  };
  AGConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.antialiasHint, other.antialiasHint))));
  };
  function AGContainer() {
  }
  AGContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGContainer',
    interfaces: []
  };
  function AGWindow() {
  }
  AGWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGWindow',
    interfaces: [AGContainer]
  };
  var Point = $module$korma.com.soywiz.korma.geom.Point;
  var Size_init = $module$korma.com.soywiz.korma.geom.Size;
  var numberToDouble = Kotlin.numberToDouble;
  function AG() {
    this.$delegate_y4f8iy$_0 = new Extra$Mixin();
    this.contextVersion = 0;
    this.maxTextureSize_6yxley$_0 = new Size_init(new Point(numberToDouble(2048), numberToDouble(2048)));
    this.devicePixelRatio_xydx2f$_0 = 1.0;
    this._onReadyDeferred_25a0pq$_0 = CompletableDeferred(Job());
    this.onReady = this._onReadyDeferred_25a0pq$_0;
    this.onRender = new Signal();
    this.viewport = new Int32Array([0, 0, 640, 480]);
    this.lastTextureId = 0;
    this.createdTextureCount = 0;
    this.deletedTextureCount = 0;
    this.dummyTexture_s1lppr$_0 = lazy(AG$dummyTexture$lambda(this));
    this.dummyRenderState_xrscgh$_0 = new AG$RenderState();
    this.dummyStencilState_6gllmd$_0 = new AG$StencilState();
    this.dummyColorMaskState_s1o3tk$_0 = new AG$ColorMaskState();
    this.frameRenderBuffers = LinkedHashSet_init();
    this.renderBuffers = Pool_init(void 0, AG$renderBuffers$lambda(this));
    this.mainRenderBuffer = new AG$mainRenderBuffer$ObjectLiteral(this);
    this.currentRenderBuffer = this.mainRenderBuffer;
    this.textureDrawer_p4bz2y$_0 = lazy(AG$textureDrawer$lambda(this));
    this.flipRenderTexture = true;
    this.drawTempTexture_npdcj3$_g2cado$_0 = lazy(AG$drawTempTexture$lambda(this));
  }
  Object.defineProperty(AG.prototype, 'maxTextureSize', {
    get: function () {
      return this.maxTextureSize_6yxley$_0;
    }
  });
  Object.defineProperty(AG.prototype, 'devicePixelRatio', {
    get: function () {
      return this.devicePixelRatio_xydx2f$_0;
    }
  });
  AG.prototype.ready = function () {
    this.__ready();
  };
  AG.prototype.__ready = function () {
    this._onReadyDeferred_25a0pq$_0.complete_11rb$(this);
  };
  AG.prototype.offscreenRendering_o14v8n$ = function (callback) {
    callback();
  };
  AG.prototype.repaint = function () {
  };
  AG.prototype.resized_vux9f0$ = function (width, height) {
    this.mainRenderBuffer.setSize_vux9f0$(width, height);
    this.setViewport_tjonv8$(0, 0, width, height);
  };
  AG.prototype.dispose = function () {
  };
  Object.defineProperty(AG.prototype, 'backWidth', {
    get: function () {
      return this.viewport[2];
    }
  });
  Object.defineProperty(AG.prototype, 'backHeight', {
    get: function () {
      return this.viewport[3];
    }
  });
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
  AG.prototype.getViewport_q5rwfd$ = function (out) {
    arrayCopy(this.viewport, out, 0, 0, 0 + 4 | 0);
    return out;
  };
  AG.prototype.setViewport_tjonv8$ = function (x, y, width, height) {
    this.viewport[0] = x;
    this.viewport[1] = y;
    this.viewport[2] = width;
    this.viewport[3] = height;
  };
  AG.prototype.setViewport_q5rwfd$ = function (v) {
    this.setViewport_tjonv8$(v[0], v[1], v[2], v[3]);
  };
  function AG$BlendEquation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$BlendEquation_initFields() {
    AG$BlendEquation_initFields = function () {
    };
    AG$BlendEquation$ADD_instance = new AG$BlendEquation('ADD', 0);
    AG$BlendEquation$SUBTRACT_instance = new AG$BlendEquation('SUBTRACT', 1);
    AG$BlendEquation$REVERSE_SUBTRACT_instance = new AG$BlendEquation('REVERSE_SUBTRACT', 2);
  }
  var AG$BlendEquation$ADD_instance;
  function AG$BlendEquation$ADD_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$ADD_instance;
  }
  var AG$BlendEquation$SUBTRACT_instance;
  function AG$BlendEquation$SUBTRACT_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$SUBTRACT_instance;
  }
  var AG$BlendEquation$REVERSE_SUBTRACT_instance;
  function AG$BlendEquation$REVERSE_SUBTRACT_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$REVERSE_SUBTRACT_instance;
  }
  AG$BlendEquation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendEquation',
    interfaces: [Enum]
  };
  function AG$BlendEquation$values() {
    return [AG$BlendEquation$ADD_getInstance(), AG$BlendEquation$SUBTRACT_getInstance(), AG$BlendEquation$REVERSE_SUBTRACT_getInstance()];
  }
  AG$BlendEquation.values = AG$BlendEquation$values;
  function AG$BlendEquation$valueOf(name) {
    switch (name) {
      case 'ADD':
        return AG$BlendEquation$ADD_getInstance();
      case 'SUBTRACT':
        return AG$BlendEquation$SUBTRACT_getInstance();
      case 'REVERSE_SUBTRACT':
        return AG$BlendEquation$REVERSE_SUBTRACT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.BlendEquation.' + name);
    }
  }
  AG$BlendEquation.valueOf_61zpoe$ = AG$BlendEquation$valueOf;
  function AG$BlendFactor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$BlendFactor_initFields() {
    AG$BlendFactor_initFields = function () {
    };
    AG$BlendFactor$DESTINATION_ALPHA_instance = new AG$BlendFactor('DESTINATION_ALPHA', 0);
    AG$BlendFactor$DESTINATION_COLOR_instance = new AG$BlendFactor('DESTINATION_COLOR', 1);
    AG$BlendFactor$ONE_instance = new AG$BlendFactor('ONE', 2);
    AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance = new AG$BlendFactor('ONE_MINUS_DESTINATION_ALPHA', 3);
    AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance = new AG$BlendFactor('ONE_MINUS_DESTINATION_COLOR', 4);
    AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance = new AG$BlendFactor('ONE_MINUS_SOURCE_ALPHA', 5);
    AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance = new AG$BlendFactor('ONE_MINUS_SOURCE_COLOR', 6);
    AG$BlendFactor$SOURCE_ALPHA_instance = new AG$BlendFactor('SOURCE_ALPHA', 7);
    AG$BlendFactor$SOURCE_COLOR_instance = new AG$BlendFactor('SOURCE_COLOR', 8);
    AG$BlendFactor$ZERO_instance = new AG$BlendFactor('ZERO', 9);
  }
  var AG$BlendFactor$DESTINATION_ALPHA_instance;
  function AG$BlendFactor$DESTINATION_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$DESTINATION_ALPHA_instance;
  }
  var AG$BlendFactor$DESTINATION_COLOR_instance;
  function AG$BlendFactor$DESTINATION_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$DESTINATION_COLOR_instance;
  }
  var AG$BlendFactor$ONE_instance;
  function AG$BlendFactor$ONE_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_instance;
  }
  var AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance;
  function AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance;
  }
  var AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance;
  function AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance;
  }
  var AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance;
  function AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance;
  }
  var AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance;
  function AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance;
  }
  var AG$BlendFactor$SOURCE_ALPHA_instance;
  function AG$BlendFactor$SOURCE_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$SOURCE_ALPHA_instance;
  }
  var AG$BlendFactor$SOURCE_COLOR_instance;
  function AG$BlendFactor$SOURCE_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$SOURCE_COLOR_instance;
  }
  var AG$BlendFactor$ZERO_instance;
  function AG$BlendFactor$ZERO_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ZERO_instance;
  }
  AG$BlendFactor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendFactor',
    interfaces: [Enum]
  };
  function AG$BlendFactor$values() {
    return [AG$BlendFactor$DESTINATION_ALPHA_getInstance(), AG$BlendFactor$DESTINATION_COLOR_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance(), AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$SOURCE_COLOR_getInstance(), AG$BlendFactor$ZERO_getInstance()];
  }
  AG$BlendFactor.values = AG$BlendFactor$values;
  function AG$BlendFactor$valueOf(name) {
    switch (name) {
      case 'DESTINATION_ALPHA':
        return AG$BlendFactor$DESTINATION_ALPHA_getInstance();
      case 'DESTINATION_COLOR':
        return AG$BlendFactor$DESTINATION_COLOR_getInstance();
      case 'ONE':
        return AG$BlendFactor$ONE_getInstance();
      case 'ONE_MINUS_DESTINATION_ALPHA':
        return AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance();
      case 'ONE_MINUS_DESTINATION_COLOR':
        return AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance();
      case 'ONE_MINUS_SOURCE_ALPHA':
        return AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance();
      case 'ONE_MINUS_SOURCE_COLOR':
        return AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance();
      case 'SOURCE_ALPHA':
        return AG$BlendFactor$SOURCE_ALPHA_getInstance();
      case 'SOURCE_COLOR':
        return AG$BlendFactor$SOURCE_COLOR_getInstance();
      case 'ZERO':
        return AG$BlendFactor$ZERO_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.BlendFactor.' + name);
    }
  }
  AG$BlendFactor.valueOf_61zpoe$ = AG$BlendFactor$valueOf;
  function AG$Scissor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(AG$Scissor.prototype, 'top', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'left', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'right', {
    get: function () {
      return this.x + this.width | 0;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'bottom', {
    get: function () {
      return this.y + this.height | 0;
    }
  });
  AG$Scissor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scissor',
    interfaces: []
  };
  AG$Scissor.prototype.component1 = function () {
    return this.x;
  };
  AG$Scissor.prototype.component2 = function () {
    return this.y;
  };
  AG$Scissor.prototype.component3 = function () {
    return this.width;
  };
  AG$Scissor.prototype.component4 = function () {
    return this.height;
  };
  AG$Scissor.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new AG$Scissor(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  AG$Scissor.prototype.toString = function () {
    return 'Scissor(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  AG$Scissor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  AG$Scissor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function AG$Blending(srcRGB, dstRGB, srcA, dstA, eqRGB, eqA) {
    AG$Blending$Companion_getInstance();
    if (srcA === void 0)
      srcA = srcRGB;
    if (dstA === void 0)
      dstA = dstRGB;
    if (eqRGB === void 0)
      eqRGB = AG$BlendEquation$ADD_getInstance();
    if (eqA === void 0)
      eqA = eqRGB;
    this.srcRGB = srcRGB;
    this.dstRGB = dstRGB;
    this.srcA = srcA;
    this.dstA = dstA;
    this.eqRGB = eqRGB;
    this.eqA = eqA;
  }
  Object.defineProperty(AG$Blending.prototype, 'disabled', {
    get: function () {
      return this.srcRGB === AG$BlendFactor$ONE_getInstance() && this.dstRGB === AG$BlendFactor$ZERO_getInstance() && this.srcA === AG$BlendFactor$ONE_getInstance() && this.dstA === AG$BlendFactor$ZERO_getInstance();
    }
  });
  Object.defineProperty(AG$Blending.prototype, 'enabled', {
    get: function () {
      return !this.disabled;
    }
  });
  function AG$Blending$Companion() {
    AG$Blending$Companion_instance = this;
    this.NONE = new AG$Blending(AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ZERO_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ZERO_getInstance());
    this.NORMAL = new AG$Blending(AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance());
    this.ADD = new AG$Blending(AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$DESTINATION_ALPHA_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_getInstance());
  }
  AG$Blending$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$Blending$Companion_instance = null;
  function AG$Blending$Companion_getInstance() {
    if (AG$Blending$Companion_instance === null) {
      new AG$Blending$Companion();
    }
    return AG$Blending$Companion_instance;
  }
  AG$Blending.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blending',
    interfaces: []
  };
  function AG$AG$Blending_init(src, dst, eq, $this) {
    if (eq === void 0)
      eq = AG$BlendEquation$ADD_getInstance();
    $this = $this || Object.create(AG$Blending.prototype);
    AG$Blending.call($this, src, dst, src, dst, eq, eq);
    return $this;
  }
  AG$Blending.prototype.component1 = function () {
    return this.srcRGB;
  };
  AG$Blending.prototype.component2 = function () {
    return this.dstRGB;
  };
  AG$Blending.prototype.component3 = function () {
    return this.srcA;
  };
  AG$Blending.prototype.component4 = function () {
    return this.dstA;
  };
  AG$Blending.prototype.component5 = function () {
    return this.eqRGB;
  };
  AG$Blending.prototype.component6 = function () {
    return this.eqA;
  };
  AG$Blending.prototype.copy_sbntou$ = function (srcRGB, dstRGB, srcA, dstA, eqRGB, eqA) {
    return new AG$Blending(srcRGB === void 0 ? this.srcRGB : srcRGB, dstRGB === void 0 ? this.dstRGB : dstRGB, srcA === void 0 ? this.srcA : srcA, dstA === void 0 ? this.dstA : dstA, eqRGB === void 0 ? this.eqRGB : eqRGB, eqA === void 0 ? this.eqA : eqA);
  };
  AG$Blending.prototype.toString = function () {
    return 'Blending(srcRGB=' + Kotlin.toString(this.srcRGB) + (', dstRGB=' + Kotlin.toString(this.dstRGB)) + (', srcA=' + Kotlin.toString(this.srcA)) + (', dstA=' + Kotlin.toString(this.dstA)) + (', eqRGB=' + Kotlin.toString(this.eqRGB)) + (', eqA=' + Kotlin.toString(this.eqA)) + ')';
  };
  AG$Blending.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.srcRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.dstRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.srcA) | 0;
    result = result * 31 + Kotlin.hashCode(this.dstA) | 0;
    result = result * 31 + Kotlin.hashCode(this.eqRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.eqA) | 0;
    return result;
  };
  AG$Blending.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.srcRGB, other.srcRGB) && Kotlin.equals(this.dstRGB, other.dstRGB) && Kotlin.equals(this.srcA, other.srcA) && Kotlin.equals(this.dstA, other.dstA) && Kotlin.equals(this.eqRGB, other.eqRGB) && Kotlin.equals(this.eqA, other.eqA)))));
  };
  function AG$BitmapSourceBase() {
  }
  AG$BitmapSourceBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BitmapSourceBase',
    interfaces: []
  };
  function AG$SyncBitmapSource(rgba, width, height, gen) {
    AG$SyncBitmapSource$Companion_getInstance();
    this.rgba_ltsnud$_0 = rgba;
    this.width_v92m8r$_0 = width;
    this.height_gq1qoy$_0 = height;
    this.gen = gen;
  }
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'rgba', {
    get: function () {
      return this.rgba_ltsnud$_0;
    }
  });
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'width', {
    get: function () {
      return this.width_v92m8r$_0;
    }
  });
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'height', {
    get: function () {
      return this.height_gq1qoy$_0;
    }
  });
  function AG$SyncBitmapSource$Companion() {
    AG$SyncBitmapSource$Companion_instance = this;
    this.NULL = new AG$SyncBitmapSource(true, 0, 0, AG$SyncBitmapSource$Companion$NULL$lambda);
  }
  function AG$SyncBitmapSource$Companion$NULL$lambda() {
    return null;
  }
  AG$SyncBitmapSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$SyncBitmapSource$Companion_instance = null;
  function AG$SyncBitmapSource$Companion_getInstance() {
    if (AG$SyncBitmapSource$Companion_instance === null) {
      new AG$SyncBitmapSource$Companion();
    }
    return AG$SyncBitmapSource$Companion_instance;
  }
  AG$SyncBitmapSource.prototype.toString = function () {
    return 'SyncBitmapSource(rgba=' + this.rgba + ', width=' + this.width + ', height=' + this.height + ')';
  };
  AG$SyncBitmapSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$AsyncBitmapSource(coroutineContext, rgba, width, height, gen) {
    AG$AsyncBitmapSource$Companion_getInstance();
    this.coroutineContext = coroutineContext;
    this.rgba_gss57q$_0 = rgba;
    this.width_pyti6s$_0 = width;
    this.height_eqw6oj$_0 = height;
    this.gen = gen;
  }
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'rgba', {
    get: function () {
      return this.rgba_gss57q$_0;
    }
  });
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'width', {
    get: function () {
      return this.width_pyti6s$_0;
    }
  });
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'height', {
    get: function () {
      return this.height_eqw6oj$_0;
    }
  });
  function AG$AsyncBitmapSource$Companion() {
    AG$AsyncBitmapSource$Companion_instance = this;
    this.NULL = new AG$AsyncBitmapSource(coroutines.EmptyCoroutineContext, true, 0, 0, AG$AsyncBitmapSource$Companion$NULL$lambda);
  }
  function Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype.constructor = Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda;
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return null;
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
  function AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0, suspended) {
    var instance = new Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  AG$AsyncBitmapSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$AsyncBitmapSource$Companion_instance = null;
  function AG$AsyncBitmapSource$Companion_getInstance() {
    if (AG$AsyncBitmapSource$Companion_instance === null) {
      new AG$AsyncBitmapSource$Companion();
    }
    return AG$AsyncBitmapSource$Companion_instance;
  }
  AG$AsyncBitmapSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$TextureKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$TextureKind_initFields() {
    AG$TextureKind_initFields = function () {
    };
    AG$TextureKind$RGBA_instance = new AG$TextureKind('RGBA', 0);
    AG$TextureKind$LUMINANCE_instance = new AG$TextureKind('LUMINANCE', 1);
  }
  var AG$TextureKind$RGBA_instance;
  function AG$TextureKind$RGBA_getInstance() {
    AG$TextureKind_initFields();
    return AG$TextureKind$RGBA_instance;
  }
  var AG$TextureKind$LUMINANCE_instance;
  function AG$TextureKind$LUMINANCE_getInstance() {
    AG$TextureKind_initFields();
    return AG$TextureKind$LUMINANCE_instance;
  }
  AG$TextureKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureKind',
    interfaces: [Enum]
  };
  function AG$TextureKind$values() {
    return [AG$TextureKind$RGBA_getInstance(), AG$TextureKind$LUMINANCE_getInstance()];
  }
  AG$TextureKind.values = AG$TextureKind$values;
  function AG$TextureKind$valueOf(name) {
    switch (name) {
      case 'RGBA':
        return AG$TextureKind$RGBA_getInstance();
      case 'LUMINANCE':
        return AG$TextureKind$LUMINANCE_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.TextureKind.' + name);
    }
  }
  AG$TextureKind.valueOf_61zpoe$ = AG$TextureKind$valueOf;
  function AG$Texture($outer) {
    this.$outer = $outer;
    this.isFbo = false;
    this.premultiplied_ra8tjj$_0 = true;
    this.requestMipmaps = false;
    this.mipmaps_fmt7mu$_0 = false;
    this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
    this.tempBitmap_rlmwj0$_0 = null;
    this.ready_9e90wu$_0 = false;
    var tmp$, tmp$_0;
    this.texId = (tmp$ = this.$outer.lastTextureId, this.$outer.lastTextureId = tmp$ + 1 | 0, tmp$);
    tmp$_0 = this.$outer.createdTextureCount;
    this.$outer.createdTextureCount = tmp$_0 + 1 | 0;
    this.alreadyClosed_j6qvi7$_0 = false;
  }
  Object.defineProperty(AG$Texture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_ra8tjj$_0;
    }
  });
  Object.defineProperty(AG$Texture.prototype, 'mipmaps', {
    get: function () {
      return this.mipmaps_fmt7mu$_0;
    },
    set: function (mipmaps) {
      this.mipmaps_fmt7mu$_0 = mipmaps;
    }
  });
  Object.defineProperty(AG$Texture.prototype, 'ready', {
    get: function () {
      return this.ready_9e90wu$_0;
    },
    set: function (ready) {
      this.ready_9e90wu$_0 = ready;
    }
  });
  AG$Texture.prototype.invalidate = function () {
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
  };
  function AG$Texture$upload$lambda(closure$bmp) {
    return function () {
      return closure$bmp;
    };
  }
  AG$Texture.prototype.upload_nn58bg$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.upload_fh4hjo$(bmp != null ? new AG$SyncBitmapSource(bmp.bpp > 8, bmp.width, bmp.height, AG$Texture$upload$lambda(bmp)) : AG$SyncBitmapSource$Companion_getInstance().NULL, mipmaps);
  };
  AG$Texture.prototype.upload_2ug3a3$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.upload_nn58bg$(bmp != null ? bmp.extract() : null, mipmaps);
  };
  AG$Texture.prototype.upload_fh4hjo$ = function (source, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.source = source;
    this.uploadedSource();
    this.invalidate();
    this.requestMipmaps = mipmaps;
    return this;
  };
  AG$Texture.prototype.uploadedSource = function () {
  };
  AG$Texture.prototype.bind = function () {
  };
  AG$Texture.prototype.unbind = function () {
  };
  AG$Texture.prototype.manualUpload = function () {
    this.uploaded_bjht0x$_0 = true;
    return this;
  };
  function Coroutine$AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$source = closure$source_0;
    this.local$this$Texture = this$Texture_0;
  }
  Coroutine$AG$Texture$bindEnsuring$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype.constructor = Coroutine$AG$Texture$bindEnsuring$lambda;
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$source.gen(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Texture.tempBitmap_rlmwj0$_0 = this.result_0;
            return this.local$this$Texture.generated_6fnrcm$_0 = true, Unit;
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
  function AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  AG$Texture.prototype.bindEnsuring = function () {
    this.bind();
    if (!this.isFbo) {
      var source = this.source;
      if (!this.uploaded_bjht0x$_0) {
        if (!this.generating_dlstkz$_0) {
          this.generating_dlstkz$_0 = true;
          if (Kotlin.isType(source, AG$SyncBitmapSource)) {
            this.tempBitmap_rlmwj0$_0 = source.gen();
            this.generated_6fnrcm$_0 = true;
          }
           else if (Kotlin.isType(source, AG$AsyncBitmapSource))
            asyncImmediately(source.coroutineContext, AG$Texture$bindEnsuring$lambda(source, this));
        }
        if (this.generated_6fnrcm$_0) {
          this.uploaded_bjht0x$_0 = true;
          this.generating_dlstkz$_0 = false;
          this.generated_6fnrcm$_0 = false;
          this.actualSyncUpload_u9zjc3$(source, this.tempBitmap_rlmwj0$_0, this.requestMipmaps);
          this.tempBitmap_rlmwj0$_0 = null;
          this.ready = true;
        }
      }
    }
  };
  AG$Texture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
  };
  AG$Texture.prototype.close = function () {
    var tmp$;
    if (!this.alreadyClosed_j6qvi7$_0) {
      this.alreadyClosed_j6qvi7$_0 = true;
      this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
      this.tempBitmap_rlmwj0$_0 = null;
      tmp$ = this.$outer.deletedTextureCount;
      this.$outer.deletedTextureCount = tmp$ + 1 | 0;
    }
  };
  AG$Texture.prototype.printTexStats_3r8gow$_0 = function () {
  };
  AG$Texture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture',
    interfaces: [Closeable]
  };
  function AG$TextureUnit(texture, linear) {
    if (texture === void 0)
      texture = null;
    if (linear === void 0)
      linear = true;
    this.texture = texture;
    this.linear = linear;
  }
  AG$TextureUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureUnit',
    interfaces: []
  };
  AG$TextureUnit.prototype.component1 = function () {
    return this.texture;
  };
  AG$TextureUnit.prototype.component2 = function () {
    return this.linear;
  };
  AG$TextureUnit.prototype.copy_qgz3nv$ = function (texture, linear) {
    return new AG$TextureUnit(texture === void 0 ? this.texture : texture, linear === void 0 ? this.linear : linear);
  };
  AG$TextureUnit.prototype.toString = function () {
    return 'TextureUnit(texture=' + Kotlin.toString(this.texture) + (', linear=' + Kotlin.toString(this.linear)) + ')';
  };
  AG$TextureUnit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.texture) | 0;
    result = result * 31 + Kotlin.hashCode(this.linear) | 0;
    return result;
  };
  AG$TextureUnit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.texture, other.texture) && Kotlin.equals(this.linear, other.linear)))));
  };
  function AG$Buffer(kind) {
    this.kind = kind;
    this.dirty = false;
    this.mem = null;
    this.memOffset = 0;
    this.memLength = 0;
  }
  function AG$Buffer$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$Buffer$Kind_initFields() {
    AG$Buffer$Kind_initFields = function () {
    };
    AG$Buffer$Kind$INDEX_instance = new AG$Buffer$Kind('INDEX', 0);
    AG$Buffer$Kind$VERTEX_instance = new AG$Buffer$Kind('VERTEX', 1);
  }
  var AG$Buffer$Kind$INDEX_instance;
  function AG$Buffer$Kind$INDEX_getInstance() {
    AG$Buffer$Kind_initFields();
    return AG$Buffer$Kind$INDEX_instance;
  }
  var AG$Buffer$Kind$VERTEX_instance;
  function AG$Buffer$Kind$VERTEX_getInstance() {
    AG$Buffer$Kind_initFields();
    return AG$Buffer$Kind$VERTEX_instance;
  }
  AG$Buffer$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function AG$Buffer$Kind$values() {
    return [AG$Buffer$Kind$INDEX_getInstance(), AG$Buffer$Kind$VERTEX_getInstance()];
  }
  AG$Buffer$Kind.values = AG$Buffer$Kind$values;
  function AG$Buffer$Kind$valueOf(name) {
    switch (name) {
      case 'INDEX':
        return AG$Buffer$Kind$INDEX_getInstance();
      case 'VERTEX':
        return AG$Buffer$Kind$VERTEX_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.Buffer.Kind.' + name);
    }
  }
  AG$Buffer$Kind.valueOf_61zpoe$ = AG$Buffer$Kind$valueOf;
  AG$Buffer.prototype.afterSetMem = function () {
  };
  AG$Buffer.prototype.upload_mj6st8$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length);
    ensureNotNull(this.mem).setAlignedArrayInt8_3fge6q$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_kgymra$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length * 4 | 0);
    ensureNotNull(this.mem).setAlignedArrayFloat32_3hvitc$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 4 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_nd5v6f$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length * 4 | 0);
    ensureNotNull(this.mem).setAlignedArrayInt32_coga0j$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 4 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_359eei$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    this.mem = FBuffer.Companion.invoke_za3lpa$(length * 2 | 0);
    ensureNotNull(this.mem).setAlignedArrayInt16_r43jz4$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 2 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_khrw8o$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size;
    this.mem = data;
    this.memOffset = offset;
    this.memLength = length;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.close = function () {
    this.mem = null;
    this.memOffset = 0;
    this.memLength = 0;
    this.dirty = true;
  };
  AG$Buffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Buffer',
    interfaces: [Closeable]
  };
  function AG$DrawType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$DrawType_initFields() {
    AG$DrawType_initFields = function () {
    };
    AG$DrawType$POINTS_instance = new AG$DrawType('POINTS', 0);
    AG$DrawType$LINE_STRIP_instance = new AG$DrawType('LINE_STRIP', 1);
    AG$DrawType$LINE_LOOP_instance = new AG$DrawType('LINE_LOOP', 2);
    AG$DrawType$LINES_instance = new AG$DrawType('LINES', 3);
    AG$DrawType$TRIANGLES_instance = new AG$DrawType('TRIANGLES', 4);
    AG$DrawType$TRIANGLE_STRIP_instance = new AG$DrawType('TRIANGLE_STRIP', 5);
    AG$DrawType$TRIANGLE_FAN_instance = new AG$DrawType('TRIANGLE_FAN', 6);
  }
  var AG$DrawType$POINTS_instance;
  function AG$DrawType$POINTS_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$POINTS_instance;
  }
  var AG$DrawType$LINE_STRIP_instance;
  function AG$DrawType$LINE_STRIP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINE_STRIP_instance;
  }
  var AG$DrawType$LINE_LOOP_instance;
  function AG$DrawType$LINE_LOOP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINE_LOOP_instance;
  }
  var AG$DrawType$LINES_instance;
  function AG$DrawType$LINES_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINES_instance;
  }
  var AG$DrawType$TRIANGLES_instance;
  function AG$DrawType$TRIANGLES_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLES_instance;
  }
  var AG$DrawType$TRIANGLE_STRIP_instance;
  function AG$DrawType$TRIANGLE_STRIP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLE_STRIP_instance;
  }
  var AG$DrawType$TRIANGLE_FAN_instance;
  function AG$DrawType$TRIANGLE_FAN_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLE_FAN_instance;
  }
  AG$DrawType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawType',
    interfaces: [Enum]
  };
  function AG$DrawType$values() {
    return [AG$DrawType$POINTS_getInstance(), AG$DrawType$LINE_STRIP_getInstance(), AG$DrawType$LINE_LOOP_getInstance(), AG$DrawType$LINES_getInstance(), AG$DrawType$TRIANGLES_getInstance(), AG$DrawType$TRIANGLE_STRIP_getInstance(), AG$DrawType$TRIANGLE_FAN_getInstance()];
  }
  AG$DrawType.values = AG$DrawType$values;
  function AG$DrawType$valueOf(name) {
    switch (name) {
      case 'POINTS':
        return AG$DrawType$POINTS_getInstance();
      case 'LINE_STRIP':
        return AG$DrawType$LINE_STRIP_getInstance();
      case 'LINE_LOOP':
        return AG$DrawType$LINE_LOOP_getInstance();
      case 'LINES':
        return AG$DrawType$LINES_getInstance();
      case 'TRIANGLES':
        return AG$DrawType$TRIANGLES_getInstance();
      case 'TRIANGLE_STRIP':
        return AG$DrawType$TRIANGLE_STRIP_getInstance();
      case 'TRIANGLE_FAN':
        return AG$DrawType$TRIANGLE_FAN_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.DrawType.' + name);
    }
  }
  AG$DrawType.valueOf_61zpoe$ = AG$DrawType$valueOf;
  Object.defineProperty(AG.prototype, 'dummyTexture', {
    get: function () {
      return this.dummyTexture_s1lppr$_0.value;
    }
  });
  AG.prototype.createTexture = function () {
    return this.createTexture_6taknv$(true);
  };
  AG.prototype.createTexture_lg0pjf$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture_6taknv$(bmp.premultiplied).upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createTexture_ejmmxi$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture_6taknv$(bmp.premultiplied).upload_2ug3a3$(bmp, mipmaps);
  };
  AG.prototype.createTexture_mj3tyc$ = function (bmp, mipmaps, premultiplied) {
    if (mipmaps === void 0)
      mipmaps = false;
    if (premultiplied === void 0)
      premultiplied = true;
    return this.createTexture_6taknv$(premultiplied).upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createTexture_6taknv$ = function (premultiplied) {
    return new AG$Texture(this);
  };
  AG.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AG$Buffer(kind);
  };
  AG.prototype.createIndexBuffer = function () {
    return this.createBuffer_g6fstm$(AG$Buffer$Kind$INDEX_getInstance());
  };
  AG.prototype.createVertexBuffer = function () {
    return this.createBuffer_g6fstm$(AG$Buffer$Kind$VERTEX_getInstance());
  };
  AG.prototype.createIndexBuffer_359eei$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_359eei$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createIndexBuffer_khrw8o$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_khrw8o$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createVertexBuffer_kgymra$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_kgymra$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createVertexBuffer_khrw8o$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_khrw8o$(data, offset, length);
    return $receiver;
  };
  function AG$StencilOp(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$StencilOp_initFields() {
    AG$StencilOp_initFields = function () {
    };
    AG$StencilOp$DECREMENT_SATURATE_instance = new AG$StencilOp('DECREMENT_SATURATE', 0);
    AG$StencilOp$DECREMENT_WRAP_instance = new AG$StencilOp('DECREMENT_WRAP', 1);
    AG$StencilOp$INCREMENT_SATURATE_instance = new AG$StencilOp('INCREMENT_SATURATE', 2);
    AG$StencilOp$INCREMENT_WRAP_instance = new AG$StencilOp('INCREMENT_WRAP', 3);
    AG$StencilOp$INVERT_instance = new AG$StencilOp('INVERT', 4);
    AG$StencilOp$KEEP_instance = new AG$StencilOp('KEEP', 5);
    AG$StencilOp$SET_instance = new AG$StencilOp('SET', 6);
    AG$StencilOp$ZERO_instance = new AG$StencilOp('ZERO', 7);
  }
  var AG$StencilOp$DECREMENT_SATURATE_instance;
  function AG$StencilOp$DECREMENT_SATURATE_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$DECREMENT_SATURATE_instance;
  }
  var AG$StencilOp$DECREMENT_WRAP_instance;
  function AG$StencilOp$DECREMENT_WRAP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$DECREMENT_WRAP_instance;
  }
  var AG$StencilOp$INCREMENT_SATURATE_instance;
  function AG$StencilOp$INCREMENT_SATURATE_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INCREMENT_SATURATE_instance;
  }
  var AG$StencilOp$INCREMENT_WRAP_instance;
  function AG$StencilOp$INCREMENT_WRAP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INCREMENT_WRAP_instance;
  }
  var AG$StencilOp$INVERT_instance;
  function AG$StencilOp$INVERT_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INVERT_instance;
  }
  var AG$StencilOp$KEEP_instance;
  function AG$StencilOp$KEEP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$KEEP_instance;
  }
  var AG$StencilOp$SET_instance;
  function AG$StencilOp$SET_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$SET_instance;
  }
  var AG$StencilOp$ZERO_instance;
  function AG$StencilOp$ZERO_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$ZERO_instance;
  }
  AG$StencilOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StencilOp',
    interfaces: [Enum]
  };
  function AG$StencilOp$values() {
    return [AG$StencilOp$DECREMENT_SATURATE_getInstance(), AG$StencilOp$DECREMENT_WRAP_getInstance(), AG$StencilOp$INCREMENT_SATURATE_getInstance(), AG$StencilOp$INCREMENT_WRAP_getInstance(), AG$StencilOp$INVERT_getInstance(), AG$StencilOp$KEEP_getInstance(), AG$StencilOp$SET_getInstance(), AG$StencilOp$ZERO_getInstance()];
  }
  AG$StencilOp.values = AG$StencilOp$values;
  function AG$StencilOp$valueOf(name) {
    switch (name) {
      case 'DECREMENT_SATURATE':
        return AG$StencilOp$DECREMENT_SATURATE_getInstance();
      case 'DECREMENT_WRAP':
        return AG$StencilOp$DECREMENT_WRAP_getInstance();
      case 'INCREMENT_SATURATE':
        return AG$StencilOp$INCREMENT_SATURATE_getInstance();
      case 'INCREMENT_WRAP':
        return AG$StencilOp$INCREMENT_WRAP_getInstance();
      case 'INVERT':
        return AG$StencilOp$INVERT_getInstance();
      case 'KEEP':
        return AG$StencilOp$KEEP_getInstance();
      case 'SET':
        return AG$StencilOp$SET_getInstance();
      case 'ZERO':
        return AG$StencilOp$ZERO_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.StencilOp.' + name);
    }
  }
  AG$StencilOp.valueOf_61zpoe$ = AG$StencilOp$valueOf;
  function AG$TriangleFace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$TriangleFace_initFields() {
    AG$TriangleFace_initFields = function () {
    };
    AG$TriangleFace$FRONT_instance = new AG$TriangleFace('FRONT', 0);
    AG$TriangleFace$BACK_instance = new AG$TriangleFace('BACK', 1);
    AG$TriangleFace$FRONT_AND_BACK_instance = new AG$TriangleFace('FRONT_AND_BACK', 2);
    AG$TriangleFace$NONE_instance = new AG$TriangleFace('NONE', 3);
  }
  var AG$TriangleFace$FRONT_instance;
  function AG$TriangleFace$FRONT_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$FRONT_instance;
  }
  var AG$TriangleFace$BACK_instance;
  function AG$TriangleFace$BACK_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$BACK_instance;
  }
  var AG$TriangleFace$FRONT_AND_BACK_instance;
  function AG$TriangleFace$FRONT_AND_BACK_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$FRONT_AND_BACK_instance;
  }
  var AG$TriangleFace$NONE_instance;
  function AG$TriangleFace$NONE_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$NONE_instance;
  }
  AG$TriangleFace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TriangleFace',
    interfaces: [Enum]
  };
  function AG$TriangleFace$values() {
    return [AG$TriangleFace$FRONT_getInstance(), AG$TriangleFace$BACK_getInstance(), AG$TriangleFace$FRONT_AND_BACK_getInstance(), AG$TriangleFace$NONE_getInstance()];
  }
  AG$TriangleFace.values = AG$TriangleFace$values;
  function AG$TriangleFace$valueOf(name) {
    switch (name) {
      case 'FRONT':
        return AG$TriangleFace$FRONT_getInstance();
      case 'BACK':
        return AG$TriangleFace$BACK_getInstance();
      case 'FRONT_AND_BACK':
        return AG$TriangleFace$FRONT_AND_BACK_getInstance();
      case 'NONE':
        return AG$TriangleFace$NONE_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.TriangleFace.' + name);
    }
  }
  AG$TriangleFace.valueOf_61zpoe$ = AG$TriangleFace$valueOf;
  function AG$CompareMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$CompareMode_initFields() {
    AG$CompareMode_initFields = function () {
    };
    AG$CompareMode$ALWAYS_instance = new AG$CompareMode('ALWAYS', 0);
    AG$CompareMode$EQUAL_instance = new AG$CompareMode('EQUAL', 1);
    AG$CompareMode$GREATER_instance = new AG$CompareMode('GREATER', 2);
    AG$CompareMode$GREATER_EQUAL_instance = new AG$CompareMode('GREATER_EQUAL', 3);
    AG$CompareMode$LESS_instance = new AG$CompareMode('LESS', 4);
    AG$CompareMode$LESS_EQUAL_instance = new AG$CompareMode('LESS_EQUAL', 5);
    AG$CompareMode$NEVER_instance = new AG$CompareMode('NEVER', 6);
    AG$CompareMode$NOT_EQUAL_instance = new AG$CompareMode('NOT_EQUAL', 7);
  }
  var AG$CompareMode$ALWAYS_instance;
  function AG$CompareMode$ALWAYS_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$ALWAYS_instance;
  }
  var AG$CompareMode$EQUAL_instance;
  function AG$CompareMode$EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$EQUAL_instance;
  }
  var AG$CompareMode$GREATER_instance;
  function AG$CompareMode$GREATER_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$GREATER_instance;
  }
  var AG$CompareMode$GREATER_EQUAL_instance;
  function AG$CompareMode$GREATER_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$GREATER_EQUAL_instance;
  }
  var AG$CompareMode$LESS_instance;
  function AG$CompareMode$LESS_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$LESS_instance;
  }
  var AG$CompareMode$LESS_EQUAL_instance;
  function AG$CompareMode$LESS_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$LESS_EQUAL_instance;
  }
  var AG$CompareMode$NEVER_instance;
  function AG$CompareMode$NEVER_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$NEVER_instance;
  }
  var AG$CompareMode$NOT_EQUAL_instance;
  function AG$CompareMode$NOT_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$NOT_EQUAL_instance;
  }
  AG$CompareMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompareMode',
    interfaces: [Enum]
  };
  function AG$CompareMode$values() {
    return [AG$CompareMode$ALWAYS_getInstance(), AG$CompareMode$EQUAL_getInstance(), AG$CompareMode$GREATER_getInstance(), AG$CompareMode$GREATER_EQUAL_getInstance(), AG$CompareMode$LESS_getInstance(), AG$CompareMode$LESS_EQUAL_getInstance(), AG$CompareMode$NEVER_getInstance(), AG$CompareMode$NOT_EQUAL_getInstance()];
  }
  AG$CompareMode.values = AG$CompareMode$values;
  function AG$CompareMode$valueOf(name) {
    switch (name) {
      case 'ALWAYS':
        return AG$CompareMode$ALWAYS_getInstance();
      case 'EQUAL':
        return AG$CompareMode$EQUAL_getInstance();
      case 'GREATER':
        return AG$CompareMode$GREATER_getInstance();
      case 'GREATER_EQUAL':
        return AG$CompareMode$GREATER_EQUAL_getInstance();
      case 'LESS':
        return AG$CompareMode$LESS_getInstance();
      case 'LESS_EQUAL':
        return AG$CompareMode$LESS_EQUAL_getInstance();
      case 'NEVER':
        return AG$CompareMode$NEVER_getInstance();
      case 'NOT_EQUAL':
        return AG$CompareMode$NOT_EQUAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.CompareMode.' + name);
    }
  }
  AG$CompareMode.valueOf_61zpoe$ = AG$CompareMode$valueOf;
  function AG$ColorMaskState(red, green, blue, alpha) {
    if (red === void 0)
      red = true;
    if (green === void 0)
      green = true;
    if (blue === void 0)
      blue = true;
    if (alpha === void 0)
      alpha = true;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  AG$ColorMaskState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorMaskState',
    interfaces: []
  };
  AG$ColorMaskState.prototype.component1 = function () {
    return this.red;
  };
  AG$ColorMaskState.prototype.component2 = function () {
    return this.green;
  };
  AG$ColorMaskState.prototype.component3 = function () {
    return this.blue;
  };
  AG$ColorMaskState.prototype.component4 = function () {
    return this.alpha;
  };
  AG$ColorMaskState.prototype.copy_nyyhg$ = function (red, green, blue, alpha) {
    return new AG$ColorMaskState(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  AG$ColorMaskState.prototype.toString = function () {
    return 'ColorMaskState(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  AG$ColorMaskState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  AG$ColorMaskState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function AG$FrontFace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$FrontFace_initFields() {
    AG$FrontFace_initFields = function () {
    };
    AG$FrontFace$BOTH_instance = new AG$FrontFace('BOTH', 0);
    AG$FrontFace$CW_instance = new AG$FrontFace('CW', 1);
    AG$FrontFace$CCW_instance = new AG$FrontFace('CCW', 2);
  }
  var AG$FrontFace$BOTH_instance;
  function AG$FrontFace$BOTH_getInstance() {
    AG$FrontFace_initFields();
    return AG$FrontFace$BOTH_instance;
  }
  var AG$FrontFace$CW_instance;
  function AG$FrontFace$CW_getInstance() {
    AG$FrontFace_initFields();
    return AG$FrontFace$CW_instance;
  }
  var AG$FrontFace$CCW_instance;
  function AG$FrontFace$CCW_getInstance() {
    AG$FrontFace_initFields();
    return AG$FrontFace$CCW_instance;
  }
  AG$FrontFace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrontFace',
    interfaces: [Enum]
  };
  function AG$FrontFace$values() {
    return [AG$FrontFace$BOTH_getInstance(), AG$FrontFace$CW_getInstance(), AG$FrontFace$CCW_getInstance()];
  }
  AG$FrontFace.values = AG$FrontFace$values;
  function AG$FrontFace$valueOf(name) {
    switch (name) {
      case 'BOTH':
        return AG$FrontFace$BOTH_getInstance();
      case 'CW':
        return AG$FrontFace$CW_getInstance();
      case 'CCW':
        return AG$FrontFace$CCW_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.FrontFace.' + name);
    }
  }
  AG$FrontFace.valueOf_61zpoe$ = AG$FrontFace$valueOf;
  function AG$RenderState(depthFunc, depthMask, depthNear, depthFar, lineWidth, frontFace) {
    if (depthFunc === void 0)
      depthFunc = AG$CompareMode$ALWAYS_getInstance();
    if (depthMask === void 0)
      depthMask = true;
    if (depthNear === void 0)
      depthNear = 0.0;
    if (depthFar === void 0)
      depthFar = 1.0;
    if (lineWidth === void 0)
      lineWidth = 1.0;
    if (frontFace === void 0)
      frontFace = AG$FrontFace$BOTH_getInstance();
    this.depthFunc = depthFunc;
    this.depthMask = depthMask;
    this.depthNear = depthNear;
    this.depthFar = depthFar;
    this.lineWidth = lineWidth;
    this.frontFace = frontFace;
  }
  AG$RenderState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderState',
    interfaces: []
  };
  AG$RenderState.prototype.component1 = function () {
    return this.depthFunc;
  };
  AG$RenderState.prototype.component2 = function () {
    return this.depthMask;
  };
  AG$RenderState.prototype.component3 = function () {
    return this.depthNear;
  };
  AG$RenderState.prototype.component4 = function () {
    return this.depthFar;
  };
  AG$RenderState.prototype.component5 = function () {
    return this.lineWidth;
  };
  AG$RenderState.prototype.component6 = function () {
    return this.frontFace;
  };
  AG$RenderState.prototype.copy_ud12ca$ = function (depthFunc, depthMask, depthNear, depthFar, lineWidth, frontFace) {
    return new AG$RenderState(depthFunc === void 0 ? this.depthFunc : depthFunc, depthMask === void 0 ? this.depthMask : depthMask, depthNear === void 0 ? this.depthNear : depthNear, depthFar === void 0 ? this.depthFar : depthFar, lineWidth === void 0 ? this.lineWidth : lineWidth, frontFace === void 0 ? this.frontFace : frontFace);
  };
  AG$RenderState.prototype.toString = function () {
    return 'RenderState(depthFunc=' + Kotlin.toString(this.depthFunc) + (', depthMask=' + Kotlin.toString(this.depthMask)) + (', depthNear=' + Kotlin.toString(this.depthNear)) + (', depthFar=' + Kotlin.toString(this.depthFar)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + (', frontFace=' + Kotlin.toString(this.frontFace)) + ')';
  };
  AG$RenderState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depthFunc) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthMask) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthNear) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthFar) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.frontFace) | 0;
    return result;
  };
  AG$RenderState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depthFunc, other.depthFunc) && Kotlin.equals(this.depthMask, other.depthMask) && Kotlin.equals(this.depthNear, other.depthNear) && Kotlin.equals(this.depthFar, other.depthFar) && Kotlin.equals(this.lineWidth, other.lineWidth) && Kotlin.equals(this.frontFace, other.frontFace)))));
  };
  function AG$StencilState(enabled, triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail, referenceValue, readMask, writeMask) {
    if (enabled === void 0)
      enabled = false;
    if (triangleFace === void 0)
      triangleFace = AG$TriangleFace$FRONT_AND_BACK_getInstance();
    if (compareMode === void 0)
      compareMode = AG$CompareMode$ALWAYS_getInstance();
    if (actionOnBothPass === void 0)
      actionOnBothPass = AG$StencilOp$KEEP_getInstance();
    if (actionOnDepthFail === void 0)
      actionOnDepthFail = AG$StencilOp$KEEP_getInstance();
    if (actionOnDepthPassStencilFail === void 0)
      actionOnDepthPassStencilFail = AG$StencilOp$KEEP_getInstance();
    if (referenceValue === void 0)
      referenceValue = 0;
    if (readMask === void 0)
      readMask = 255;
    if (writeMask === void 0)
      writeMask = 255;
    this.enabled = enabled;
    this.triangleFace = triangleFace;
    this.compareMode = compareMode;
    this.actionOnBothPass = actionOnBothPass;
    this.actionOnDepthFail = actionOnDepthFail;
    this.actionOnDepthPassStencilFail = actionOnDepthPassStencilFail;
    this.referenceValue = referenceValue;
    this.readMask = readMask;
    this.writeMask = writeMask;
  }
  AG$StencilState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StencilState',
    interfaces: []
  };
  AG$StencilState.prototype.component1 = function () {
    return this.enabled;
  };
  AG$StencilState.prototype.component2 = function () {
    return this.triangleFace;
  };
  AG$StencilState.prototype.component3 = function () {
    return this.compareMode;
  };
  AG$StencilState.prototype.component4 = function () {
    return this.actionOnBothPass;
  };
  AG$StencilState.prototype.component5 = function () {
    return this.actionOnDepthFail;
  };
  AG$StencilState.prototype.component6 = function () {
    return this.actionOnDepthPassStencilFail;
  };
  AG$StencilState.prototype.component7 = function () {
    return this.referenceValue;
  };
  AG$StencilState.prototype.component8 = function () {
    return this.readMask;
  };
  AG$StencilState.prototype.component9 = function () {
    return this.writeMask;
  };
  AG$StencilState.prototype.copy_7kk0z5$ = function (enabled, triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail, referenceValue, readMask, writeMask) {
    return new AG$StencilState(enabled === void 0 ? this.enabled : enabled, triangleFace === void 0 ? this.triangleFace : triangleFace, compareMode === void 0 ? this.compareMode : compareMode, actionOnBothPass === void 0 ? this.actionOnBothPass : actionOnBothPass, actionOnDepthFail === void 0 ? this.actionOnDepthFail : actionOnDepthFail, actionOnDepthPassStencilFail === void 0 ? this.actionOnDepthPassStencilFail : actionOnDepthPassStencilFail, referenceValue === void 0 ? this.referenceValue : referenceValue, readMask === void 0 ? this.readMask : readMask, writeMask === void 0 ? this.writeMask : writeMask);
  };
  AG$StencilState.prototype.toString = function () {
    return 'StencilState(enabled=' + Kotlin.toString(this.enabled) + (', triangleFace=' + Kotlin.toString(this.triangleFace)) + (', compareMode=' + Kotlin.toString(this.compareMode)) + (', actionOnBothPass=' + Kotlin.toString(this.actionOnBothPass)) + (', actionOnDepthFail=' + Kotlin.toString(this.actionOnDepthFail)) + (', actionOnDepthPassStencilFail=' + Kotlin.toString(this.actionOnDepthPassStencilFail)) + (', referenceValue=' + Kotlin.toString(this.referenceValue)) + (', readMask=' + Kotlin.toString(this.readMask)) + (', writeMask=' + Kotlin.toString(this.writeMask)) + ')';
  };
  AG$StencilState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.enabled) | 0;
    result = result * 31 + Kotlin.hashCode(this.triangleFace) | 0;
    result = result * 31 + Kotlin.hashCode(this.compareMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnBothPass) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnDepthFail) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnDepthPassStencilFail) | 0;
    result = result * 31 + Kotlin.hashCode(this.referenceValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.readMask) | 0;
    result = result * 31 + Kotlin.hashCode(this.writeMask) | 0;
    return result;
  };
  AG$StencilState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.enabled, other.enabled) && Kotlin.equals(this.triangleFace, other.triangleFace) && Kotlin.equals(this.compareMode, other.compareMode) && Kotlin.equals(this.actionOnBothPass, other.actionOnBothPass) && Kotlin.equals(this.actionOnDepthFail, other.actionOnDepthFail) && Kotlin.equals(this.actionOnDepthPassStencilFail, other.actionOnDepthPassStencilFail) && Kotlin.equals(this.referenceValue, other.referenceValue) && Kotlin.equals(this.readMask, other.readMask) && Kotlin.equals(this.writeMask, other.writeMask)))));
  };
  AG.prototype.draw_gb6ti8$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, scissor) {
    if (indices === void 0)
      indices = null;
    if (offset === void 0)
      offset = 0;
    if (blending === void 0)
      blending = AG$Blending$Companion_getInstance().NORMAL;
    if (uniforms === void 0)
      uniforms = AG$UniformValues$Companion_getInstance().EMPTY_8be2vx$;
    if (stencil === void 0)
      stencil = this.dummyStencilState_6gllmd$_0;
    if (colorMask === void 0)
      colorMask = this.dummyColorMaskState_s1o3tk$_0;
    if (scissor === void 0)
      scissor = null;
    this.draw_36194n$(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, this.dummyRenderState_xrscgh$_0, scissor);
  };
  AG.prototype.draw_36194n$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
  };
  AG.prototype.draw_36194n$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor, callback$default) {
    if (indices === void 0)
      indices = null;
    if (offset === void 0)
      offset = 0;
    if (blending === void 0)
      blending = AG$Blending$Companion_getInstance().NORMAL;
    if (uniforms === void 0)
      uniforms = AG$UniformValues$Companion_getInstance().EMPTY_8be2vx$;
    if (stencil === void 0)
      stencil = this.dummyStencilState_6gllmd$_0;
    if (colorMask === void 0)
      colorMask = this.dummyColorMaskState_s1o3tk$_0;
    if (renderState === void 0)
      renderState = this.dummyRenderState_xrscgh$_0;
    if (scissor === void 0)
      scissor = null;
    callback$default ? callback$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) : this.draw_36194n$$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor);
  };
  AG.prototype.checkBuffers_p517yr$ = function (vertices, indices) {
    if (vertices.kind !== AG$Buffer$Kind$VERTEX_getInstance())
      invalidOp('Not a VertexBuffer');
    if (indices != null && indices.kind !== AG$Buffer$Kind$INDEX_getInstance())
      invalidOp('Not a IndexBuffer');
  };
  AG.prototype.disposeTemporalPerFrameStuff = function () {
  };
  function AG$BaseRenderBuffer() {
  }
  AG$BaseRenderBuffer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseRenderBuffer',
    interfaces: []
  };
  function AG$RenderBuffer($outer) {
    this.$outer = $outer;
    this.id_9ezup$_0 = -1;
    this.cachedTexVersion_5oiwyh$_0 = -1;
    this._tex_wlye6q$_0 = null;
    this.width_ro1y9g$_0 = 0;
    this.height_3jy0zx$_0 = 0;
    this.dirty = false;
  }
  Object.defineProperty(AG$RenderBuffer.prototype, 'id', {
    get: function () {
      return this.id_9ezup$_0;
    }
  });
  Object.defineProperty(AG$RenderBuffer.prototype, 'tex', {
    get: function () {
      if (this.cachedTexVersion_5oiwyh$_0 !== this.$outer.contextVersion) {
        this.cachedTexVersion_5oiwyh$_0 = this.$outer.contextVersion;
        var $receiver = this.$outer.createTexture_6taknv$(true).manualUpload();
        $receiver.isFbo = true;
        this._tex_wlye6q$_0 = $receiver;
      }
      return ensureNotNull(this._tex_wlye6q$_0);
    }
  });
  Object.defineProperty(AG$RenderBuffer.prototype, 'width', {
    get: function () {
      return this.width_ro1y9g$_0;
    },
    set: function (width) {
      this.width_ro1y9g$_0 = width;
    }
  });
  Object.defineProperty(AG$RenderBuffer.prototype, 'height', {
    get: function () {
      return this.height_3jy0zx$_0;
    },
    set: function (height) {
      this.height_3jy0zx$_0 = height;
    }
  });
  AG$RenderBuffer.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
    this.dirty = true;
  };
  AG$RenderBuffer.prototype.set = function () {
  };
  AG$RenderBuffer.prototype.readBitmap_59u9qz$ = function (bmp) {
    this.$outer.readColor_59u9qz$(bmp);
  };
  AG$RenderBuffer.prototype.readDepth_l5lmba$ = function (width, height, out) {
    this.$outer.readDepth_l5lmba$(width, height, out);
  };
  AG$RenderBuffer.prototype.close = function () {
  };
  AG$RenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderBuffer',
    interfaces: [AG$BaseRenderBuffer, Closeable]
  };
  AG.prototype.createRenderBuffer = function () {
    return new AG$RenderBuffer(this);
  };
  AG.prototype.flip = function () {
    this.disposeTemporalPerFrameStuff();
    this.renderBuffers.free_p1ys8y$(this.frameRenderBuffers);
    if (!this.frameRenderBuffers.isEmpty())
      this.frameRenderBuffers.clear();
    this.flipInternal();
  };
  AG.prototype.flipInternal = function () {
  };
  AG.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
  };
  AG.prototype.clear_yvqa77$ = function (color_0, depth, stencil, clearColor, clearDepth, clearStencil, callback$default) {
    if (color_0 === void 0)
      color_0 = color.Colors.TRANSPARENT_BLACK;
    if (depth === void 0)
      depth = 1.0;
    if (stencil === void 0)
      stencil = 0;
    if (clearColor === void 0)
      clearColor = true;
    if (clearDepth === void 0)
      clearDepth = true;
    if (clearStencil === void 0)
      clearStencil = true;
    callback$default ? callback$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil) : this.clear_yvqa77$$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil);
  };
  Object.defineProperty(AG.prototype, 'renderingToTexture', {
    get: function () {
      return this.currentRenderBuffer !== this.mainRenderBuffer;
    }
  });
  AG.prototype.backupTexture_yyos6h$ = defineInlineFunction('korag.com.soywiz.korag.AG.backupTexture_yyos6h$', function (tex, callback) {
    if (tex != null) {
      this.readColorTexture_l6jlr1$(tex, this.backWidth, this.backHeight);
    }
    try {
      callback();
    }
    finally {
      if (tex != null)
        this.drawTexture_iljvab$(tex);
    }
  });
  AG.prototype.setRenderBufferTemporally_846is4$ = defineInlineFunction('korag.com.soywiz.korag.AG.setRenderBufferTemporally_846is4$', function (rb, callback) {
    var old = this.setRenderBuffer_m67x29$(rb);
    try {
      callback();
    }
    finally {
      this.setRenderBuffer_m67x29$(old);
    }
  });
  AG.prototype.renderToTexture_kwdgib$ = defineInlineFunction('korag.com.soywiz.korag.AG.renderToTexture_kwdgib$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var color = _.$$importsForInline$$.korim.com.soywiz.korim.color;
    function AG$renderToTexture$lambda(it) {
      return Unit;
    }
    return function (width, height, render, use) {
      if (use === void 0)
        use = AG$renderToTexture$lambda;
      var rb = this.renderBuffers.alloc();
      this.frameRenderBuffers.add_11rb$(rb);
      var oldRenderBuffer = this.currentRenderBuffer;
      rb.setSize_vux9f0$(width, height);
      this.setRenderBuffer_m67x29$(rb);
      try {
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        render();
      }
      finally {
        this.setRenderBuffer_m67x29$(oldRenderBuffer);
      }
      try {
        use(rb.tex);
      }
      finally {
        this.frameRenderBuffers.remove_11rb$(rb);
        this.renderBuffers.free_11rb$(rb);
      }
    };
  }));
  AG.prototype.setRenderBuffer_m67x29$ = function (renderBuffer) {
    var old = this.currentRenderBuffer;
    this.currentRenderBuffer = renderBuffer;
    renderBuffer.set();
    return old;
  };
  AG.prototype.setBackBuffer_vux9f0$ = function (width, height) {
  };
  AG.prototype.renderToBitmap_1xki6w$ = defineInlineFunction('korag.com.soywiz.korag.AG.renderToBitmap_1xki6w$', wrapFunction(function () {
    var color = _.$$importsForInline$$.korim.com.soywiz.korim.color;
    return function (bmp, render) {
      var width = bmp.width;
      var height = bmp.height;
      var rb = this.renderBuffers.alloc();
      this.frameRenderBuffers.add_11rb$(rb);
      var oldRenderBuffer = this.currentRenderBuffer;
      rb.setSize_vux9f0$(width, height);
      this.setRenderBuffer_m67x29$(rb);
      try {
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        render();
        this.readColor_59u9qz$(bmp);
      }
      finally {
        this.setRenderBuffer_m67x29$(oldRenderBuffer);
      }
      try {
        rb.tex;
      }
      finally {
        this.frameRenderBuffers.remove_11rb$(rb);
        this.renderBuffers.free_11rb$(rb);
      }
    };
  }));
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  AG.prototype.readColor_59u9qz$ = function (bitmap) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readDepth_l5lmba$ = function (width, height, out) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readDepth_say4ff$ = function (out) {
    this.readDepth_l5lmba$(out.width, out.height, out.data);
  };
  AG.prototype.readColorTexture_l6jlr1$$default = function (texture, width, height) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readColorTexture_l6jlr1$ = function (texture, width, height, callback$default) {
    if (width === void 0)
      width = this.backWidth;
    if (height === void 0)
      height = this.backHeight;
    callback$default ? callback$default(texture, width, height) : this.readColorTexture_l6jlr1$$default(texture, width, height);
  };
  AG.prototype.readColor = function () {
    var $receiver = new Bitmap32(this.backWidth, this.backHeight);
    this.readColor_59u9qz$($receiver);
    return $receiver;
  };
  var FloatArray2_init = $module$kds.com.soywiz.kds.FloatArray2;
  AG.prototype.readDepth = function () {
    var width = this.backWidth;
    var height = this.backHeight;
    var tmp$;
    var array = new Float32Array(Kotlin.imul(width, height));
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = 0.0;
    }
    var $receiver = new FloatArray2_init(width, height, Kotlin.isFloatArray(tmp$ = array) ? tmp$ : throwCCE());
    this.readDepth_say4ff$($receiver);
    return $receiver;
  };
  function AG$TextureDrawer($outer) {
    this.$outer = $outer;
    this.VERTEX_COUNT = 4;
    this.vertices = this.$outer.createBuffer_g6fstm$(AG$Buffer$Kind$VERTEX_getInstance());
    this.vertexLayout = VertexLayout_init_0([DefaultShaders_getInstance().a_Pos, DefaultShaders_getInstance().a_Tex]);
    this.verticesData = FBuffer.Companion.invoke_za3lpa$(Kotlin.imul(this.VERTEX_COUNT, this.vertexLayout.totalSize));
    this.program = new Program(VertexShader_0(AG$TextureDrawer$program$lambda), FragmentShader_0(AG$TextureDrawer$program$lambda_0));
    this.uniforms = new AG$UniformValues();
  }
  AG$TextureDrawer.prototype.setVertex_xpxj32$ = function (n, px, py, tx, ty) {
    var offset = n * 4 | 0;
    this.verticesData.setAlignedFloat32_24o109$(offset + 0 | 0, px);
    this.verticesData.setAlignedFloat32_24o109$(offset + 1 | 0, py);
    this.verticesData.setAlignedFloat32_24o109$(offset + 2 | 0, tx);
    this.verticesData.setAlignedFloat32_24o109$(offset + 3 | 0, ty);
  };
  AG$TextureDrawer.prototype.draw_yd8599$ = function (tex, left, top, right, bottom) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.uniforms.set_8gg9u8$(DefaultShaders_getInstance().u_Tex, new AG$TextureUnit(tex));
    var texLeft = -1.0;
    var texRight = +1.0;
    var texTop = -1.0;
    var texBottom = +1.0;
    this.setVertex_xpxj32$(0, left, top, texLeft, texTop);
    this.setVertex_xpxj32$(1, right, top, texRight, texTop);
    this.setVertex_xpxj32$(2, left, bottom, texLeft, texBottom);
    this.setVertex_xpxj32$(3, right, bottom, texRight, texBottom);
    this.vertices.upload_khrw8o$(this.verticesData);
    tmp$ = this.vertices;
    tmp$_0 = this.program;
    tmp$_1 = AG$DrawType$TRIANGLE_STRIP_getInstance();
    tmp$_2 = this.vertexLayout;
    tmp$_3 = this.uniforms;
    tmp$_4 = AG$Blending$Companion_getInstance().NONE;
    this.$outer.draw_gb6ti8$(tmp$, tmp$_0, tmp$_1, tmp$_2, 4, void 0, void 0, tmp$_4, tmp$_3);
  };
  function AG$TextureDrawer$program$lambda($receiver) {
    var $receiver_0 = DefaultShaders_getInstance();
    $receiver.setTo_2oogdr$($receiver_0.v_Tex, $receiver_0.a_Tex);
    $receiver.setTo_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver_0.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function AG$TextureDrawer$program$lambda_0($receiver) {
    var $receiver_0 = DefaultShaders_getInstance();
    $receiver.setTo_2oogdr$($receiver.out, $receiver.texture2D_q0hzsk$($receiver_0.u_Tex, $receiver.get_hhgt4v$($receiver_0.v_Tex, 'xy')));
    return Unit;
  }
  AG$TextureDrawer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureDrawer',
    interfaces: []
  };
  Object.defineProperty(AG.prototype, 'textureDrawer', {
    get: function () {
      return this.textureDrawer_p4bz2y$_0.value;
    }
  });
  AG.prototype.drawTexture_iljvab$ = function (tex) {
    this.textureDrawer.draw_yd8599$(tex, -1.0, +1.0, +1.0, -1.0);
  };
  Object.defineProperty(AG.prototype, 'drawTempTexture_npdcj3$_0', {
    get: function () {
      return this.drawTempTexture_npdcj3$_g2cado$_0.value;
    }
  });
  AG.prototype.drawBitmap_uler2c$ = function (bmp) {
    this.drawTempTexture_npdcj3$_0.upload_nn58bg$(bmp, false);
    this.drawTexture_iljvab$(this.drawTempTexture_npdcj3$_0);
    this.drawTempTexture_npdcj3$_0.upload_2ug3a3$(bitmap.Bitmaps.transparent);
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function AG$UniformValues() {
    AG$UniformValues$Companion_getInstance();
    this._uniforms_0 = ArrayList_init();
    this._values_0 = ArrayList_init();
    var tmp$, tmp$_0;
    this.uniforms = Kotlin.isType(tmp$ = this._uniforms_0, List) ? tmp$ : throwCCE();
    this.values = Kotlin.isType(tmp$_0 = this._values_0, List) ? tmp$_0 : throwCCE();
  }
  function AG$UniformValues$Companion() {
    AG$UniformValues$Companion_instance = this;
    this.EMPTY_8be2vx$ = new AG$UniformValues();
  }
  AG$UniformValues$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$UniformValues$Companion_instance = null;
  function AG$UniformValues$Companion_getInstance() {
    if (AG$UniformValues$Companion_instance === null) {
      new AG$UniformValues$Companion();
    }
    return AG$UniformValues$Companion_instance;
  }
  Object.defineProperty(AG$UniformValues.prototype, 'keys', {
    get: function () {
      return this.uniforms;
    }
  });
  Object.defineProperty(AG$UniformValues.prototype, 'size', {
    get: function () {
      return this._uniforms_0.size;
    }
  });
  AG$UniformValues.prototype.clear = function () {
    this._uniforms_0.clear();
    this._values_0.clear();
  };
  AG$UniformValues.prototype.get_2f4vi3$ = function (uniform) {
    var tmp$;
    tmp$ = this._uniforms_0.size;
    for (var n = 0; n < tmp$; n++) {
      if (equals(this._uniforms_0.get_za3lpa$(n).name, uniform.name))
        return this._values_0.get_za3lpa$(n);
    }
    return null;
  };
  AG$UniformValues.prototype.set_8gg9u8$ = function (uniform, value) {
    this.put_8gg9u8$(uniform, value);
  };
  AG$UniformValues.prototype.putOrRemove_lyfqxb$ = function (uniform, value) {
    if (value == null) {
      this.remove_2f4vi3$(uniform);
    }
     else {
      this.put_8gg9u8$(uniform, value);
    }
  };
  AG$UniformValues.prototype.put_8gg9u8$ = function (uniform, value) {
    var tmp$;
    tmp$ = this._uniforms_0.size;
    for (var n = 0; n < tmp$; n++) {
      if (equals(this._uniforms_0.get_za3lpa$(n).name, uniform.name)) {
        this._values_0.set_wxm5ur$(n, value);
        return;
      }
    }
    this._uniforms_0.add_11rb$(uniform);
    this._values_0.add_11rb$(value);
  };
  AG$UniformValues.prototype.remove_2f4vi3$ = function (uniform) {
    var tmp$;
    tmp$ = this._uniforms_0.size;
    for (var n = 0; n < tmp$; n++) {
      if (equals(this._uniforms_0.get_za3lpa$(n).name, uniform.name)) {
        this._uniforms_0.removeAt_za3lpa$(n);
        this._values_0.removeAt_za3lpa$(n);
        return;
      }
    }
  };
  AG$UniformValues.prototype.put_huk8u$ = function (uniforms) {
    var tmp$;
    tmp$ = uniforms.size;
    for (var n = 0; n < tmp$; n++) {
      this.put_8gg9u8$(uniforms._uniforms_0.get_za3lpa$(n), uniforms._values_0.get_za3lpa$(n));
    }
  };
  AG$UniformValues.prototype.setTo_huk8u$ = function (uniforms) {
    this.clear();
    this.put_huk8u$(uniforms);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  AG$UniformValues.prototype.toString = function () {
    var $receiver = zip(this.keys, this.values);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.first.toString() + '=' + item.second.toString());
    }
    return '{' + joinToString(destination, ', ') + '}';
  };
  AG$UniformValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformValues',
    interfaces: []
  };
  function AG$AG$UniformValues_init(pairs, $this) {
    $this = $this || Object.create(AG$UniformValues.prototype);
    AG$UniformValues.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var pair = pairs[tmp$];
      $this.put_8gg9u8$(pair.first, pair.second);
    }
    return $this;
  }
  Object.defineProperty(AG.prototype, 'extra', {
    get: function () {
      return this.$delegate_y4f8iy$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_y4f8iy$_0.extra = tmp$;
    }
  });
  function AG$dummyTexture$lambda(this$AG) {
    return function () {
      return this$AG.createTexture();
    };
  }
  function AG$renderBuffers$lambda(this$AG) {
    return function (it) {
      return this$AG.createRenderBuffer();
    };
  }
  function AG$mainRenderBuffer$ObjectLiteral(this$AG) {
    this.this$AG = this$AG;
    this.width_z7cjf6$_0 = 128;
    this.height_gyu105$_0 = 128;
  }
  Object.defineProperty(AG$mainRenderBuffer$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_z7cjf6$_0;
    },
    set: function (width) {
      this.width_z7cjf6$_0 = width;
    }
  });
  Object.defineProperty(AG$mainRenderBuffer$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_gyu105$_0;
    },
    set: function (height) {
      this.height_gyu105$_0 = height;
    }
  });
  AG$mainRenderBuffer$ObjectLiteral.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
  };
  AG$mainRenderBuffer$ObjectLiteral.prototype.set = function () {
    this.this$AG.setBackBuffer_vux9f0$(this.width, this.height);
  };
  AG$mainRenderBuffer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AG$BaseRenderBuffer]
  };
  function AG$textureDrawer$lambda(this$AG) {
    return function () {
      return new AG$TextureDrawer(this$AG);
    };
  }
  function AG$drawTempTexture$lambda(this$AG) {
    return function () {
      return this$AG.createTexture();
    };
  }
  AG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AG',
    interfaces: [Extra]
  };
  function toRenderFboIntoBack($receiver) {
    return $receiver;
  }
  function toRenderImageIntoFbo($receiver) {
    return $receiver;
  }
  function ProgramWithDefault(vertex, fragment, name) {
    if (vertex === void 0)
      vertex = DefaultShaders_getInstance().VERTEX_DEFAULT;
    if (fragment === void 0)
      fragment = DefaultShaders_getInstance().FRAGMENT_SOLID_COLOR;
    if (name === void 0)
      name = 'program';
    return new Program(vertex, fragment, name);
  }
  function DefaultShaders() {
    DefaultShaders_instance = this;
    this.u_Tex = Uniform_init('u_Tex', VarType$TextureUnit_getInstance());
    this.u_ProjMat = Uniform_init('u_ProjMat', VarType$Mat4_getInstance());
    this.u_ViewMat = Uniform_init('u_ViewMat', VarType$Mat4_getInstance());
    this.a_Pos = Attribute_init('a_Pos', VarType$Float2_getInstance(), false);
    this.a_Tex = Attribute_init('a_Tex', VarType$Float2_getInstance(), false);
    this.a_Col = Attribute_init('a_Col', VarType$Byte4_getInstance(), true);
    this.v_Tex = Varying_init('v_Tex', VarType$Float2_getInstance());
    this.v_Col = Varying_init('v_Col', VarType$Byte4_getInstance());
    this.t_Temp0 = Temp_init(0, VarType$Float4_getInstance());
    this.t_Temp1 = Temp_init(1, VarType$Float4_getInstance());
    this.textureUnit = new AG$TextureUnit();
    this.FORMAT_DEFAULT = VertexLayout_init_0([this.a_Pos, this.a_Tex, this.a_Col]);
    this.LAYOUT_DEFAULT = VertexLayout_init_0([this.a_Pos, this.a_Tex, this.a_Col]);
    this.VERTEX_DEFAULT = VertexShader_0(DefaultShaders$VERTEX_DEFAULT$lambda(this));
    this.FRAGMENT_DEBUG = FragmentShader_0(DefaultShaders$FRAGMENT_DEBUG$lambda);
    this.FRAGMENT_SOLID_COLOR = FragmentShader_0(DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this));
    this.PROGRAM_TINTED_TEXTURE = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_TINTED_TEXTURE_PREMULT = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_SOLID_COLOR = new Program(this.VERTEX_DEFAULT, this.FRAGMENT_SOLID_COLOR, 'PROGRAM_SOLID_COLOR');
    this.FORMAT_DEBUG = VertexLayout_init_0([this.a_Pos]);
    this.LAYOUT_DEBUG = VertexLayout_init_0([this.a_Pos]);
    this.PROGRAM_DEBUG = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG$lambda_0), 'PROGRAM_DEBUG');
    this.PROGRAM_DEBUG_WITH_PROJ = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0), 'PROGRAM_DEBUG_WITH_PROJ');
    this.PROGRAM_DEFAULT_lphlbv$_0 = lazy(DefaultShaders$PROGRAM_DEFAULT$lambda(this));
  }
  Object.defineProperty(DefaultShaders.prototype, 'PROGRAM_DEFAULT', {
    get: function () {
      return this.PROGRAM_DEFAULT_lphlbv$_0.value;
    }
  });
  DefaultShaders.prototype.invoke_jt3evg$ = defineInlineFunction('korag.com.soywiz.korag.DefaultShaders.invoke_jt3evg$', function (callback) {
    callback(this);
    return this;
  });
  function DefaultShaders$VERTEX_DEFAULT$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(this$DefaultShaders.v_Tex, this$DefaultShaders.a_Tex);
      $receiver.SET_q0hzsk$(this$DefaultShaders.v_Col, this$DefaultShaders.a_Col);
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.times_2oogdr$(this$DefaultShaders.u_ProjMat, this$DefaultShaders.u_ViewMat), $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  function DefaultShaders$FRAGMENT_DEBUG$lambda($receiver) {
    $receiver.set_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.set_2oogdr$($receiver.out, this$DefaultShaders.v_Col);
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.get_hhgt4v$($receiver.texture2D_q0hzsk$(this$DefaultShaders.u_Tex, $receiver.get_hhgt4v$(this$DefaultShaders.v_Tex, 'xy')), 'rgba'), this$DefaultShaders.v_Col));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(this$DefaultShaders.t_Temp0, $receiver.texture2D_q0hzsk$(this$DefaultShaders.u_Tex, $receiver.get_hhgt4v$(this$DefaultShaders.v_Tex, 'xy')));
      $receiver.SET_q0hzsk$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'rgb'), $receiver.div_2oogdr$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'rgb'), $receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'a')));
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp0, 'rgba'), this$DefaultShaders.v_Col));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG$lambda_0($receiver) {
    $receiver.set_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$(this$DefaultShaders.u_ProjMat, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0($receiver) {
    $receiver.SET_q0hzsk$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$PROGRAM_DEFAULT$lambda(this$DefaultShaders) {
    return function () {
      return this$DefaultShaders.PROGRAM_TINTED_TEXTURE_PREMULT;
    };
  }
  DefaultShaders.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultShaders',
    interfaces: []
  };
  var DefaultShaders_instance = null;
  function DefaultShaders_getInstance() {
    if (DefaultShaders_instance === null) {
      new DefaultShaders();
    }
    return DefaultShaders_instance;
  }
  var KORAG_VERSION;
  function DummyAG(width, height) {
    if (width === void 0)
      width = 1280;
    if (height === void 0)
      height = 720;
    AG.call(this);
    this.nativeComponent_kz1fki$_0 = new Any();
    this.backWidth_n6snhn$_0 = width;
    this.backHeight_hftjv2$_0 = height;
  }
  Object.defineProperty(DummyAG.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_kz1fki$_0;
    }
  });
  Object.defineProperty(DummyAG.prototype, 'backWidth', {
    get: function () {
      return this.backWidth_n6snhn$_0;
    },
    set: function (value) {
      this.backWidth_n6snhn$_0 = value;
    }
  });
  Object.defineProperty(DummyAG.prototype, 'backHeight', {
    get: function () {
      return this.backHeight_hftjv2$_0;
    },
    set: function (value) {
      this.backHeight_hftjv2$_0 = value;
    }
  });
  DummyAG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyAG',
    interfaces: [AG]
  };
  function LogAG(width, height) {
    if (width === void 0)
      width = 640;
    if (height === void 0)
      height = 480;
    AG.call(this);
    this.log = ArrayList_init();
    this.nativeComponent_kfwasu$_0 = new Any();
    this.ready();
    this.backWidth_md67wn$_0 = width;
    this.backHeight_82hv7y$_0 = height;
    this.textureId_gyj2n2$_0 = 0;
    this.bufferId_lvkfs1$_0 = 0;
    this.renderBufferId_2y4l0r$_0 = 0;
  }
  Object.defineProperty(LogAG.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_kfwasu$_0;
    }
  });
  LogAG.prototype.log_61zpoe$ = function (str) {
    this.log.add_11rb$(str);
  };
  LogAG.prototype.getLogAsString = function () {
    return joinToString(this.log, '\n');
  };
  LogAG.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
    this.log_61zpoe$('clear(' + color + ', ' + depth + ', ' + stencil + ', ' + clearColor + ', ' + clearDepth + ', ' + clearStencil + ')');
  };
  Object.defineProperty(LogAG.prototype, 'backWidth', {
    get: function () {
      return this.backWidth_md67wn$_0;
    },
    set: function (value) {
      this.backWidth_md67wn$_0 = value;
      this.log_61zpoe$('backWidth = ' + value);
    }
  });
  Object.defineProperty(LogAG.prototype, 'backHeight', {
    get: function () {
      return this.backHeight_82hv7y$_0;
    },
    set: function (value) {
      this.backHeight_82hv7y$_0 = value;
      this.log_61zpoe$('backHeight = ' + value);
    }
  });
  LogAG.prototype.repaint = function () {
    this.log_61zpoe$('repaint()');
  };
  LogAG.prototype.dispose = function () {
    this.log_61zpoe$('dispose()');
  };
  function LogAG$LogTexture($outer, id, premultiplied) {
    this.$outer = $outer;
    AG$Texture.call(this, this.$outer);
    this.id = id;
    this.premultiplied_pk2gt9$_0 = premultiplied;
  }
  Object.defineProperty(LogAG$LogTexture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_pk2gt9$_0;
    }
  });
  LogAG$LogTexture.prototype.uploadedSource = function () {
    this.$outer.log_61zpoe$(this.toString() + '.uploadedBitmap(' + this.source + ', ' + this.source.width + ', ' + this.source.height + ')');
  };
  LogAG$LogTexture.prototype.close = function () {
    AG$Texture.prototype.close.call(this);
    this.$outer.log_61zpoe$(this.toString() + '.close()');
  };
  LogAG$LogTexture.prototype.toString = function () {
    return 'Texture[' + this.id + ']';
  };
  LogAG$LogTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogTexture',
    interfaces: [AG$Texture]
  };
  function LogAG$LogBuffer($outer, id, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.id = id;
  }
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmem', {
    get: function () {
      return this.mem;
    }
  });
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmemOffset', {
    get: function () {
      return this.memOffset;
    }
  });
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmemLength', {
    get: function () {
      return this.memLength;
    }
  });
  LogAG$LogBuffer.prototype.afterSetMem = function () {
    this.$outer.log_61zpoe$(this.toString() + '.afterSetMem(mem[' + ensureNotNull(this.mem).size + '])');
  };
  LogAG$LogBuffer.prototype.close = function () {
    this.$outer.log_61zpoe$(this.toString() + '.close()');
  };
  LogAG$LogBuffer.prototype.toString = function () {
    return 'Buffer[' + this.id + ']';
  };
  LogAG$LogBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogBuffer',
    interfaces: [AG$Buffer]
  };
  function LogAG$LogRenderBuffer($outer, id) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.id_z0ejyl$_0 = id;
  }
  Object.defineProperty(LogAG$LogRenderBuffer.prototype, 'id', {
    get: function () {
      return this.id_z0ejyl$_0;
    }
  });
  LogAG$LogRenderBuffer.prototype.setSize_vux9f0$ = function (width, height) {
    this.$outer.log_61zpoe$(this.toString() + '.setSize(' + width + ', ' + height + ')');
  };
  LogAG$LogRenderBuffer.prototype.set = function () {
    this.$outer.log_61zpoe$(this.toString() + '.set()');
  };
  LogAG$LogRenderBuffer.prototype.close = function () {
    this.$outer.log_61zpoe$(this.toString() + '.close()');
  };
  LogAG$LogRenderBuffer.prototype.toString = function () {
    return 'RenderBuffer[' + this.id + ']';
  };
  LogAG$LogRenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  LogAG.prototype.createTexture_6taknv$ = function (premultiplied) {
    var tmp$;
    var $receiver = new LogAG$LogTexture(this, (tmp$ = this.textureId_gyj2n2$_0, this.textureId_gyj2n2$_0 = tmp$ + 1 | 0, tmp$), premultiplied);
    this.log_61zpoe$('createTexture():' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.createBuffer_g6fstm$ = function (kind) {
    var tmp$;
    var $receiver = new LogAG$LogBuffer(this, (tmp$ = this.bufferId_lvkfs1$_0, this.bufferId_lvkfs1$_0 = tmp$ + 1 | 0, tmp$), kind);
    this.log_61zpoe$('createBuffer(' + kind + '):' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.draw_36194n$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    try {
      this.log_61zpoe$('draw(vertices=' + vertices + ', indices=' + toString(indices) + ', program=' + program + ', type=' + type + ', vertexLayout=' + vertexLayout + ', vertexCount=' + vertexCount + ', offset=' + offset + ', blending=' + blending + ', uniforms=' + uniforms + ', stencil=' + stencil + ', colorMask=' + colorMask + ')');
      var missingUniforms = minus(program.uniforms, uniforms.keys);
      var extraUniforms = minus_0(uniforms.keys, program.uniforms);
      var missingAttributes = minus(toSet(vertexLayout.attributes), program.attributes);
      var extraAttributes = minus(program.attributes, toSet(vertexLayout.attributes));
      if (!missingUniforms.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Missing:' + missingUniforms);
      if (!extraUniforms.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Unexpected:' + extraUniforms);
      if (!missingAttributes.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Missing:' + missingAttributes);
      if (!extraAttributes.isEmpty())
        this.log_61zpoe$('::draw.ERROR.Unexpected:' + extraAttributes);
      var vertexBuffer = Kotlin.isType(tmp$ = vertices, LogAG$LogBuffer) ? tmp$ : throwCCE();
      var vertexMem = ensureNotNull(vertexBuffer.logmem);
      var vertexMemOffset = vertexBuffer.logmemOffset;
      var indexMem = (Kotlin.isType(tmp$_0 = indices, LogAG$LogBuffer) ? tmp$_0 : throwCCE()).logmem;
      var $receiver = until(offset, offset + vertexCount | 0);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination.add_11rb$(ensureNotNull(indexMem).getAlignedInt16_za3lpa$(item));
      }
      var _indices = destination;
      this.log_61zpoe$('::draw.indices=' + _indices);
      tmp$_1 = distinct(sorted(_indices)).iterator();
      while (tmp$_1.hasNext()) {
        var index = tmp$_1.next();
        var os = index * vertexLayout.totalSize;
        var attributes = ArrayList_init();
        tmp$_2 = zip(vertexLayout.attributes, vertexLayout.attributePositions).iterator();
        while (tmp$_2.hasNext()) {
          var tmp$_5 = tmp$_2.next();
          var attribute = tmp$_5.component1()
          , pos = tmp$_5.component2();
          var o = os + pos + vertexMemOffset | 0;
          switch (attribute.type.name) {
            case 'Int1':
              tmp$_3 = 'int(' + toString(vertexMem.getUnalignedInt32_za3lpa$(o + 0 | 0)) + ')';
              break;
            case 'Float1':
              tmp$_3 = 'float(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ')';
              break;
            case 'Float2':
              tmp$_3 = 'vec2(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 4 | 0)) + ')';
              break;
            case 'Float3':
              tmp$_3 = 'vec3(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 4 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 8 | 0)) + ')';
              break;
            case 'Byte4':
              tmp$_3 = 'byte4(' + toString(vertexMem.getUnalignedInt32_za3lpa$(o + 0 | 0)) + ')';
              break;
            default:tmp$_3 = 'Unsupported(' + attribute.type + ')';
              break;
          }
          var info = tmp$_3;
          var element = attribute.name + '[' + info + ']';
          attributes.add_11rb$(element);
        }
        this.log_61zpoe$('::draw.vertex[' + index + ']: ' + joinToString(attributes, ', '));
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.log_61zpoe$('ERROR: ' + toString(e.message));
        printStackTrace(e);
      }
       else
        throw e;
    }
  };
  LogAG.prototype.disposeTemporalPerFrameStuff = function () {
    this.log_61zpoe$('disposeTemporalPerFrameStuff()');
  };
  LogAG.prototype.createRenderBuffer = function () {
    var tmp$;
    var $receiver = new LogAG$LogRenderBuffer(this, (tmp$ = this.renderBufferId_2y4l0r$_0, this.renderBufferId_2y4l0r$_0 = tmp$ + 1 | 0, tmp$));
    this.log_61zpoe$('createRenderBuffer():' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.flipInternal = function () {
    this.log_61zpoe$('flipInternal()');
  };
  LogAG.prototype.readColor_59u9qz$ = function (bitmap) {
    this.log_61zpoe$(this.toString() + '.readBitmap(' + bitmap + ')');
  };
  LogAG.prototype.readDepth_l5lmba$ = function (width, height, out) {
    this.log_61zpoe$(this.toString() + '.readDepth(' + width + ', ' + height + ', ' + out + ')');
  };
  LogAG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogAG',
    interfaces: [AG]
  };
  function DoubleDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0;
  }
  DoubleDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.values[this.index];
  };
  DoubleDelegatedUniform.prototype.setValue_zb7g25$ = function (obj, prop, value) {
    this.values[this.index] = value;
    this.onSet(value);
  };
  DoubleDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleDelegatedUniform',
    interfaces: []
  };
  function FloatDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0;
  }
  FloatDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.values[this.index];
  };
  FloatDelegatedUniform.prototype.setValue_3eg8p2$ = function (obj, prop, value) {
    this.values[this.index] = value;
    this.onSet(value);
  };
  FloatDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatDelegatedUniform',
    interfaces: []
  };
  function IntDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0;
  }
  IntDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return numberToInt(this.values[this.index]);
  };
  IntDelegatedUniform.prototype.setValue_imo3cj$ = function (obj, prop, value) {
    this.values[this.index] = value;
    this.onSet(value);
  };
  IntDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntDelegatedUniform',
    interfaces: []
  };
  function BoolDelegatedUniform(uniform, values, index, onSet, default_0) {
    this.uniform = uniform;
    this.values = values;
    this.index = index;
    this.onSet = onSet;
    this.values[this.index] = default_0 ? 1 : 0;
  }
  BoolDelegatedUniform.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.values[this.index] !== 0.0;
  };
  BoolDelegatedUniform.prototype.setValue_cegyfa$ = function (obj, prop, value) {
    this.values[this.index] = value ? 1 : 0;
    this.onSet(value);
  };
  BoolDelegatedUniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolDelegatedUniform',
    interfaces: []
  };
  function UniformFloatStorage(uniforms, uniform, array) {
    this.uniforms = uniforms;
    this.uniform = uniform;
    this.array = array;
    this.uniforms.set_8gg9u8$(this.uniform, this.array);
  }
  function UniformFloatStorage$doubleDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegate_7qp2ad$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegate$lambda;
    return new DoubleDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$doubleDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateX_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateX$lambda;
    return this.doubleDelegate_7qp2ad$(0, default_0, onSet);
  };
  function UniformFloatStorage$doubleDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateY_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateY$lambda;
    return this.doubleDelegate_7qp2ad$(1, default_0, onSet);
  };
  function UniformFloatStorage$doubleDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateZ_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateZ$lambda;
    return this.doubleDelegate_7qp2ad$(2, default_0, onSet);
  };
  function UniformFloatStorage$doubleDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.doubleDelegateW_gjghr5$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$doubleDelegateW$lambda;
    return this.doubleDelegate_7qp2ad$(3, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegate_8hvjyt$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegate$lambda;
    return new FloatDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$floatDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateX_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateX$lambda;
    return this.floatDelegate_8hvjyt$(0, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateY_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateY$lambda;
    return this.floatDelegate_8hvjyt$(1, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateZ_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateZ$lambda;
    return this.floatDelegate_8hvjyt$(2, default_0, onSet);
  };
  function UniformFloatStorage$floatDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.floatDelegateW_quopaj$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$floatDelegateW$lambda;
    return this.floatDelegate_8hvjyt$(3, default_0, onSet);
  };
  function UniformFloatStorage$intDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegate_e1b8mt$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegate$lambda;
    return new IntDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$intDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateX_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateX$lambda;
    return this.intDelegate_e1b8mt$(0, default_0, onSet);
  };
  function UniformFloatStorage$intDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateY_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateY$lambda;
    return this.intDelegate_e1b8mt$(1, default_0, onSet);
  };
  function UniformFloatStorage$intDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateZ_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateZ$lambda;
    return this.intDelegate_e1b8mt$(2, default_0, onSet);
  };
  function UniformFloatStorage$intDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.intDelegateW_8b5ljp$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = 0;
    if (onSet === void 0)
      onSet = UniformFloatStorage$intDelegateW$lambda;
    return this.intDelegate_e1b8mt$(3, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegate$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegate_zc8s2z$ = function (index, default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegate$lambda;
    return new BoolDelegatedUniform(this.uniform, this.array, index, onSet, default_0);
  };
  function UniformFloatStorage$boolDelegateX$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateX_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateX$lambda;
    return this.boolDelegate_zc8s2z$(0, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegateY$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateY_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateY$lambda;
    return this.boolDelegate_zc8s2z$(1, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegateZ$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateZ_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateZ$lambda;
    return this.boolDelegate_zc8s2z$(2, default_0, onSet);
  };
  function UniformFloatStorage$boolDelegateW$lambda(it) {
    return Unit;
  }
  UniformFloatStorage.prototype.boolDelegateW_1l5823$ = function (default_0, onSet) {
    if (default_0 === void 0)
      default_0 = false;
    if (onSet === void 0)
      onSet = UniformFloatStorage$boolDelegateW$lambda;
    return this.boolDelegate_zc8s2z$(3, default_0, onSet);
  };
  UniformFloatStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformFloatStorage',
    interfaces: []
  };
  function UniformValueStorage(uniforms, uniform, value) {
    this.uniforms = uniforms;
    this.uniform = uniform;
    this.value = value;
    this.uniforms.set_8gg9u8$(this.uniform, this.value);
  }
  UniformValueStorage.prototype.delegate = function () {
    return this;
  };
  UniformValueStorage.prototype.getValue_t0xcdd$ = function (obj, prop) {
    return this.value;
  };
  UniformValueStorage.prototype.setValue_809r6s$ = function (obj, prop, value) {
    this.uniforms.set_8gg9u8$(this.uniform, value);
  };
  UniformValueStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformValueStorage',
    interfaces: []
  };
  function storageFor($receiver, uniform, array) {
    if (array === void 0)
      array = new Float32Array(4);
    return new UniformFloatStorage($receiver, uniform, array);
  }
  function storageForMatrix3D($receiver, uniform, matrix) {
    if (matrix === void 0)
      matrix = new Matrix3D();
    return new UniformValueStorage($receiver, uniform, matrix);
  }
  function toNewGlslString($receiver, gles, version) {
    if (gles === void 0)
      gles = true;
    if (version === void 0)
      version = 100;
    return (new GlslGenerator($receiver.type, gles, version)).generate_57b21j$($receiver.stm);
  }
  function toGlSlString($receiver, gles) {
    if (gles === void 0)
      gles = true;
    return (new GlslGenerator(ShaderType$VERTEX_getInstance(), gles)).generate_57b21j$($receiver.stm);
  }
  function toGlSlString_0($receiver, gles) {
    if (gles === void 0)
      gles = true;
    return (new GlslGenerator(ShaderType$FRAGMENT_getInstance(), gles)).generate_57b21j$($receiver.stm);
  }
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  function GlslGenerator(kind, gles, version) {
    if (gles === void 0)
      gles = true;
    if (version === void 0)
      version = 100;
    Program$Visitor.call(this, '');
    this.kind = kind;
    this.gles = gles;
    this.version = version;
    this.temps_0 = HashSet_init();
    this.attributes_0 = HashSet_init();
    this.varyings_0 = HashSet_init();
    this.uniforms_0 = HashSet_init();
    this.programIndenter_0 = new Indenter();
  }
  GlslGenerator.prototype.errorType_0 = function (type) {
    return invalidOp("Don't know how to serialize type " + type);
  };
  GlslGenerator.prototype.typeToString_b2kxjc$ = function (type) {
    switch (type.name) {
      case 'Byte4':
        return 'vec4';
      case 'Mat2':
        return 'mat2';
      case 'Mat3':
        return 'mat3';
      case 'Mat4':
        return 'mat4';
      case 'TextureUnit':
        return 'sampler2D';
      default:switch (type.kind.name) {
          case 'TBYTE':
          case 'TUNSIGNED_BYTE':
          case 'TSHORT':
          case 'TUNSIGNED_SHORT':
          case 'TFLOAT':
            switch (type.elementCount) {
              case 1:
                return 'float';
              case 2:
                return 'vec2';
              case 3:
                return 'vec3';
              case 4:
                return 'vec4';
              default:return this.errorType_0(type);
            }

          case 'TINT':
            switch (type.elementCount) {
              case 1:
                return 'int';
              case 2:
                return 'ivec2';
              case 3:
                return 'ivec3';
              case 4:
                return 'ivec4';
              default:return this.errorType_0(type);
            }

          default:return Kotlin.noWhenBranchMatched();
        }

        break;
    }
  };
  GlslGenerator.prototype.get_arrayDecl_55mpc6$ = function ($receiver) {
    return $receiver.arrayCount !== 1 ? '[' + $receiver.arrayCount + ']' : '';
  };
  function GlslGenerator$generate$lambda(this$GlslGenerator) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      if (this$GlslGenerator.gles) {
        $receiver.line_61zpoe$('#version ' + this$GlslGenerator.version);
        $receiver.line_61zpoe$('#ifdef GL_ES');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('precision mediump float;');
          $receiver.line_61zpoe$('precision mediump int;');
          $receiver.line_61zpoe$('precision lowp sampler2D;');
          $receiver.line_61zpoe$('precision lowp samplerCube;');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('#endif');
      }
      tmp$ = this$GlslGenerator.attributes_0.iterator();
      while (tmp$.hasNext()) {
        var it = tmp$.next();
        $receiver.line_61zpoe$('attribute ' + this$GlslGenerator.typeToString_b2kxjc$(it.type) + ' ' + it.name + this$GlslGenerator.get_arrayDecl_55mpc6$(it) + ';');
      }
      tmp$_0 = this$GlslGenerator.uniforms_0.iterator();
      while (tmp$_0.hasNext()) {
        var it_0 = tmp$_0.next();
        $receiver.line_61zpoe$('uniform ' + this$GlslGenerator.typeToString_b2kxjc$(it_0.type) + ' ' + it_0.name + this$GlslGenerator.get_arrayDecl_55mpc6$(it_0) + ';');
      }
      tmp$_1 = this$GlslGenerator.varyings_0.iterator();
      while (tmp$_1.hasNext()) {
        var it_1 = tmp$_1.next();
        $receiver.line_61zpoe$('varying ' + this$GlslGenerator.typeToString_b2kxjc$(it_1.type) + ' ' + it_1.name + ';');
      }
      var str = 'void main()';
      $receiver.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
      $receiver._indent();
      try {
        var this$GlslGenerator_0 = this$GlslGenerator;
        var tmp$_2;
        tmp$_2 = this$GlslGenerator_0.temps_0.iterator();
        while (tmp$_2.hasNext()) {
          var temp = tmp$_2.next();
          $receiver.line_61zpoe$(this$GlslGenerator_0.typeToString_b2kxjc$(temp.type) + ' ' + temp.name + ';');
        }
        $receiver.line_2swh6d$(this$GlslGenerator_0.programIndenter_0);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
      return Unit;
    };
  }
  GlslGenerator.prototype.generate_57b21j$ = function (root) {
    this.temps_0.clear();
    this.attributes_0.clear();
    this.varyings_0.clear();
    this.uniforms_0.clear();
    this.programIndenter_0 = new Indenter();
    this.visit_57b21j$(root);
    var tmp$ = this.kind === ShaderType$FRAGMENT_getInstance();
    if (tmp$) {
      tmp$ = !this.attributes_0.isEmpty();
    }
    if (tmp$) {
      throw RuntimeException_init("Can't use attributes in fragment shader");
    }
    return Indenter.Companion.invoke_z3r7a6$(GlslGenerator$generate$lambda(this)).toString();
  };
  GlslGenerator.prototype.visit_1xgyq4$ = function (stms) {
    var tmp$;
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_57b21j$(stm);
    }
  };
  GlslGenerator.prototype.visit_tq3hhf$ = function (stm) {
    this.programIndenter_0.line_61zpoe$(this.visit_dq1c34$(stm.to) + ' = ' + this.visit_dq1c34$(stm.from) + ';');
  };
  GlslGenerator.prototype.visit_d6ige1$ = function (stm) {
    this.programIndenter_0.line_61zpoe$('discard;');
  };
  function GlslGenerator$visit$lambda(this$GlslGenerator) {
    return function (it) {
      return this$GlslGenerator.visit_dq1c34$(it);
    };
  }
  GlslGenerator.prototype.visit_b87eze$ = function (operand) {
    return this.typeToString_b2kxjc$(operand.type) + '(' + joinToString_0(operand.ops, ', ', void 0, void 0, void 0, void 0, GlslGenerator$visit$lambda(this)) + ')';
  };
  GlslGenerator.prototype.visit_s5t3yz$ = function (operand) {
    return '(' + this.visit_dq1c34$(operand.left) + ' ' + operand.op + ' ' + this.visit_dq1c34$(operand.right) + ')';
  };
  function GlslGenerator$visit$lambda_0(this$GlslGenerator) {
    return function (it) {
      return this$GlslGenerator.visit_dq1c34$(it);
    };
  }
  GlslGenerator.prototype.visit_j8ixcp$ = function (func) {
    return func.name + '(' + joinToString(func.ops, ', ', void 0, void 0, void 0, void 0, GlslGenerator$visit$lambda_0(this)) + ')';
  };
  GlslGenerator.prototype.visit_ceyg7y$ = function (stm) {
    var $receiver = this.programIndenter_0;
    var str = 'if (' + this.visit_dq1c34$(stm.cond) + ')';
    $receiver.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
    $receiver._indent();
    try {
      this.visit_57b21j$(stm.tbody);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}');
    if (stm.fbody != null) {
      $receiver.line_61zpoe$('else'.length === 0 ? '{' : 'else' + ' {');
      $receiver._indent();
      try {
        this.visit_57b21j$(ensureNotNull(stm.fbody));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
    }
  };
  GlslGenerator.prototype.visit_bmfbl7$ = function (operand) {
    var tmp$;
    Program$Visitor.prototype.visit_bmfbl7$.call(this, operand);
    if (Kotlin.isType(operand, Output)) {
      switch (this.kind.name) {
        case 'VERTEX':
          tmp$ = 'gl_Position';
          break;
        case 'FRAGMENT':
          tmp$ = 'gl_FragColor';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
    }
     else
      tmp$ = operand.name;
    return tmp$;
  };
  GlslGenerator.prototype.visit_nykr6b$ = function (temp) {
    this.temps_0.add_11rb$(temp);
    return Program$Visitor.prototype.visit_nykr6b$.call(this, temp);
  };
  GlslGenerator.prototype.visit_3kqgd9$ = function (attribute) {
    this.attributes_0.add_11rb$(attribute);
    return Program$Visitor.prototype.visit_3kqgd9$.call(this, attribute);
  };
  GlslGenerator.prototype.visit_b38853$ = function (varying) {
    this.varyings_0.add_11rb$(varying);
    return Program$Visitor.prototype.visit_b38853$.call(this, varying);
  };
  GlslGenerator.prototype.visit_2f4vi3$ = function (uniform) {
    this.uniforms_0.add_11rb$(uniform);
    return Program$Visitor.prototype.visit_2f4vi3$.call(this, uniform);
  };
  GlslGenerator.prototype.visit_e3ui06$ = function (output) {
    return Program$Visitor.prototype.visit_e3ui06$.call(this, output);
  };
  GlslGenerator.prototype.visit_jod55v$ = function (operand) {
    return operand.value.toString();
  };
  GlslGenerator.prototype.visit_u1pe22$ = function (operand) {
    var str = operand.value.toString();
    return contains(str, 46) ? str : str + '.0';
  };
  GlslGenerator.prototype.visit_zamv4y$ = function (operand) {
    return operand.value.toString();
  };
  GlslGenerator.prototype.visit_sbsglh$ = function (operand) {
    return this.visit_dq1c34$(operand.left) + '.' + operand.swizzle;
  };
  GlslGenerator.prototype.visit_5pi8d6$ = function (operand) {
    return this.visit_dq1c34$(operand.left) + '[' + this.visit_dq1c34$(operand.index) + ']';
  };
  GlslGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlslGenerator',
    interfaces: [Program$Visitor]
  };
  function toGlSl($receiver) {
    return (new GlslGenerator($receiver.type)).generate_57b21j$($receiver.stm);
  }
  function VarKind(name, ordinal, bytesSize) {
    Enum.call(this);
    this.bytesSize = bytesSize;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VarKind_initFields() {
    VarKind_initFields = function () {
    };
    VarKind$TBYTE_instance = new VarKind('TBYTE', 0, 1);
    VarKind$TUNSIGNED_BYTE_instance = new VarKind('TUNSIGNED_BYTE', 1, 1);
    VarKind$TSHORT_instance = new VarKind('TSHORT', 2, 2);
    VarKind$TUNSIGNED_SHORT_instance = new VarKind('TUNSIGNED_SHORT', 3, 2);
    VarKind$TINT_instance = new VarKind('TINT', 4, 4);
    VarKind$TFLOAT_instance = new VarKind('TFLOAT', 5, 4);
  }
  var VarKind$TBYTE_instance;
  function VarKind$TBYTE_getInstance() {
    VarKind_initFields();
    return VarKind$TBYTE_instance;
  }
  var VarKind$TUNSIGNED_BYTE_instance;
  function VarKind$TUNSIGNED_BYTE_getInstance() {
    VarKind_initFields();
    return VarKind$TUNSIGNED_BYTE_instance;
  }
  var VarKind$TSHORT_instance;
  function VarKind$TSHORT_getInstance() {
    VarKind_initFields();
    return VarKind$TSHORT_instance;
  }
  var VarKind$TUNSIGNED_SHORT_instance;
  function VarKind$TUNSIGNED_SHORT_getInstance() {
    VarKind_initFields();
    return VarKind$TUNSIGNED_SHORT_instance;
  }
  var VarKind$TINT_instance;
  function VarKind$TINT_getInstance() {
    VarKind_initFields();
    return VarKind$TINT_instance;
  }
  var VarKind$TFLOAT_instance;
  function VarKind$TFLOAT_getInstance() {
    VarKind_initFields();
    return VarKind$TFLOAT_instance;
  }
  VarKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarKind',
    interfaces: [Enum]
  };
  function VarKind$values() {
    return [VarKind$TBYTE_getInstance(), VarKind$TUNSIGNED_BYTE_getInstance(), VarKind$TSHORT_getInstance(), VarKind$TUNSIGNED_SHORT_getInstance(), VarKind$TINT_getInstance(), VarKind$TFLOAT_getInstance()];
  }
  VarKind.values = VarKind$values;
  function VarKind$valueOf(name) {
    switch (name) {
      case 'TBYTE':
        return VarKind$TBYTE_getInstance();
      case 'TUNSIGNED_BYTE':
        return VarKind$TUNSIGNED_BYTE_getInstance();
      case 'TSHORT':
        return VarKind$TSHORT_getInstance();
      case 'TUNSIGNED_SHORT':
        return VarKind$TUNSIGNED_SHORT_getInstance();
      case 'TINT':
        return VarKind$TINT_getInstance();
      case 'TFLOAT':
        return VarKind$TFLOAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.VarKind.' + name);
    }
  }
  VarKind.valueOf_61zpoe$ = VarKind$valueOf;
  function VarType(name, ordinal, kind, elementCount, isMatrix) {
    if (isMatrix === void 0)
      isMatrix = false;
    Enum.call(this);
    this.kind = kind;
    this.elementCount = elementCount;
    this.isMatrix = isMatrix;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.bytesSize = Kotlin.imul(this.kind.bytesSize, this.elementCount);
  }
  function VarType_initFields() {
    VarType_initFields = function () {
    };
    VarType$TVOID_instance = new VarType('TVOID', 0, VarKind$TBYTE_getInstance(), 0);
    VarType$Mat2_instance = new VarType('Mat2', 1, VarKind$TFLOAT_getInstance(), 4, true);
    VarType$Mat3_instance = new VarType('Mat3', 2, VarKind$TFLOAT_getInstance(), 9, true);
    VarType$Mat4_instance = new VarType('Mat4', 3, VarKind$TFLOAT_getInstance(), 16, true);
    VarType$TextureUnit_instance = new VarType('TextureUnit', 4, VarKind$TINT_getInstance(), 1);
    VarType$Int1_instance = new VarType('Int1', 5, VarKind$TINT_getInstance(), 1);
    VarType$Float1_instance = new VarType('Float1', 6, VarKind$TFLOAT_getInstance(), 1);
    VarType$Float2_instance = new VarType('Float2', 7, VarKind$TFLOAT_getInstance(), 2);
    VarType$Float3_instance = new VarType('Float3', 8, VarKind$TFLOAT_getInstance(), 3);
    VarType$Float4_instance = new VarType('Float4', 9, VarKind$TFLOAT_getInstance(), 4);
    VarType$Short1_instance = new VarType('Short1', 10, VarKind$TSHORT_getInstance(), 1);
    VarType$Short2_instance = new VarType('Short2', 11, VarKind$TSHORT_getInstance(), 2);
    VarType$Short3_instance = new VarType('Short3', 12, VarKind$TSHORT_getInstance(), 3);
    VarType$Short4_instance = new VarType('Short4', 13, VarKind$TSHORT_getInstance(), 4);
    VarType$Bool1_instance = new VarType('Bool1', 14, VarKind$TUNSIGNED_BYTE_getInstance(), 1);
    VarType$Byte4_instance = new VarType('Byte4', 15, VarKind$TUNSIGNED_BYTE_getInstance(), 4);
    VarType$SByte1_instance = new VarType('SByte1', 16, VarKind$TBYTE_getInstance(), 1);
    VarType$SByte2_instance = new VarType('SByte2', 17, VarKind$TBYTE_getInstance(), 2);
    VarType$SByte3_instance = new VarType('SByte3', 18, VarKind$TBYTE_getInstance(), 3);
    VarType$SByte4_instance = new VarType('SByte4', 19, VarKind$TBYTE_getInstance(), 4);
    VarType$UByte1_instance = new VarType('UByte1', 20, VarKind$TUNSIGNED_BYTE_getInstance(), 1);
    VarType$UByte2_instance = new VarType('UByte2', 21, VarKind$TUNSIGNED_BYTE_getInstance(), 2);
    VarType$UByte3_instance = new VarType('UByte3', 22, VarKind$TUNSIGNED_BYTE_getInstance(), 3);
    VarType$UByte4_instance = new VarType('UByte4', 23, VarKind$TUNSIGNED_BYTE_getInstance(), 4);
    VarType$SShort1_instance = new VarType('SShort1', 24, VarKind$TSHORT_getInstance(), 1);
    VarType$SShort2_instance = new VarType('SShort2', 25, VarKind$TSHORT_getInstance(), 2);
    VarType$SShort3_instance = new VarType('SShort3', 26, VarKind$TSHORT_getInstance(), 3);
    VarType$SShort4_instance = new VarType('SShort4', 27, VarKind$TSHORT_getInstance(), 4);
    VarType$UShort1_instance = new VarType('UShort1', 28, VarKind$TUNSIGNED_SHORT_getInstance(), 1);
    VarType$UShort2_instance = new VarType('UShort2', 29, VarKind$TUNSIGNED_SHORT_getInstance(), 2);
    VarType$UShort3_instance = new VarType('UShort3', 30, VarKind$TUNSIGNED_SHORT_getInstance(), 3);
    VarType$UShort4_instance = new VarType('UShort4', 31, VarKind$TUNSIGNED_SHORT_getInstance(), 4);
    VarType$SInt1_instance = new VarType('SInt1', 32, VarKind$TINT_getInstance(), 1);
    VarType$SInt2_instance = new VarType('SInt2', 33, VarKind$TINT_getInstance(), 2);
    VarType$SInt3_instance = new VarType('SInt3', 34, VarKind$TINT_getInstance(), 3);
    VarType$SInt4_instance = new VarType('SInt4', 35, VarKind$TINT_getInstance(), 4);
    VarType$Companion_getInstance();
  }
  var VarType$TVOID_instance;
  function VarType$TVOID_getInstance() {
    VarType_initFields();
    return VarType$TVOID_instance;
  }
  var VarType$Mat2_instance;
  function VarType$Mat2_getInstance() {
    VarType_initFields();
    return VarType$Mat2_instance;
  }
  var VarType$Mat3_instance;
  function VarType$Mat3_getInstance() {
    VarType_initFields();
    return VarType$Mat3_instance;
  }
  var VarType$Mat4_instance;
  function VarType$Mat4_getInstance() {
    VarType_initFields();
    return VarType$Mat4_instance;
  }
  var VarType$TextureUnit_instance;
  function VarType$TextureUnit_getInstance() {
    VarType_initFields();
    return VarType$TextureUnit_instance;
  }
  var VarType$Int1_instance;
  function VarType$Int1_getInstance() {
    VarType_initFields();
    return VarType$Int1_instance;
  }
  var VarType$Float1_instance;
  function VarType$Float1_getInstance() {
    VarType_initFields();
    return VarType$Float1_instance;
  }
  var VarType$Float2_instance;
  function VarType$Float2_getInstance() {
    VarType_initFields();
    return VarType$Float2_instance;
  }
  var VarType$Float3_instance;
  function VarType$Float3_getInstance() {
    VarType_initFields();
    return VarType$Float3_instance;
  }
  var VarType$Float4_instance;
  function VarType$Float4_getInstance() {
    VarType_initFields();
    return VarType$Float4_instance;
  }
  var VarType$Short1_instance;
  function VarType$Short1_getInstance() {
    VarType_initFields();
    return VarType$Short1_instance;
  }
  var VarType$Short2_instance;
  function VarType$Short2_getInstance() {
    VarType_initFields();
    return VarType$Short2_instance;
  }
  var VarType$Short3_instance;
  function VarType$Short3_getInstance() {
    VarType_initFields();
    return VarType$Short3_instance;
  }
  var VarType$Short4_instance;
  function VarType$Short4_getInstance() {
    VarType_initFields();
    return VarType$Short4_instance;
  }
  var VarType$Bool1_instance;
  function VarType$Bool1_getInstance() {
    VarType_initFields();
    return VarType$Bool1_instance;
  }
  var VarType$Byte4_instance;
  function VarType$Byte4_getInstance() {
    VarType_initFields();
    return VarType$Byte4_instance;
  }
  var VarType$SByte1_instance;
  function VarType$SByte1_getInstance() {
    VarType_initFields();
    return VarType$SByte1_instance;
  }
  var VarType$SByte2_instance;
  function VarType$SByte2_getInstance() {
    VarType_initFields();
    return VarType$SByte2_instance;
  }
  var VarType$SByte3_instance;
  function VarType$SByte3_getInstance() {
    VarType_initFields();
    return VarType$SByte3_instance;
  }
  var VarType$SByte4_instance;
  function VarType$SByte4_getInstance() {
    VarType_initFields();
    return VarType$SByte4_instance;
  }
  var VarType$UByte1_instance;
  function VarType$UByte1_getInstance() {
    VarType_initFields();
    return VarType$UByte1_instance;
  }
  var VarType$UByte2_instance;
  function VarType$UByte2_getInstance() {
    VarType_initFields();
    return VarType$UByte2_instance;
  }
  var VarType$UByte3_instance;
  function VarType$UByte3_getInstance() {
    VarType_initFields();
    return VarType$UByte3_instance;
  }
  var VarType$UByte4_instance;
  function VarType$UByte4_getInstance() {
    VarType_initFields();
    return VarType$UByte4_instance;
  }
  var VarType$SShort1_instance;
  function VarType$SShort1_getInstance() {
    VarType_initFields();
    return VarType$SShort1_instance;
  }
  var VarType$SShort2_instance;
  function VarType$SShort2_getInstance() {
    VarType_initFields();
    return VarType$SShort2_instance;
  }
  var VarType$SShort3_instance;
  function VarType$SShort3_getInstance() {
    VarType_initFields();
    return VarType$SShort3_instance;
  }
  var VarType$SShort4_instance;
  function VarType$SShort4_getInstance() {
    VarType_initFields();
    return VarType$SShort4_instance;
  }
  var VarType$UShort1_instance;
  function VarType$UShort1_getInstance() {
    VarType_initFields();
    return VarType$UShort1_instance;
  }
  var VarType$UShort2_instance;
  function VarType$UShort2_getInstance() {
    VarType_initFields();
    return VarType$UShort2_instance;
  }
  var VarType$UShort3_instance;
  function VarType$UShort3_getInstance() {
    VarType_initFields();
    return VarType$UShort3_instance;
  }
  var VarType$UShort4_instance;
  function VarType$UShort4_getInstance() {
    VarType_initFields();
    return VarType$UShort4_instance;
  }
  var VarType$SInt1_instance;
  function VarType$SInt1_getInstance() {
    VarType_initFields();
    return VarType$SInt1_instance;
  }
  var VarType$SInt2_instance;
  function VarType$SInt2_getInstance() {
    VarType_initFields();
    return VarType$SInt2_instance;
  }
  var VarType$SInt3_instance;
  function VarType$SInt3_getInstance() {
    VarType_initFields();
    return VarType$SInt3_instance;
  }
  var VarType$SInt4_instance;
  function VarType$SInt4_getInstance() {
    VarType_initFields();
    return VarType$SInt4_instance;
  }
  function VarType$Companion() {
    VarType$Companion_instance = this;
  }
  VarType$Companion.prototype.BYTE_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$SByte1_getInstance();
      case 2:
        return VarType$SByte2_getInstance();
      case 3:
        return VarType$SByte3_getInstance();
      case 4:
        return VarType$SByte4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.UBYTE_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$UByte1_getInstance();
      case 2:
        return VarType$UByte2_getInstance();
      case 3:
        return VarType$UByte3_getInstance();
      case 4:
        return VarType$UByte4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.SHORT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$SShort1_getInstance();
      case 2:
        return VarType$SShort2_getInstance();
      case 3:
        return VarType$SShort3_getInstance();
      case 4:
        return VarType$SShort4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.USHORT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$UShort1_getInstance();
      case 2:
        return VarType$UShort2_getInstance();
      case 3:
        return VarType$UShort3_getInstance();
      case 4:
        return VarType$UShort4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.INT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$SInt1_getInstance();
      case 2:
        return VarType$SInt2_getInstance();
      case 3:
        return VarType$SInt3_getInstance();
      case 4:
        return VarType$SInt4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.prototype.FLOAT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$TVOID_getInstance();
      case 1:
        return VarType$Float1_getInstance();
      case 2:
        return VarType$Float2_getInstance();
      case 3:
        return VarType$Float3_getInstance();
      case 4:
        return VarType$Float4_getInstance();
      default:return lang.invalidOp;
    }
  };
  VarType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VarType$Companion_instance = null;
  function VarType$Companion_getInstance() {
    VarType_initFields();
    if (VarType$Companion_instance === null) {
      new VarType$Companion();
    }
    return VarType$Companion_instance;
  }
  VarType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarType',
    interfaces: [Enum]
  };
  function VarType$values() {
    return [VarType$TVOID_getInstance(), VarType$Mat2_getInstance(), VarType$Mat3_getInstance(), VarType$Mat4_getInstance(), VarType$TextureUnit_getInstance(), VarType$Int1_getInstance(), VarType$Float1_getInstance(), VarType$Float2_getInstance(), VarType$Float3_getInstance(), VarType$Float4_getInstance(), VarType$Short1_getInstance(), VarType$Short2_getInstance(), VarType$Short3_getInstance(), VarType$Short4_getInstance(), VarType$Bool1_getInstance(), VarType$Byte4_getInstance(), VarType$SByte1_getInstance(), VarType$SByte2_getInstance(), VarType$SByte3_getInstance(), VarType$SByte4_getInstance(), VarType$UByte1_getInstance(), VarType$UByte2_getInstance(), VarType$UByte3_getInstance(), VarType$UByte4_getInstance(), VarType$SShort1_getInstance(), VarType$SShort2_getInstance(), VarType$SShort3_getInstance(), VarType$SShort4_getInstance(), VarType$UShort1_getInstance(), VarType$UShort2_getInstance(), VarType$UShort3_getInstance(), VarType$UShort4_getInstance(), VarType$SInt1_getInstance(), VarType$SInt2_getInstance(), VarType$SInt3_getInstance(), VarType$SInt4_getInstance()];
  }
  VarType.values = VarType$values;
  function VarType$valueOf(name) {
    switch (name) {
      case 'TVOID':
        return VarType$TVOID_getInstance();
      case 'Mat2':
        return VarType$Mat2_getInstance();
      case 'Mat3':
        return VarType$Mat3_getInstance();
      case 'Mat4':
        return VarType$Mat4_getInstance();
      case 'TextureUnit':
        return VarType$TextureUnit_getInstance();
      case 'Int1':
        return VarType$Int1_getInstance();
      case 'Float1':
        return VarType$Float1_getInstance();
      case 'Float2':
        return VarType$Float2_getInstance();
      case 'Float3':
        return VarType$Float3_getInstance();
      case 'Float4':
        return VarType$Float4_getInstance();
      case 'Short1':
        return VarType$Short1_getInstance();
      case 'Short2':
        return VarType$Short2_getInstance();
      case 'Short3':
        return VarType$Short3_getInstance();
      case 'Short4':
        return VarType$Short4_getInstance();
      case 'Bool1':
        return VarType$Bool1_getInstance();
      case 'Byte4':
        return VarType$Byte4_getInstance();
      case 'SByte1':
        return VarType$SByte1_getInstance();
      case 'SByte2':
        return VarType$SByte2_getInstance();
      case 'SByte3':
        return VarType$SByte3_getInstance();
      case 'SByte4':
        return VarType$SByte4_getInstance();
      case 'UByte1':
        return VarType$UByte1_getInstance();
      case 'UByte2':
        return VarType$UByte2_getInstance();
      case 'UByte3':
        return VarType$UByte3_getInstance();
      case 'UByte4':
        return VarType$UByte4_getInstance();
      case 'SShort1':
        return VarType$SShort1_getInstance();
      case 'SShort2':
        return VarType$SShort2_getInstance();
      case 'SShort3':
        return VarType$SShort3_getInstance();
      case 'SShort4':
        return VarType$SShort4_getInstance();
      case 'UShort1':
        return VarType$UShort1_getInstance();
      case 'UShort2':
        return VarType$UShort2_getInstance();
      case 'UShort3':
        return VarType$UShort3_getInstance();
      case 'UShort4':
        return VarType$UShort4_getInstance();
      case 'SInt1':
        return VarType$SInt1_getInstance();
      case 'SInt2':
        return VarType$SInt2_getInstance();
      case 'SInt3':
        return VarType$SInt3_getInstance();
      case 'SInt4':
        return VarType$SInt4_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.VarType.' + name);
    }
  }
  VarType.valueOf_61zpoe$ = VarType$valueOf;
  function ShaderType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShaderType_initFields() {
    ShaderType_initFields = function () {
    };
    ShaderType$VERTEX_instance = new ShaderType('VERTEX', 0);
    ShaderType$FRAGMENT_instance = new ShaderType('FRAGMENT', 1);
  }
  var ShaderType$VERTEX_instance;
  function ShaderType$VERTEX_getInstance() {
    ShaderType_initFields();
    return ShaderType$VERTEX_instance;
  }
  var ShaderType$FRAGMENT_instance;
  function ShaderType$FRAGMENT_getInstance() {
    ShaderType_initFields();
    return ShaderType$FRAGMENT_instance;
  }
  ShaderType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShaderType',
    interfaces: [Enum]
  };
  function ShaderType$values() {
    return [ShaderType$VERTEX_getInstance(), ShaderType$FRAGMENT_getInstance()];
  }
  ShaderType.values = ShaderType$values;
  function ShaderType$valueOf(name) {
    switch (name) {
      case 'VERTEX':
        return ShaderType$VERTEX_getInstance();
      case 'FRAGMENT':
        return ShaderType$FRAGMENT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.ShaderType.' + name);
    }
  }
  ShaderType.valueOf_61zpoe$ = ShaderType$valueOf;
  function Operand(type) {
    this.type = type;
  }
  Operand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operand',
    interfaces: []
  };
  var Array_0 = Array;
  function Variable(name, type, arrayCount) {
    Operand.call(this, type);
    this.name = name;
    this.arrayCount = arrayCount;
    var array = Array_0(this.arrayCount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = this.name + '[' + i + ']';
    }
    this.indexNames = array;
    this.id = 0;
    this.data = null;
  }
  Variable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Variable',
    interfaces: [Operand]
  };
  function Variable_init(name, type, $this) {
    $this = $this || Object.create(Variable.prototype);
    Variable.call($this, name, type, 1);
    return $this;
  }
  function Attribute(name, type, normalized, offset, active) {
    if (offset === void 0)
      offset = null;
    if (active === void 0)
      active = true;
    Variable_init(name, type, this);
    this.normalized = normalized;
    this.offset = offset;
    this.active = active;
  }
  Attribute.prototype.inactived = function () {
    return new Attribute(this.name, this.type, this.normalized, null, false);
  };
  Attribute.prototype.toString = function () {
    return 'Attribute(' + this.name + ')';
  };
  Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: [Variable]
  };
  function Attribute_init(name, type, normalized, $this) {
    $this = $this || Object.create(Attribute.prototype);
    Attribute.call($this, name, type, normalized, null, true);
    return $this;
  }
  function Varying(name, type, arrayCount) {
    Variable.call(this, name, type, arrayCount);
  }
  Varying.prototype.toString = function () {
    return 'Varying(' + this.name + ')';
  };
  Varying.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Varying',
    interfaces: [Variable]
  };
  function Varying_init(name, type, $this) {
    $this = $this || Object.create(Varying.prototype);
    Varying.call($this, name, type, 1);
    return $this;
  }
  function Uniform(name, type, arrayCount) {
    Variable.call(this, name, type, arrayCount);
  }
  Uniform.prototype.toString = function () {
    return 'Uniform(' + this.name + ')';
  };
  Uniform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Uniform',
    interfaces: [Variable]
  };
  function Uniform_init(name, type, $this) {
    $this = $this || Object.create(Uniform.prototype);
    Uniform.call($this, name, type, 1);
    return $this;
  }
  function Temp(id, type, arrayCount) {
    Variable.call(this, 'temp' + id, type, arrayCount);
  }
  Temp.prototype.toString = function () {
    return 'Temp(' + this.name + ')';
  };
  Temp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Temp',
    interfaces: [Variable]
  };
  function Temp_init(id, type, $this) {
    $this = $this || Object.create(Temp.prototype);
    Temp.call($this, id, type, 1);
    return $this;
  }
  function Output() {
    Output_instance = this;
    Variable_init('out', VarType$Float4_getInstance(), this);
  }
  Output.prototype.toString = function () {
    return 'Output';
  };
  Output.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Output',
    interfaces: [Variable]
  };
  var Output_instance = null;
  function Output_getInstance() {
    if (Output_instance === null) {
      new Output();
    }
    return Output_instance;
  }
  function Program(vertex, fragment, name) {
    if (name === void 0)
      name = 'program';
    this.vertex = vertex;
    this.fragment = fragment;
    this.name = name;
    this.uniforms = plus(this.vertex.uniforms, this.fragment.uniforms);
    this.attributes = plus(this.vertex.attributes, this.fragment.attributes);
  }
  Program.prototype.close = function () {
  };
  Program.prototype.toString = function () {
    var tmp$ = 'Program(name=' + this.name + ', attributes=';
    var $receiver = this.attributes;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.name);
    }
    var tmp$_1 = tmp$ + destination + ', uniforms=';
    var $receiver_0 = this.uniforms;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(item_0.name);
    }
    return tmp$_1 + destination_0 + ')';
  };
  function Program$Binop(left, op, right) {
    Operand.call(this, left.type);
    this.left = left;
    this.op = op;
    this.right = right;
  }
  Program$Binop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binop',
    interfaces: [Operand]
  };
  function Program$IntLiteral(value) {
    Operand.call(this, VarType$Int1_getInstance());
    this.value = value;
  }
  Program$IntLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntLiteral',
    interfaces: [Operand]
  };
  function Program$FloatLiteral(value) {
    Operand.call(this, VarType$Float1_getInstance());
    this.value = value;
  }
  Program$FloatLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatLiteral',
    interfaces: [Operand]
  };
  function Program$BoolLiteral(value) {
    Operand.call(this, VarType$Bool1_getInstance());
    this.value = value;
  }
  Program$BoolLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolLiteral',
    interfaces: [Operand]
  };
  function Program$Vector(type, ops) {
    Operand.call(this, type);
    this.ops = ops;
  }
  Program$Vector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector',
    interfaces: [Operand]
  };
  function Program$Swizzle(left, swizzle) {
    Operand.call(this, left.type);
    this.left = left;
    this.swizzle = swizzle;
  }
  Program$Swizzle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Swizzle',
    interfaces: [Operand]
  };
  function Program$ArrayAccess(left, index) {
    Operand.call(this, left.type);
    this.left = left;
    this.index = index;
  }
  Program$ArrayAccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayAccess',
    interfaces: [Operand]
  };
  function Program$Func(name, ops) {
    Operand.call(this, VarType$Float1_getInstance());
    this.name = name;
    this.ops = ops;
  }
  Program$Func.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Func',
    interfaces: [Operand]
  };
  function Program$Program$Func_init(name, ops, $this) {
    $this = $this || Object.create(Program$Func.prototype);
    Program$Func.call($this, name, toList(ops));
    return $this;
  }
  function Program$Stm() {
  }
  function Program$Stm$Stms(stms) {
    Program$Stm.call(this);
    this.stms = stms;
  }
  Program$Stm$Stms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stms',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Set(to, from) {
    Program$Stm.call(this);
    this.to = to;
    this.from = from;
  }
  Program$Stm$Set.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Set',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Discard() {
    Program$Stm.call(this);
  }
  Program$Stm$Discard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Discard',
    interfaces: [Program$Stm]
  };
  function Program$Stm$If(cond, tbody, fbody) {
    if (fbody === void 0)
      fbody = null;
    Program$Stm.call(this);
    this.cond = cond;
    this.tbody = tbody;
    this.fbody = fbody;
  }
  Program$Stm$If.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'If',
    interfaces: [Program$Stm]
  };
  Program$Stm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stm',
    interfaces: []
  };
  function Program$Builder(type) {
    this.type = type;
    this.outputStms = ArrayList_init();
    this.tempLastId_0 = 3;
    this.out = Output_getInstance();
  }
  Program$Builder.prototype.ELSE_q23b5m$ = function ($receiver, callback) {
    var body = new Program$Builder(this.type);
    callback(body);
    $receiver.fbody = new Program$Stm$Stms(body.outputStms);
  };
  Program$Builder.prototype.IF_4dsix7$ = defineInlineFunction('korag.com.soywiz.korag.shader.Program.Builder.IF_4dsix7$', wrapFunction(function () {
    var Program$Program$Builder_init = _.com.soywiz.korag.shader.Program.Builder;
    var Program$Stm$Program$Stm$Stms_init = _.com.soywiz.korag.shader.Program.Stm.Stms;
    var Program$Stm$Program$Stm$If_init = _.com.soywiz.korag.shader.Program.Stm.If;
    return function (cond, callback) {
      var body = new Program$Program$Builder_init(this.type);
      callback(body);
      var stmIf = new Program$Stm$Program$Stm$If_init(cond, new Program$Stm$Program$Stm$Stms_init(body.outputStms));
      this.outputStms.add_11rb$(stmIf);
      return stmIf;
    };
  }));
  Program$Builder.prototype.SET_q0hzsk$ = function (target, expr) {
    var $receiver = this.outputStms;
    var element = new Program$Stm$Set(target, expr);
    $receiver.add_11rb$(element);
  };
  Program$Builder.prototype.DISCARD = function () {
    var $receiver = this.outputStms;
    var element = new Program$Stm$Discard();
    $receiver.add_11rb$(element);
  };
  Program$Builder.prototype.createTemp_894lkq$ = function (type, arrayCount) {
    var tmp$;
    return new Temp((tmp$ = this.tempLastId_0, this.tempLastId_0 = tmp$ + 1 | 0, tmp$), type, arrayCount);
  };
  Program$Builder.prototype.createTemp_b2kxjc$ = function (type) {
    var tmp$;
    return new Temp((tmp$ = this.tempLastId_0, this.tempLastId_0 = tmp$ + 1 | 0, tmp$), type, 1);
  };
  Program$Builder.prototype.set_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.setTo_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.assign_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.sin_dq1c34$ = function (arg) {
    return Program$Program$Func_init('sin', [arg]);
  };
  Program$Builder.prototype.cos_dq1c34$ = function (arg) {
    return Program$Program$Func_init('cos', [arg]);
  };
  Program$Builder.prototype.tan_dq1c34$ = function (arg) {
    return Program$Program$Func_init('tan', [arg]);
  };
  Program$Builder.prototype.asin_dq1c34$ = function (arg) {
    return Program$Program$Func_init('asin', [arg]);
  };
  Program$Builder.prototype.acos_dq1c34$ = function (arg) {
    return Program$Program$Func_init('acos', [arg]);
  };
  Program$Builder.prototype.atan_dq1c34$ = function (arg) {
    return Program$Program$Func_init('atan', [arg]);
  };
  Program$Builder.prototype.radians_dq1c34$ = function (arg) {
    return Program$Program$Func_init('radians', [arg]);
  };
  Program$Builder.prototype.degrees_dq1c34$ = function (arg) {
    return Program$Program$Func_init('degrees', [arg]);
  };
  Program$Builder.prototype.texture2D_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('texture2D', [a, b]);
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Program$Builder.prototype.func_ohzs2t$ = function (name, args) {
    var destination = ArrayList_init_0(args.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== args.length; ++tmp$) {
      var item = args[tmp$];
      destination.add_11rb$(item);
    }
    return Program$Program$Func_init(name, copyToArray(destination).slice());
  };
  Program$Builder.prototype.pow_q0hzsk$ = function (b, e) {
    return Program$Program$Func_init('pow', [b, e]);
  };
  Program$Builder.prototype.exp_dq1c34$ = function (v) {
    return Program$Program$Func_init('exp', [v]);
  };
  Program$Builder.prototype.exp2_dq1c34$ = function (v) {
    return Program$Program$Func_init('exp2', [v]);
  };
  Program$Builder.prototype.log_dq1c34$ = function (v) {
    return Program$Program$Func_init('log', [v]);
  };
  Program$Builder.prototype.log2_dq1c34$ = function (v) {
    return Program$Program$Func_init('log2', [v]);
  };
  Program$Builder.prototype.sqrt_dq1c34$ = function (v) {
    return Program$Program$Func_init('sqrt', [v]);
  };
  Program$Builder.prototype.inversesqrt_dq1c34$ = function (v) {
    return Program$Program$Func_init('inversesqrt', [v]);
  };
  Program$Builder.prototype.abs_dq1c34$ = function (v) {
    return Program$Program$Func_init('abs', [v]);
  };
  Program$Builder.prototype.sign_dq1c34$ = function (v) {
    return Program$Program$Func_init('sign', [v]);
  };
  Program$Builder.prototype.ceil_dq1c34$ = function (v) {
    return Program$Program$Func_init('ceil', [v]);
  };
  Program$Builder.prototype.floor_dq1c34$ = function (v) {
    return Program$Program$Func_init('floor', [v]);
  };
  Program$Builder.prototype.fract_dq1c34$ = function (v) {
    return Program$Program$Func_init('fract', [v]);
  };
  Program$Builder.prototype.clamp_qzk4o8$ = function (v, min, max) {
    return Program$Program$Func_init('clamp', [v, min, max]);
  };
  Program$Builder.prototype.min_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('min', [a, b]);
  };
  Program$Builder.prototype.max_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('max', [a, b]);
  };
  Program$Builder.prototype.mod_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('mod', [a, b]);
  };
  Program$Builder.prototype.mix_qzk4o8$ = function (a, b, step) {
    return Program$Program$Func_init('mix', [a, b, step]);
  };
  Program$Builder.prototype.step_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('step', [a, b]);
  };
  Program$Builder.prototype.smoothstep_qzk4o8$ = function (a, b, c) {
    return Program$Program$Func_init('smoothstep', [a, b, c]);
  };
  Program$Builder.prototype.length_dq1c34$ = function (a) {
    return Program$Program$Func_init('length', [a]);
  };
  Program$Builder.prototype.distance_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('distance', [a, b]);
  };
  Program$Builder.prototype.dot_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('dot', [a, b]);
  };
  Program$Builder.prototype.cross_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('cross', [a, b]);
  };
  Program$Builder.prototype.normalize_dq1c34$ = function (a) {
    return Program$Program$Func_init('normalize', [a]);
  };
  Program$Builder.prototype.faceforward_qzk4o8$ = function (a, b, c) {
    return Program$Program$Func_init('faceforward', [a, b, c]);
  };
  Program$Builder.prototype.reflect_q0hzsk$ = function (a, b) {
    return Program$Program$Func_init('reflect', [a, b]);
  };
  Program$Builder.prototype.refract_qzk4o8$ = function (a, b, c) {
    return Program$Program$Func_init('refract', [a, b, c]);
  };
  Program$Builder.prototype.get_lit_s8ev3n$ = function ($receiver) {
    return new Program$IntLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_yrwdxr$ = function ($receiver) {
    return new Program$FloatLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_81szk$ = function ($receiver) {
    return new Program$FloatLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_1v8dcc$ = function ($receiver) {
    return new Program$BoolLiteral($receiver);
  };
  Program$Builder.prototype.lit_7ox3bl$ = function (type, ops) {
    var tmp$;
    return new Program$Vector(type, Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec1_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float1_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec2_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float2_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec3_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float3_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  Program$Builder.prototype.vec4_hywno3$ = function (ops) {
    var tmp$;
    return new Program$Vector(VarType$Float4_getInstance(), Kotlin.isArray(tmp$ = ops) ? tmp$ : throwCCE());
  };
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Program$Builder.prototype.get_x14fz$ = function ($receiver, index) {
    var tmp$;
    if ($receiver.type.isMatrix)
      tmp$ = new Program$ArrayAccess($receiver, this.get_lit_s8ev3n$(index));
    else {
      switch (index) {
        case 0:
          tmp$ = this.get_x_rix7j$($receiver);
          break;
        case 1:
          tmp$ = this.get_y_rix7j$($receiver);
          break;
        case 2:
          tmp$ = this.get_z_rix7j$($receiver);
          break;
        case 3:
          tmp$ = this.get_w_rix7j$($receiver);
          break;
        default:throw IllegalStateException_init(('Invalid index ' + index).toString());
      }
    }
    return tmp$;
  };
  Program$Builder.prototype.get_hhgt4v$ = function ($receiver, swizzle) {
    return new Program$Swizzle($receiver, swizzle);
  };
  Program$Builder.prototype.get_x_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'x');
  };
  Program$Builder.prototype.get_y_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'y');
  };
  Program$Builder.prototype.get_z_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'z');
  };
  Program$Builder.prototype.get_w_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'w');
  };
  Program$Builder.prototype.get_r_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'x');
  };
  Program$Builder.prototype.get_g_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'y');
  };
  Program$Builder.prototype.get_b_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'z');
  };
  Program$Builder.prototype.get_a_rix7j$ = function ($receiver) {
    return this.get_hhgt4v$($receiver, 'w');
  };
  Program$Builder.prototype.unaryMinus_rix7j$ = function ($receiver) {
    return this.minus_2oogdr$(this.get_lit_yrwdxr$(0.0), $receiver);
  };
  Program$Builder.prototype.minus_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '-', that);
  };
  Program$Builder.prototype.plus_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '+', that);
  };
  Program$Builder.prototype.times_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '*', that);
  };
  Program$Builder.prototype.div_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '/', that);
  };
  Program$Builder.prototype.rem_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '%', that);
  };
  Program$Builder.prototype.eq_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '==', that);
  };
  Program$Builder.prototype.ne_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '!=', that);
  };
  Program$Builder.prototype.lt_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '<', that);
  };
  Program$Builder.prototype.le_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '<=', that);
  };
  Program$Builder.prototype.gt_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '>', that);
  };
  Program$Builder.prototype.ge_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '>=', that);
  };
  Program$Builder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Builder',
    interfaces: []
  };
  function Program$Visitor(default_0) {
    this.default = default_0;
  }
  Program$Visitor.prototype.visit_57b21j$ = function (stm) {
    if (Kotlin.isType(stm, Program$Stm$Stms))
      this.visit_1xgyq4$(stm);
    else if (Kotlin.isType(stm, Program$Stm$Set))
      this.visit_tq3hhf$(stm);
    else if (Kotlin.isType(stm, Program$Stm$If))
      this.visit_ceyg7y$(stm);
    else if (Kotlin.isType(stm, Program$Stm$Discard))
      this.visit_d6ige1$(stm);
    else
      Kotlin.noWhenBranchMatched();
  };
  Program$Visitor.prototype.visit_1xgyq4$ = function (stms) {
    var tmp$;
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_57b21j$(stm);
    }
  };
  Program$Visitor.prototype.visit_ceyg7y$ = function (stm) {
    this.visit_dq1c34$(stm.cond);
    this.visit_57b21j$(stm.tbody);
  };
  Program$Visitor.prototype.visit_tq3hhf$ = function (stm) {
    this.visit_dq1c34$(stm.from);
    this.visit_dq1c34$(stm.to);
  };
  Program$Visitor.prototype.visit_d6ige1$ = function (stm) {
  };
  Program$Visitor.prototype.visit_dq1c34$ = function (operand) {
    if (Kotlin.isType(operand, Variable))
      return this.visit_bmfbl7$(operand);
    else if (Kotlin.isType(operand, Program$Binop))
      return this.visit_s5t3yz$(operand);
    else if (Kotlin.isType(operand, Program$BoolLiteral))
      return this.visit_zamv4y$(operand);
    else if (Kotlin.isType(operand, Program$IntLiteral))
      return this.visit_jod55v$(operand);
    else if (Kotlin.isType(operand, Program$FloatLiteral))
      return this.visit_u1pe22$(operand);
    else if (Kotlin.isType(operand, Program$Vector))
      return this.visit_b87eze$(operand);
    else if (Kotlin.isType(operand, Program$Swizzle))
      return this.visit_sbsglh$(operand);
    else if (Kotlin.isType(operand, Program$ArrayAccess))
      return this.visit_5pi8d6$(operand);
    else if (Kotlin.isType(operand, Program$Func))
      return this.visit_j8ixcp$(operand);
    else
      return invalidOp("Don't know how to visit operand " + operand);
  };
  Program$Visitor.prototype.visit_j8ixcp$ = function (func) {
    var tmp$;
    tmp$ = func.ops.iterator();
    while (tmp$.hasNext()) {
      var op = tmp$.next();
      this.visit_dq1c34$(op);
    }
    return this.default;
  };
  Program$Visitor.prototype.visit_bmfbl7$ = function (operand) {
    if (Kotlin.isType(operand, Attribute))
      return this.visit_3kqgd9$(operand);
    else if (Kotlin.isType(operand, Varying))
      return this.visit_b38853$(operand);
    else if (Kotlin.isType(operand, Uniform))
      return this.visit_2f4vi3$(operand);
    else if (Kotlin.isType(operand, Output))
      return this.visit_e3ui06$(operand);
    else if (Kotlin.isType(operand, Temp))
      return this.visit_nykr6b$(operand);
    else
      return invalidOp("Don't know how to visit basename " + operand);
  };
  Program$Visitor.prototype.visit_nykr6b$ = function (temp) {
    return this.default;
  };
  Program$Visitor.prototype.visit_3kqgd9$ = function (attribute) {
    return this.default;
  };
  Program$Visitor.prototype.visit_b38853$ = function (varying) {
    return this.default;
  };
  Program$Visitor.prototype.visit_2f4vi3$ = function (uniform) {
    return this.default;
  };
  Program$Visitor.prototype.visit_e3ui06$ = function (output) {
    return this.default;
  };
  Program$Visitor.prototype.visit_s5t3yz$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    this.visit_dq1c34$(operand.right);
    return this.default;
  };
  Program$Visitor.prototype.visit_sbsglh$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    return this.default;
  };
  Program$Visitor.prototype.visit_5pi8d6$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    this.visit_dq1c34$(operand.index);
    return this.default;
  };
  Program$Visitor.prototype.visit_b87eze$ = function (operand) {
    var tmp$, tmp$_0;
    tmp$ = operand.ops;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var op = tmp$[tmp$_0];
      this.visit_dq1c34$(op);
    }
    return this.default;
  };
  Program$Visitor.prototype.visit_jod55v$ = function (operand) {
    return this.default;
  };
  Program$Visitor.prototype.visit_u1pe22$ = function (operand) {
    return this.default;
  };
  Program$Visitor.prototype.visit_zamv4y$ = function (operand) {
    return this.default;
  };
  Program$Visitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Visitor',
    interfaces: []
  };
  Program.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Program',
    interfaces: [Closeable]
  };
  function Shader(type, stm) {
    this.type = type;
    this.stm = stm;
    var $receiver = LinkedHashSet_init();
    (new Shader$uniforms$lambda$ObjectLiteral($receiver, Unit)).visit_57b21j$(this.stm);
    this.uniforms = toSet($receiver);
    var $receiver_0 = LinkedHashSet_init();
    (new Shader$attributes$lambda$ObjectLiteral($receiver_0, Unit)).visit_57b21j$(this.stm);
    this.attributes = toSet($receiver_0);
  }
  function Shader$uniforms$lambda$ObjectLiteral(closure$out, default_0) {
    this.closure$out = closure$out;
    Program$Visitor.call(this, default_0);
  }
  Shader$uniforms$lambda$ObjectLiteral.prototype.visit_2f4vi3$ = function (uniform) {
    this.closure$out;
    this.closure$out.add_11rb$(uniform);
  };
  Shader$uniforms$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Program$Visitor]
  };
  function Shader$attributes$lambda$ObjectLiteral(closure$out, default_0) {
    this.closure$out = closure$out;
    Program$Visitor.call(this, default_0);
  }
  Shader$attributes$lambda$ObjectLiteral.prototype.visit_3kqgd9$ = function (attribute) {
    this.closure$out;
    this.closure$out.add_11rb$(attribute);
  };
  Shader$attributes$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Program$Visitor]
  };
  Shader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shader',
    interfaces: []
  };
  function VertexShader(stm) {
    Shader.call(this, ShaderType$VERTEX_getInstance(), stm);
  }
  VertexShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexShader',
    interfaces: [Shader]
  };
  function FragmentShader(stm) {
    Shader.call(this, ShaderType$FRAGMENT_getInstance(), stm);
  }
  FragmentShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FragmentShader',
    interfaces: [Shader]
  };
  function appending($receiver, callback) {
    return new FragmentShader(new Program$Stm$Stms(listOf([$receiver.stm, FragmentShader_0(callback).stm])));
  }
  function VertexShader_0(callback) {
    var builder = new Program$Builder(ShaderType$VERTEX_getInstance());
    callback(builder);
    return new VertexShader(new Program$Stm$Stms(builder.outputStms));
  }
  function FragmentShader_0(callback) {
    var builder = new Program$Builder(ShaderType$FRAGMENT_getInstance());
    callback(builder);
    return new FragmentShader(new Program$Stm$Stms(builder.outputStms));
  }
  function VertexLayout(attr, layoutSize) {
    this.layoutSize_0 = layoutSize;
    this.myattr_0 = attr;
    this.attributes = attr;
    this._lastPos_0 = 0;
    var $receiver = this.myattr_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var a = item.type.kind.bytesSize;
      tmp$_0.call(destination, a <= 1 ? 1 : a);
    }
    this.alignments = destination;
    var $receiver_0 = this.myattr_0;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      if (item_0.offset != null) {
        this._lastPos_0 = item_0.offset;
      }
       else {
        this._lastPos_0 = nextAlignedTo(this._lastPos_0, item_0.type.kind.bytesSize);
      }
      var out = this._lastPos_0;
      this._lastPos_0 = this._lastPos_0 + item_0.type.bytesSize | 0;
      tmp$_2.call(destination_0, out);
    }
    this.attributePositions = destination_0;
    var tmp$_3;
    this.maxAlignment = (tmp$_3 = max(this.alignments)) != null ? tmp$_3 : 1;
    var tmp$_4;
    this.totalSize = (tmp$_4 = this.layoutSize_0) != null ? tmp$_4 : nextAlignedTo(this._lastPos_0, this.maxAlignment);
  }
  VertexLayout.prototype.toString = function () {
    var $receiver = this.myattr_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    return 'VertexLayout[' + joinToString(destination, ', ') + ']';
  };
  VertexLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexLayout',
    interfaces: []
  };
  function VertexLayout_init(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, attributes, null);
    return $this;
  }
  function VertexLayout_init_0(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList(attributes), null);
    return $this;
  }
  function VertexLayout_init_1(attributes, layoutSize, $this) {
    if (layoutSize === void 0)
      layoutSize = null;
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList(attributes), layoutSize);
    return $this;
  }
  function AGFactorySoftware() {
    this.supportsNativeFrame_tmfibi$_0 = false;
  }
  Object.defineProperty(AGFactorySoftware.prototype, 'supportsNativeFrame', {
    get: function () {
      return this.supportsNativeFrame_tmfibi$_0;
    }
  });
  AGFactorySoftware.prototype.create_iozxf8$ = function (nativeControl, config) {
    var tmp$, tmp$_0;
    return new AGSoftware((tmp$_0 = Kotlin.isType(tmp$ = nativeControl, Bitmap32) ? tmp$ : null) != null ? tmp$_0 : new Bitmap32(640, 480));
  };
  AGFactorySoftware.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  AGFactorySoftware.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGFactorySoftware',
    interfaces: [AGFactory]
  };
  function AGSoftware(bitmap) {
    AG.call(this);
    this.bitmap = bitmap;
    this.nativeComponent_wz502q$_0 = this.bitmap;
    this.ready();
  }
  Object.defineProperty(AGSoftware.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_wz502q$_0;
    }
  });
  AGSoftware.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGSoftware',
    interfaces: [AG]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korag = package$soywiz.korag || (package$soywiz.korag = {});
  package$korag.AGFactory = AGFactory;
  package$korag.AGConfig = AGConfig;
  package$korag.AGContainer = AGContainer;
  package$korag.AGWindow = AGWindow;
  $$importsForInline$$.kmem = $module$kmem;
  Object.defineProperty(AG$BlendEquation, 'ADD', {
    get: AG$BlendEquation$ADD_getInstance
  });
  Object.defineProperty(AG$BlendEquation, 'SUBTRACT', {
    get: AG$BlendEquation$SUBTRACT_getInstance
  });
  Object.defineProperty(AG$BlendEquation, 'REVERSE_SUBTRACT', {
    get: AG$BlendEquation$REVERSE_SUBTRACT_getInstance
  });
  AG.BlendEquation = AG$BlendEquation;
  Object.defineProperty(AG$BlendFactor, 'DESTINATION_ALPHA', {
    get: AG$BlendFactor$DESTINATION_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'DESTINATION_COLOR', {
    get: AG$BlendFactor$DESTINATION_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE', {
    get: AG$BlendFactor$ONE_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_DESTINATION_ALPHA', {
    get: AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_DESTINATION_COLOR', {
    get: AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_SOURCE_ALPHA', {
    get: AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_SOURCE_COLOR', {
    get: AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'SOURCE_ALPHA', {
    get: AG$BlendFactor$SOURCE_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'SOURCE_COLOR', {
    get: AG$BlendFactor$SOURCE_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ZERO', {
    get: AG$BlendFactor$ZERO_getInstance
  });
  AG.BlendFactor = AG$BlendFactor;
  AG.Scissor = AG$Scissor;
  Object.defineProperty(AG$Blending, 'Companion', {
    get: AG$Blending$Companion_getInstance
  });
  AG.Blending_init_6oerul$ = AG$AG$Blending_init;
  AG.Blending = AG$Blending;
  AG.BitmapSourceBase = AG$BitmapSourceBase;
  Object.defineProperty(AG$SyncBitmapSource, 'Companion', {
    get: AG$SyncBitmapSource$Companion_getInstance
  });
  AG.SyncBitmapSource = AG$SyncBitmapSource;
  Object.defineProperty(AG$AsyncBitmapSource, 'Companion', {
    get: AG$AsyncBitmapSource$Companion_getInstance
  });
  AG.AsyncBitmapSource = AG$AsyncBitmapSource;
  Object.defineProperty(AG$TextureKind, 'RGBA', {
    get: AG$TextureKind$RGBA_getInstance
  });
  Object.defineProperty(AG$TextureKind, 'LUMINANCE', {
    get: AG$TextureKind$LUMINANCE_getInstance
  });
  AG.TextureKind = AG$TextureKind;
  AG.Texture = AG$Texture;
  AG.TextureUnit = AG$TextureUnit;
  Object.defineProperty(AG$Buffer$Kind, 'INDEX', {
    get: AG$Buffer$Kind$INDEX_getInstance
  });
  Object.defineProperty(AG$Buffer$Kind, 'VERTEX', {
    get: AG$Buffer$Kind$VERTEX_getInstance
  });
  AG$Buffer.Kind = AG$Buffer$Kind;
  AG.Buffer = AG$Buffer;
  Object.defineProperty(AG$DrawType, 'POINTS', {
    get: AG$DrawType$POINTS_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINE_STRIP', {
    get: AG$DrawType$LINE_STRIP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINE_LOOP', {
    get: AG$DrawType$LINE_LOOP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINES', {
    get: AG$DrawType$LINES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLES', {
    get: AG$DrawType$TRIANGLES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_STRIP', {
    get: AG$DrawType$TRIANGLE_STRIP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_FAN', {
    get: AG$DrawType$TRIANGLE_FAN_getInstance
  });
  AG.DrawType = AG$DrawType;
  Object.defineProperty(AG$StencilOp, 'DECREMENT_SATURATE', {
    get: AG$StencilOp$DECREMENT_SATURATE_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'DECREMENT_WRAP', {
    get: AG$StencilOp$DECREMENT_WRAP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INCREMENT_SATURATE', {
    get: AG$StencilOp$INCREMENT_SATURATE_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INCREMENT_WRAP', {
    get: AG$StencilOp$INCREMENT_WRAP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INVERT', {
    get: AG$StencilOp$INVERT_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'KEEP', {
    get: AG$StencilOp$KEEP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'SET', {
    get: AG$StencilOp$SET_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'ZERO', {
    get: AG$StencilOp$ZERO_getInstance
  });
  AG.StencilOp = AG$StencilOp;
  Object.defineProperty(AG$TriangleFace, 'FRONT', {
    get: AG$TriangleFace$FRONT_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'BACK', {
    get: AG$TriangleFace$BACK_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'FRONT_AND_BACK', {
    get: AG$TriangleFace$FRONT_AND_BACK_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'NONE', {
    get: AG$TriangleFace$NONE_getInstance
  });
  AG.TriangleFace = AG$TriangleFace;
  Object.defineProperty(AG$CompareMode, 'ALWAYS', {
    get: AG$CompareMode$ALWAYS_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'EQUAL', {
    get: AG$CompareMode$EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'GREATER', {
    get: AG$CompareMode$GREATER_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'GREATER_EQUAL', {
    get: AG$CompareMode$GREATER_EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'LESS', {
    get: AG$CompareMode$LESS_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'LESS_EQUAL', {
    get: AG$CompareMode$LESS_EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'NEVER', {
    get: AG$CompareMode$NEVER_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'NOT_EQUAL', {
    get: AG$CompareMode$NOT_EQUAL_getInstance
  });
  AG.CompareMode = AG$CompareMode;
  AG.ColorMaskState = AG$ColorMaskState;
  Object.defineProperty(AG$FrontFace, 'BOTH', {
    get: AG$FrontFace$BOTH_getInstance
  });
  Object.defineProperty(AG$FrontFace, 'CW', {
    get: AG$FrontFace$CW_getInstance
  });
  Object.defineProperty(AG$FrontFace, 'CCW', {
    get: AG$FrontFace$CCW_getInstance
  });
  AG.FrontFace = AG$FrontFace;
  AG.RenderState = AG$RenderState;
  AG.StencilState = AG$StencilState;
  AG.BaseRenderBuffer = AG$BaseRenderBuffer;
  AG.RenderBuffer = AG$RenderBuffer;
  $$importsForInline$$.korag = _;
  $$importsForInline$$.korim = $module$korim;
  $$importsForInline$$.kds = $module$kds;
  AG.TextureDrawer = AG$TextureDrawer;
  Object.defineProperty(AG$UniformValues, 'Companion', {
    get: AG$UniformValues$Companion_getInstance
  });
  AG.UniformValues_init_t0ouyw$ = AG$AG$UniformValues_init;
  AG.UniformValues = AG$UniformValues;
  $$importsForInline$$.korma = $module$korma;
  package$korag.AG = AG;
  package$korag.toRenderFboIntoBack_56elpi$ = toRenderFboIntoBack;
  package$korag.toRenderImageIntoFbo_56elpi$ = toRenderImageIntoFbo;
  package$korag.ProgramWithDefault_txi3di$ = ProgramWithDefault;
  Object.defineProperty(package$korag, 'DefaultShaders', {
    get: DefaultShaders_getInstance
  });
  var package$internal = package$korag.internal || (package$korag.internal = {});
  Object.defineProperty(package$internal, 'KORAG_VERSION_8be2vx$', {
    get: function () {
      return KORAG_VERSION;
    }
  });
  var package$log = package$korag.log || (package$korag.log = {});
  package$log.DummyAG = DummyAG;
  LogAG.LogTexture = LogAG$LogTexture;
  LogAG.LogBuffer = LogAG$LogBuffer;
  LogAG.LogRenderBuffer = LogAG$LogRenderBuffer;
  package$log.LogAG = LogAG;
  var package$shader = package$korag.shader || (package$korag.shader = {});
  package$shader.DoubleDelegatedUniform = DoubleDelegatedUniform;
  package$shader.FloatDelegatedUniform = FloatDelegatedUniform;
  package$shader.IntDelegatedUniform = IntDelegatedUniform;
  package$shader.BoolDelegatedUniform = BoolDelegatedUniform;
  package$shader.UniformFloatStorage = UniformFloatStorage;
  package$shader.UniformValueStorage = UniformValueStorage;
  package$shader.storageFor_pq722g$ = storageFor;
  package$shader.storageForMatrix3D_8nu70c$ = storageForMatrix3D;
  var package$gl = package$shader.gl || (package$shader.gl = {});
  package$gl.toNewGlslString_9hqjge$ = toNewGlslString;
  package$gl.toGlSlString_chci2g$ = toGlSlString;
  package$gl.toGlSlString_jdx5zw$ = toGlSlString_0;
  $$importsForInline$$.korio = $module$korio;
  package$gl.GlslGenerator = GlslGenerator;
  package$gl.toGlSl_twd9hr$ = toGlSl;
  Object.defineProperty(VarKind, 'TBYTE', {
    get: VarKind$TBYTE_getInstance
  });
  Object.defineProperty(VarKind, 'TUNSIGNED_BYTE', {
    get: VarKind$TUNSIGNED_BYTE_getInstance
  });
  Object.defineProperty(VarKind, 'TSHORT', {
    get: VarKind$TSHORT_getInstance
  });
  Object.defineProperty(VarKind, 'TUNSIGNED_SHORT', {
    get: VarKind$TUNSIGNED_SHORT_getInstance
  });
  Object.defineProperty(VarKind, 'TINT', {
    get: VarKind$TINT_getInstance
  });
  Object.defineProperty(VarKind, 'TFLOAT', {
    get: VarKind$TFLOAT_getInstance
  });
  package$shader.VarKind = VarKind;
  Object.defineProperty(VarType, 'TVOID', {
    get: VarType$TVOID_getInstance
  });
  Object.defineProperty(VarType, 'Mat2', {
    get: VarType$Mat2_getInstance
  });
  Object.defineProperty(VarType, 'Mat3', {
    get: VarType$Mat3_getInstance
  });
  Object.defineProperty(VarType, 'Mat4', {
    get: VarType$Mat4_getInstance
  });
  Object.defineProperty(VarType, 'TextureUnit', {
    get: VarType$TextureUnit_getInstance
  });
  Object.defineProperty(VarType, 'Int1', {
    get: VarType$Int1_getInstance
  });
  Object.defineProperty(VarType, 'Float1', {
    get: VarType$Float1_getInstance
  });
  Object.defineProperty(VarType, 'Float2', {
    get: VarType$Float2_getInstance
  });
  Object.defineProperty(VarType, 'Float3', {
    get: VarType$Float3_getInstance
  });
  Object.defineProperty(VarType, 'Float4', {
    get: VarType$Float4_getInstance
  });
  Object.defineProperty(VarType, 'Short1', {
    get: VarType$Short1_getInstance
  });
  Object.defineProperty(VarType, 'Short2', {
    get: VarType$Short2_getInstance
  });
  Object.defineProperty(VarType, 'Short3', {
    get: VarType$Short3_getInstance
  });
  Object.defineProperty(VarType, 'Short4', {
    get: VarType$Short4_getInstance
  });
  Object.defineProperty(VarType, 'Bool1', {
    get: VarType$Bool1_getInstance
  });
  Object.defineProperty(VarType, 'Byte4', {
    get: VarType$Byte4_getInstance
  });
  Object.defineProperty(VarType, 'SByte1', {
    get: VarType$SByte1_getInstance
  });
  Object.defineProperty(VarType, 'SByte2', {
    get: VarType$SByte2_getInstance
  });
  Object.defineProperty(VarType, 'SByte3', {
    get: VarType$SByte3_getInstance
  });
  Object.defineProperty(VarType, 'SByte4', {
    get: VarType$SByte4_getInstance
  });
  Object.defineProperty(VarType, 'UByte1', {
    get: VarType$UByte1_getInstance
  });
  Object.defineProperty(VarType, 'UByte2', {
    get: VarType$UByte2_getInstance
  });
  Object.defineProperty(VarType, 'UByte3', {
    get: VarType$UByte3_getInstance
  });
  Object.defineProperty(VarType, 'UByte4', {
    get: VarType$UByte4_getInstance
  });
  Object.defineProperty(VarType, 'SShort1', {
    get: VarType$SShort1_getInstance
  });
  Object.defineProperty(VarType, 'SShort2', {
    get: VarType$SShort2_getInstance
  });
  Object.defineProperty(VarType, 'SShort3', {
    get: VarType$SShort3_getInstance
  });
  Object.defineProperty(VarType, 'SShort4', {
    get: VarType$SShort4_getInstance
  });
  Object.defineProperty(VarType, 'UShort1', {
    get: VarType$UShort1_getInstance
  });
  Object.defineProperty(VarType, 'UShort2', {
    get: VarType$UShort2_getInstance
  });
  Object.defineProperty(VarType, 'UShort3', {
    get: VarType$UShort3_getInstance
  });
  Object.defineProperty(VarType, 'UShort4', {
    get: VarType$UShort4_getInstance
  });
  Object.defineProperty(VarType, 'SInt1', {
    get: VarType$SInt1_getInstance
  });
  Object.defineProperty(VarType, 'SInt2', {
    get: VarType$SInt2_getInstance
  });
  Object.defineProperty(VarType, 'SInt3', {
    get: VarType$SInt3_getInstance
  });
  Object.defineProperty(VarType, 'SInt4', {
    get: VarType$SInt4_getInstance
  });
  Object.defineProperty(VarType, 'Companion', {
    get: VarType$Companion_getInstance
  });
  package$shader.VarType = VarType;
  Object.defineProperty(ShaderType, 'VERTEX', {
    get: ShaderType$VERTEX_getInstance
  });
  Object.defineProperty(ShaderType, 'FRAGMENT', {
    get: ShaderType$FRAGMENT_getInstance
  });
  package$shader.ShaderType = ShaderType;
  package$shader.Operand = Operand;
  package$shader.Variable_init_hkcue2$ = Variable_init;
  package$shader.Variable = Variable;
  package$shader.Attribute_init_do1xv$ = Attribute_init;
  package$shader.Attribute = Attribute;
  package$shader.Varying_init_hkcue2$ = Varying_init;
  package$shader.Varying = Varying;
  package$shader.Uniform_init_hkcue2$ = Uniform_init;
  package$shader.Uniform = Uniform;
  package$shader.Temp_init_gig876$ = Temp_init;
  package$shader.Temp = Temp;
  Object.defineProperty(package$shader, 'Output', {
    get: Output_getInstance
  });
  Program.Binop = Program$Binop;
  Program.IntLiteral = Program$IntLiteral;
  Program.FloatLiteral = Program$FloatLiteral;
  Program.BoolLiteral = Program$BoolLiteral;
  Program.Vector = Program$Vector;
  Program.Swizzle = Program$Swizzle;
  Program.ArrayAccess = Program$ArrayAccess;
  Program.Func_init_ohzs2t$ = Program$Program$Func_init;
  Program.Func = Program$Func;
  Program$Stm.Stms = Program$Stm$Stms;
  Program$Stm.Set = Program$Stm$Set;
  Program$Stm.Discard = Program$Stm$Discard;
  Program$Stm.If = Program$Stm$If;
  Program.Stm = Program$Stm;
  Program.Builder = Program$Builder;
  Program.Visitor = Program$Visitor;
  package$shader.Program = Program;
  package$shader.Shader = Shader;
  package$shader.VertexShader = VertexShader;
  package$shader.FragmentShader = FragmentShader;
  package$shader.appending_8cn1qe$ = appending;
  package$shader.VertexShader_8zzl3$ = VertexShader_0;
  package$shader.FragmentShader_8zzl3$ = FragmentShader_0;
  package$shader.VertexLayout_init_agxe9a$ = VertexLayout_init;
  package$shader.VertexLayout_init_f1u95s$ = VertexLayout_init_0;
  package$shader.VertexLayout_init_hub3qn$ = VertexLayout_init_1;
  package$shader.VertexLayout = VertexLayout;
  var package$software = package$korag.software || (package$korag.software = {});
  package$software.AGFactorySoftware = AGFactorySoftware;
  package$software.AGSoftware = AGSoftware;
  KORAG_VERSION = '1.6.8';
  Kotlin.defineModule('korag', _);
  return _;
}));

//# sourceMappingURL=korag.js.map
