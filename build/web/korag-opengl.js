(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korag', 'kmem', 'korma', 'korio', 'kds', 'kgl', 'korim'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korag'), require('kmem'), require('korma'), require('korio'), require('kds'), require('kgl'), require('korim'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korag-opengl'.");
    }
    if (typeof korag === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'korag' was not found. Please, check whether 'korag' is loaded prior to 'korag-opengl'.");
    }
    if (typeof kmem === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'kmem' was not found. Please, check whether 'kmem' is loaded prior to 'korag-opengl'.");
    }
    if (typeof korma === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'korma' was not found. Please, check whether 'korma' is loaded prior to 'korag-opengl'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korag-opengl'.");
    }
    if (typeof kds === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'kds' was not found. Please, check whether 'kds' is loaded prior to 'korag-opengl'.");
    }
    if (typeof kgl === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'kgl' was not found. Please, check whether 'kgl' is loaded prior to 'korag-opengl'.");
    }
    if (typeof korim === 'undefined') {
      throw new Error("Error loading module 'korag-opengl'. Its dependency 'korim' was not found. Please, check whether 'korim' is loaded prior to 'korag-opengl'.");
    }
    root['korag-opengl'] = factory(typeof this['korag-opengl'] === 'undefined' ? {} : this['korag-opengl'], kotlin, korag, kmem, korma, korio, kds, kgl, korim);
  }
}(this, function (_, Kotlin, $module$korag, $module$kmem, $module$korma, $module$korio, $module$kds, $module$kgl, $module$korim) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var AG = $module$korag.com.soywiz.korag.AG;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var AG$RenderBuffer = $module$korag.com.soywiz.korag.AG.RenderBuffer;
  var FBuffer = $module$kmem.com.soywiz.kmem.FBuffer;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var AG$TextureUnit = $module$korag.com.soywiz.korag.AG.TextureUnit;
  var Matrix3D = $module$korma.com.soywiz.korma.geom.Matrix3D;
  var MajorOrder = $module$korma.com.soywiz.korma.geom.MajorOrder;
  var copyToFloatWxH = $module$korma.com.soywiz.korma.geom.copyToFloatWxH_zc45sq$;
  var arraycopy = $module$kmem.com.soywiz.kmem.arraycopy_kf4lg$;
  var invalidOp = $module$korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var numberToDouble = Kotlin.numberToDouble;
  var Vector3D = $module$korma.com.soywiz.korma.geom.Vector3D;
  var AG$FrontFace = $module$korag.com.soywiz.korag.AG.FrontFace;
  var AG$CompareMode = $module$korag.com.soywiz.korag.AG.CompareMode;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toNewGlslString = $module$korag.com.soywiz.korag.shader.gl.toNewGlslString_9hqjge$;
  var getShaderiv = $module$kgl.com.soywiz.kgl.getShaderiv_3majd4$;
  var getShaderInfoLog = $module$kgl.com.soywiz.kgl.getShaderInfoLog_4t3mty$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var FastStringMap = $module$kds.com.soywiz.kds.FastStringMap_287e2$;
  var Closeable = $module$korio.com.soywiz.korio.lang.Closeable;
  var ensureNotNull = Kotlin.ensureNotNull;
  var AG$Buffer = $module$korag.com.soywiz.korag.AG.Buffer;
  var AG$Buffer$Kind = $module$korag.com.soywiz.korag.AG.Buffer.Kind;
  var unsupported = $module$korio.com.soywiz.korio.lang.unsupported_61zpoe$;
  var NativeImage = $module$korim.com.soywiz.korim.bitmap.NativeImage;
  var arraycopy_0 = $module$kmem.com.soywiz.kmem.arraycopy_8tjh9j$;
  var Bitmap8 = $module$korim.com.soywiz.korim.bitmap.Bitmap8;
  var arraycopy_1 = $module$kmem.com.soywiz.kmem.arraycopy_ou7pqt$;
  var Bitmap32 = $module$korim.com.soywiz.korim.bitmap.Bitmap32;
  var unsupported_0 = $module$korio.com.soywiz.korio.lang.unsupported;
  var get_isPowerOfTwo = $module$kmem.com.soywiz.kmem.get_isPowerOfTwo_s8ev3n$;
  var AG$Texture = $module$korag.com.soywiz.korag.AG.Texture;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Extra$PropertyThis = $module$kds.com.soywiz.kds.Extra.PropertyThis;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var AGFactory = $module$korag.com.soywiz.korag.AGFactory;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var KmlGlJsCanvas = $module$kgl.com.soywiz.kgl.KmlGlJsCanvas;
  var Once = $module$korio.com.soywiz.korio.util.Once;
  var AGContainer = $module$korag.com.soywiz.korag.AGContainer;
  AGOpengl$GlRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  AGOpengl$GlRenderBuffer.prototype.constructor = AGOpengl$GlRenderBuffer;
  AGOpengl$GlBuffer.prototype = Object.create(AG$Buffer.prototype);
  AGOpengl$GlBuffer.prototype.constructor = AGOpengl$GlBuffer;
  AGOpengl$GlTexture.prototype = Object.create(AG$Texture.prototype);
  AGOpengl$GlTexture.prototype.constructor = AGOpengl$GlTexture;
  AGOpengl.prototype = Object.create(AG.prototype);
  AGOpengl.prototype.constructor = AGOpengl;
  AGWebgl.prototype = Object.create(AGOpengl.prototype);
  AGWebgl.prototype.constructor = AGWebgl;
  function AGOpengl() {
    AG.call(this);
    this.isGlAvailable_1m52nr$_0 = true;
    this.gles_hpf8g2$_0 = false;
    this.webgl_qtlfii$_0 = false;
    this.devicePixelRatio_n8znee$_0 = 1.0;
    this.lastRenderContextId = 0;
    this.TEMP_MAX_MATRICES_hwkk65$_0 = 1024;
    this.tempBuffer1 = FBuffer.Companion.invoke_za3lpa$(4);
    this.tempBuffer = FBuffer.Companion.invoke_za3lpa$(64 * this.TEMP_MAX_MATRICES_hwkk65$_0 | 0);
    this.tempBufferM2 = FBuffer.Companion.invoke_za3lpa$(16);
    this.tempBufferM3 = FBuffer.Companion.invoke_za3lpa$(36);
    this.tempBufferM4 = FBuffer.Companion.invoke_za3lpa$(64);
    this.tempF32 = this.tempBuffer.arrayFloat;
    this.tempFloats_kzvmdi$_0 = new Float32Array(16 * this.TEMP_MAX_MATRICES_hwkk65$_0 | 0);
    this.mat3dArray_qu1n07$_0 = [new Matrix3D()];
    this.programs_nsjc6a$_0 = HashMap_init();
  }
  Object.defineProperty(AGOpengl.prototype, 'isGlAvailable', {
    get: function () {
      return this.isGlAvailable_1m52nr$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'gles', {
    get: function () {
      return this.gles_hpf8g2$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'webgl', {
    get: function () {
      return this.webgl_qtlfii$_0;
    }
  });
  Object.defineProperty(AGOpengl.prototype, 'devicePixelRatio', {
    get: function () {
      return this.devicePixelRatio_n8znee$_0;
    },
    set: function (devicePixelRatio) {
      this.devicePixelRatio_n8znee$_0 = devicePixelRatio;
    }
  });
  AGOpengl.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AGOpengl$GlBuffer(this, kind);
  };
  AGOpengl.prototype.setViewport_tjonv8$ = function (x, y, width, height) {
    AG.prototype.setViewport_tjonv8$.call(this, x, y, width, height);
    if (this.isGlAvailable) {
      this.gl.viewport_tjonv8$(x, y, width, height);
    }
  };
  AGOpengl.prototype.setSwapInterval_za3lpa$ = function (value) {
  };
  AGOpengl.prototype.setBackBuffer_vux9f0$ = function (width, height) {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, 0);
    this.gl.bindRenderbuffer_vux9f0$(this.gl.RENDERBUFFER, 0);
    this.gl.bindFramebuffer_vux9f0$(this.gl.FRAMEBUFFER, 0);
    this.setViewport_tjonv8$(0, 0, width, height);
  };
  function AGOpengl$GlRenderBuffer($outer) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.cachedVersion = -1;
    var tmp$;
    this.id_4ayp91$_0 = (tmp$ = this.$outer.lastRenderContextId, this.$outer.lastRenderContextId = tmp$ + 1 | 0, tmp$);
    this.depth = FBuffer.Companion.invoke_za3lpa$(4);
    this.framebuffer = FBuffer.Companion.invoke_za3lpa$(4);
  }
  Object.defineProperty(AGOpengl$GlRenderBuffer.prototype, 'id', {
    get: function () {
      return this.id_4ayp91$_0;
    }
  });
  Object.defineProperty(AGOpengl$GlRenderBuffer.prototype, 'ftex', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.tex, AGOpengl$GlTexture) ? tmp$ : throwCCE();
    }
  });
  AGOpengl$GlRenderBuffer.prototype.set = function () {
    var $receiver = this.$outer.gl;
    this.$outer;
    var this$AGOpengl = this.$outer;
    if (this.dirty) {
      this.dirty = false;
      this$AGOpengl.setSwapInterval_za3lpa$(0);
      if (this.cachedVersion !== this$AGOpengl.contextVersion) {
        this.cachedVersion = this$AGOpengl.contextVersion;
        $receiver.genRenderbuffers_26fqmq$(1, this.depth);
        $receiver.genFramebuffers_26fqmq$(1, this.framebuffer);
      }
      $receiver.bindTexture_vux9f0$($receiver.TEXTURE_2D, this.ftex.tex);
      $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MAG_FILTER, $receiver.LINEAR);
      $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MIN_FILTER, $receiver.LINEAR);
      $receiver.texImage2D_byudfd$($receiver.TEXTURE_2D, 0, $receiver.RGBA, this.width, this.height, 0, $receiver.RGBA, $receiver.UNSIGNED_BYTE, null);
      $receiver.bindTexture_vux9f0$($receiver.TEXTURE_2D, 0);
      $receiver.bindRenderbuffer_vux9f0$($receiver.RENDERBUFFER, this.depth.getInt_za3lpa$(0));
      $receiver.renderbufferStorage_tjonv8$($receiver.RENDERBUFFER, $receiver.DEPTH_COMPONENT16, this.width, this.height);
    }
    $receiver.bindFramebuffer_vux9f0$($receiver.FRAMEBUFFER, this.framebuffer.getInt_za3lpa$(0));
    $receiver.framebufferTexture2D_4qozqa$($receiver.FRAMEBUFFER, $receiver.COLOR_ATTACHMENT0, $receiver.TEXTURE_2D, this.ftex.tex, 0);
    $receiver.framebufferRenderbuffer_tjonv8$($receiver.FRAMEBUFFER, $receiver.DEPTH_ATTACHMENT, $receiver.RENDERBUFFER, this.depth.getInt_za3lpa$(0));
    this$AGOpengl.setViewport_tjonv8$(0, 0, this.width, this.height);
  };
  AGOpengl$GlRenderBuffer.prototype.close = function () {
    var $receiver = this.$outer.gl;
    $receiver.deleteFramebuffers_26fqmq$(1, this.framebuffer);
    $receiver.deleteRenderbuffers_26fqmq$(1, this.depth);
    this.framebuffer.setInt_vux9f0$(0, 0);
    this.depth.setInt_vux9f0$(0, 0);
  };
  AGOpengl$GlRenderBuffer.prototype.toString = function () {
    return 'GlRenderBuffer[' + this.id + '](' + this.width + ', ' + this.height + ')';
  };
  AGOpengl$GlRenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  AGOpengl.prototype.createRenderBuffer = function () {
    return new AGOpengl$GlRenderBuffer(this);
  };
  AGOpengl.prototype.toGl_8vgxol$_0 = function ($receiver) {
    switch ($receiver.name) {
      case 'ADD':
        return this.gl.FUNC_ADD;
      case 'SUBTRACT':
        return this.gl.FUNC_SUBTRACT;
      case 'REVERSE_SUBTRACT':
        return this.gl.FUNC_REVERSE_SUBTRACT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_yoxntk$_0 = function ($receiver) {
    switch ($receiver.name) {
      case 'DESTINATION_ALPHA':
        return this.gl.DST_ALPHA;
      case 'DESTINATION_COLOR':
        return this.gl.DST_COLOR;
      case 'ONE':
        return this.gl.ONE;
      case 'ONE_MINUS_DESTINATION_ALPHA':
        return this.gl.ONE_MINUS_DST_ALPHA;
      case 'ONE_MINUS_DESTINATION_COLOR':
        return this.gl.ONE_MINUS_DST_COLOR;
      case 'ONE_MINUS_SOURCE_ALPHA':
        return this.gl.ONE_MINUS_SRC_ALPHA;
      case 'ONE_MINUS_SOURCE_COLOR':
        return this.gl.ONE_MINUS_SRC_COLOR;
      case 'SOURCE_ALPHA':
        return this.gl.SRC_ALPHA;
      case 'SOURCE_COLOR':
        return this.gl.SRC_COLOR;
      case 'ZERO':
        return this.gl.ZERO;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_j3v1aq$ = function ($receiver) {
    switch ($receiver.name) {
      case 'FRONT':
        return this.gl.FRONT;
      case 'BACK':
        return this.gl.BACK;
      case 'FRONT_AND_BACK':
        return this.gl.FRONT_AND_BACK;
      case 'NONE':
        return this.gl.FRONT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_d0rqip$ = function ($receiver) {
    switch ($receiver.name) {
      case 'ALWAYS':
        return this.gl.ALWAYS;
      case 'EQUAL':
        return this.gl.EQUAL;
      case 'GREATER':
        return this.gl.GREATER;
      case 'GREATER_EQUAL':
        return this.gl.GEQUAL;
      case 'LESS':
        return this.gl.LESS;
      case 'LESS_EQUAL':
        return this.gl.LEQUAL;
      case 'NEVER':
        return this.gl.NEVER;
      case 'NOT_EQUAL':
        return this.gl.NOTEQUAL;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_7ptukq$ = function ($receiver) {
    switch ($receiver.name) {
      case 'DECREMENT_SATURATE':
        return this.gl.DECR;
      case 'DECREMENT_WRAP':
        return this.gl.DECR_WRAP;
      case 'INCREMENT_SATURATE':
        return this.gl.INCR;
      case 'INCREMENT_WRAP':
        return this.gl.INCR_WRAP;
      case 'INVERT':
        return this.gl.INVERT;
      case 'KEEP':
        return this.gl.KEEP;
      case 'SET':
        return this.gl.REPLACE;
      case 'ZERO':
        return this.gl.ZERO;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Math_0 = Math;
  AGOpengl.prototype.draw_36194n$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var vattrs = vertexLayout.attributes;
    var vattrspos = vertexLayout.attributePositions;
    if (scissor != null) {
      this.gl.enable_za3lpa$(this.gl.SCISSOR_TEST);
      this.gl.scissor_tjonv8$(scissor.x, this.backHeight - scissor.y - scissor.height | 0, scissor.width, scissor.height);
    }
     else {
      this.gl.disable_za3lpa$(this.gl.SCISSOR_TEST);
    }
    this.checkBuffers_p517yr$(vertices, indices);
    var glProgram = this.getProgram_21rgaz$(program);
    (Kotlin.isType(tmp$ = vertices, AGOpengl$GlBuffer) ? tmp$ : throwCCE()).bind_jm7esb$(this.gl);
    (tmp$_1 = (tmp$_0 = indices) == null || Kotlin.isType(tmp$_0, AGOpengl$GlBuffer) ? tmp$_0 : null) != null ? (tmp$_1.bind_jm7esb$(this.gl), Unit) : null;
    glProgram.use();
    var totalSize = vertexLayout.totalSize;
    tmp$_2 = vattrspos.size;
    for (var n = 0; n < tmp$_2; n++) {
      var att = vattrs.get_za3lpa$(n);
      if (att.active) {
        var off = vattrspos.get_za3lpa$(n);
        var loc = glProgram.getAttribLocation_61zpoe$(att.name);
        var glElementType = this.get_glElementType_bxje6x$(att.type);
        var elementCount = att.type.elementCount;
        if (loc >= 0) {
          this.gl.enableVertexAttribArray_za3lpa$(loc);
          this.gl.vertexAttribPointer_owihk5$(loc, elementCount, glElementType, att.normalized, totalSize, off);
        }
      }
    }
    var textureUnit = 0;
    tmp$_3 = uniforms.uniforms.size;
    for (var n_0 = 0; n_0 < tmp$_3; n_0++) {
      var uniform = uniforms.uniforms.get_za3lpa$(n_0);
      var uniformName = uniform.name;
      var uniformType = uniform.type;
      var value = uniforms.values.get_za3lpa$(n_0);
      var location = this.gl.getUniformLocation_19mbxw$(glProgram.id, uniformName);
      var declArrayCount = uniform.arrayCount;
      var stride = uniform.type.elementCount;
      switch (uniformType.name) {
        case 'TextureUnit':
          var unit = Kotlin.isType(tmp$_4 = value, AG$TextureUnit) ? tmp$_4 : throwCCE();
          this.gl.activeTexture_za3lpa$(this.gl.TEXTURE0 + textureUnit | 0);
          var tex = (tmp$_5 = unit.texture) == null || Kotlin.isType(tmp$_5, AGOpengl$GlTexture) ? tmp$_5 : throwCCE();
          tex != null ? (tex.bindEnsuring(), Unit) : null;
          tex != null ? (tex.setFilter_6taknv$(unit.linear), Unit) : null;
          this.gl.uniform1i_vux9f0$(location, textureUnit);
          textureUnit = textureUnit + 1 | 0;
          break;
        case 'Mat2':
        case 'Mat3':
        case 'Mat4':
          if (Kotlin.isArray(value))
            tmp$_6 = value;
          else if (Kotlin.isType(value, Matrix3D)) {
            var $receiver = this.mat3dArray_qu1n07$_0;
            $receiver[0].copyFrom_p62hku$(value);
            tmp$_6 = $receiver;
          }
           else {
            throw IllegalStateException_init('Not an array or a matrix3d'.toString());
          }

          var matArray = Kotlin.isArray(tmp$_7 = tmp$_6) ? tmp$_7 : throwCCE();
          var arrayCount = Math_0.min(declArrayCount, matArray.length);
          switch (uniformType.name) {
            case 'Mat2':
              tmp$_8 = 2;
              break;
            case 'Mat3':
              tmp$_8 = 3;
              break;
            case 'Mat4':
              tmp$_8 = 4;
              break;
            default:tmp$_8 = -1;
              break;
          }

          var matSize = tmp$_8;
          for (var n_1 = 0; n_1 < arrayCount; n_1++) {
            copyToFloatWxH(matArray[n_1], this.tempFloats_kzvmdi$_0, matSize, matSize, MajorOrder.COLUMN, Kotlin.imul(n_1, stride));
          }

          setFloats(this.tempBuffer, 0, this.tempFloats_kzvmdi$_0, 0, Kotlin.imul(stride, arrayCount));
          if (this.webgl) {
            switch (uniformType.name) {
              case 'Mat2':
                tmp$_9 = this.tempBufferM2;
                break;
              case 'Mat3':
                tmp$_9 = this.tempBufferM3;
                break;
              case 'Mat4':
                tmp$_9 = this.tempBufferM4;
                break;
              default:tmp$_9 = this.tempBufferM4;
                break;
            }
            var tb = tmp$_9;
            for (var n_2 = 0; n_2 < arrayCount; n_2++) {
              var itLocation = arrayCount === 1 ? location : this.gl.getUniformLocation_19mbxw$(glProgram.id, uniform.indexNames[n_2]);
              arraycopy(this.tempBuffer.arrayFloat, Kotlin.imul(n_2, stride), tb.arrayFloat, 0, stride);
              switch (uniform.type.name) {
                case 'Mat2':
                  this.gl.uniformMatrix2fv_24ez2x$(itLocation, 1, false, tb);
                  break;
                case 'Mat3':
                  this.gl.uniformMatrix3fv_24ez2x$(itLocation, 1, false, tb);
                  break;
                case 'Mat4':
                  this.gl.uniformMatrix4fv_24ez2x$(itLocation, 1, false, tb);
                  break;
                default:invalidOp("Don't know how to set uniform matrix " + uniform.type);
                  break;
              }
            }
          }
           else {
            switch (uniform.type.name) {
              case 'Mat2':
                this.gl.uniformMatrix2fv_24ez2x$(location, arrayCount, false, this.tempBuffer);
                break;
              case 'Mat3':
                this.gl.uniformMatrix3fv_24ez2x$(location, arrayCount, false, this.tempBuffer);
                break;
              case 'Mat4':
                this.gl.uniformMatrix4fv_24ez2x$(location, arrayCount, false, this.tempBuffer);
                break;
              default:invalidOp("Don't know how to set uniform matrix " + uniform.type);
                break;
            }
          }

          break;
        case 'Float1':
        case 'Float2':
        case 'Float3':
        case 'Float4':
          var arrayCount_0 = declArrayCount;
          if (Kotlin.isNumber(value))
            this.tempBuffer.setAlignedFloat32_24o109$(0, numberToDouble(value));
          else if (Kotlin.isType(value, Vector3D))
            setFloats(this.tempBuffer, 0, value.data, 0, stride);
          else if (Kotlin.isFloatArray(value)) {
            var b = value.length / stride | 0;
            arrayCount_0 = Math_0.min(declArrayCount, b);
            setFloats(this.tempBuffer, 0, value, 0, Kotlin.imul(stride, arrayCount_0));
          }
           else if (Kotlin.isArray(value)) {
            arrayCount_0 = Math_0.min(declArrayCount, value.length);
            for (var n_3 = 0; n_3 < value.length; n_3++) {
              var vector = Kotlin.isType(tmp$_10 = value[n_3], Vector3D) ? tmp$_10 : throwCCE();
              setFloats(this.tempBuffer, Kotlin.imul(n_3, stride), vector.data, 0, stride);
            }
          }
           else {
            throw IllegalStateException_init(("Unknown type '" + value.toString() + "'").toString());
          }

          if (this.webgl) {
            var tb_0 = this.tempBufferM2;
            tmp$_11 = arrayCount_0;
            for (var n_4 = 0; n_4 < tmp$_11; n_4++) {
              var itLocation_0 = arrayCount_0 === 1 ? location : this.gl.getUniformLocation_19mbxw$(glProgram.id, uniform.indexNames[n_4]);
              var f32 = tb_0.arrayFloat;
              arraycopy(this.tempBuffer.arrayFloat, 0, tb_0.arrayFloat, 0, stride);
              switch (uniform.type.name) {
                case 'Float1':
                  this.gl.uniform1f_24o109$(itLocation_0, f32[0]);
                  break;
                case 'Float2':
                  this.gl.uniform2f_nhq4am$(itLocation_0, f32[0], f32[1]);
                  break;
                case 'Float3':
                  this.gl.uniform3f_eyukp3$(itLocation_0, f32[0], f32[1], f32[2]);
                  break;
                case 'Float4':
                  this.gl.uniform4f_xpxj32$(itLocation_0, f32[0], f32[1], f32[2], f32[3]);
                  break;
                default:break;
              }
            }
          }
           else {
            switch (uniform.type.name) {
              case 'Float1':
                this.gl.uniform1fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              case 'Float2':
                this.gl.uniform2fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              case 'Float3':
                this.gl.uniform3fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              case 'Float4':
                this.gl.uniform4fv_7cqqrs$(location, arrayCount_0, this.tempBuffer);
                break;
              default:break;
            }
          }

          break;
        default:invalidOp("Don't know how to set uniform " + uniform.type);
          break;
      }
    }
    if (blending.enabled) {
      this.gl.enable_za3lpa$(this.gl.BLEND);
      this.gl.blendEquationSeparate_vux9f0$(this.toGl_8vgxol$_0(blending.eqRGB), this.toGl_8vgxol$_0(blending.eqA));
      this.gl.blendFuncSeparate_tjonv8$(this.toGl_yoxntk$_0(blending.srcRGB), this.toGl_yoxntk$_0(blending.dstRGB), this.toGl_yoxntk$_0(blending.srcA), this.toGl_yoxntk$_0(blending.dstA));
    }
     else {
      this.gl.disable_za3lpa$(this.gl.BLEND);
    }
    if (renderState.frontFace === AG$FrontFace.BOTH) {
      this.gl.disable_za3lpa$(this.gl.CULL_FACE);
    }
     else {
      this.gl.enable_za3lpa$(this.gl.CULL_FACE);
      this.gl.frontFace_za3lpa$(renderState.frontFace === AG$FrontFace.CW ? this.gl.CW : this.gl.CCW);
    }
    this.gl.depthMask_6taknv$(renderState.depthMask);
    this.gl.depthRangef_dleff0$(renderState.depthNear, renderState.depthFar);
    this.gl.lineWidth_mx4ult$(renderState.lineWidth);
    if (renderState.depthFunc !== AG$CompareMode.ALWAYS) {
      this.gl.enable_za3lpa$(this.gl.DEPTH_TEST);
      this.gl.depthFunc_za3lpa$(this.toGl_d0rqip$(renderState.depthFunc));
    }
     else {
      this.gl.disable_za3lpa$(this.gl.DEPTH_TEST);
    }
    this.gl.colorMask_nyyhg$(colorMask.red, colorMask.green, colorMask.blue, colorMask.alpha);
    if (stencil.enabled) {
      this.gl.enable_za3lpa$(this.gl.STENCIL_TEST);
      this.gl.stencilFunc_qt1dr2$(this.toGl_d0rqip$(stencil.compareMode), stencil.referenceValue, stencil.readMask);
      this.gl.stencilOp_qt1dr2$(this.toGl_7ptukq$(stencil.actionOnDepthFail), this.toGl_7ptukq$(stencil.actionOnDepthPassStencilFail), this.toGl_7ptukq$(stencil.actionOnBothPass));
      this.gl.stencilMask_za3lpa$(stencil.writeMask);
    }
     else {
      this.gl.disable_za3lpa$(this.gl.STENCIL_TEST);
      this.gl.stencilMask_za3lpa$(0);
    }
    if (indices != null) {
      this.gl.drawElements_tjonv8$(this.get_glDrawMode_7dvn3b$(type), vertexCount, this.gl.UNSIGNED_SHORT, offset);
    }
     else {
      this.gl.drawArrays_qt1dr2$(this.get_glDrawMode_7dvn3b$(type), offset, vertexCount);
    }
    tmp$_12 = vattrs.size;
    for (var n_5 = 0; n_5 < tmp$_12; n_5++) {
      var att_0 = vattrs.get_za3lpa$(n_5);
      if (att_0.active) {
        var loc_0 = glProgram.getAttribLocation_61zpoe$(att_0.name);
        if (loc_0 >= 0) {
          this.gl.disableVertexAttribArray_za3lpa$(loc_0);
        }
      }
    }
  };
  AGOpengl.prototype.get_glDrawMode_7dvn3b$ = function ($receiver) {
    switch ($receiver.name) {
      case 'POINTS':
        return this.gl.POINTS;
      case 'LINE_STRIP':
        return this.gl.LINE_STRIP;
      case 'LINE_LOOP':
        return this.gl.LINE_LOOP;
      case 'LINES':
        return this.gl.LINES;
      case 'TRIANGLE_STRIP':
        return this.gl.TRIANGLE_STRIP;
      case 'TRIANGLE_FAN':
        return this.gl.TRIANGLE_FAN;
      case 'TRIANGLES':
        return this.gl.TRIANGLES;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.get_glElementType_bxje6x$ = function ($receiver) {
    switch ($receiver.kind.name) {
      case 'TBYTE':
        return this.gl.BYTE;
      case 'TUNSIGNED_BYTE':
        return this.gl.UNSIGNED_BYTE;
      case 'TSHORT':
        return this.gl.SHORT;
      case 'TUNSIGNED_SHORT':
        return this.gl.UNSIGNED_SHORT;
      case 'TINT':
        return this.gl.UNSIGNED_INT;
      case 'TFLOAT':
        return this.gl.FLOAT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.getProgram_21rgaz$ = function (program) {
    var $receiver = this.programs_nsjc6a$_0;
    var tmp$;
    var value = $receiver.get_11rb$(program);
    if (value == null) {
      var answer = new AGOpengl$GlProgram(this, this.gl, program);
      $receiver.put_xwzc9p$(program, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  function AGOpengl$GlProgram($outer, gl, program) {
    this.$outer = $outer;
    this.gl = gl;
    this.program = program;
    this.cachedVersion = -1;
    this.id = 0;
    this.fragmentShaderId = 0;
    this.vertexShaderId = 0;
    this.cachedAttribLocations = FastStringMap();
  }
  AGOpengl$GlProgram.prototype.getAttribLocation_61zpoe$ = function (name) {
    var $receiver = this.cachedAttribLocations;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(name);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }
      var out = this.gl.getAttribLocation_19mbxw$(this.id, name);
      $receiver.set(name, out);
      getOrPut$result = out;
    }
     while (false);
    return getOrPut$result;
  };
  AGOpengl$GlProgram.prototype.replaceVersion_0 = function ($receiver, version) {
    return replace($receiver, '#version 100', '#version ' + version);
  };
  AGOpengl$GlProgram.prototype.ensure_0 = function () {
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.id = this.gl.createProgram();
      this.fragmentShaderId = this.createShader_19mbxw$(this.gl.FRAGMENT_SHADER, toNewGlslString(this.program.fragment, this.$outer.gles, get_versionInt(this.gl)));
      this.vertexShaderId = this.createShader_19mbxw$(this.gl.VERTEX_SHADER, toNewGlslString(this.program.vertex, this.$outer.gles, get_versionInt(this.gl)));
      this.gl.attachShader_vux9f0$(this.id, this.fragmentShaderId);
      this.gl.attachShader_vux9f0$(this.id, this.vertexShaderId);
      this.gl.linkProgram_za3lpa$(this.id);
      this.$outer.tempBuffer1.setInt_vux9f0$(0, 0);
      this.gl.getProgramiv_7cqqrs$(this.id, this.gl.LINK_STATUS, this.$outer.tempBuffer1);
    }
  };
  AGOpengl$GlProgram.prototype.createShader_19mbxw$ = function (type, str) {
    var shaderId = this.gl.createShader_za3lpa$(type);
    this.gl.shaderSource_19mbxw$(shaderId, str);
    this.gl.compileShader_za3lpa$(shaderId);
    var out = getShaderiv(this.gl, shaderId, this.gl.COMPILE_STATUS);
    if (out !== this.gl.TRUE) {
      var error = getShaderInfoLog(this.gl, shaderId);
      throw RuntimeException_init('Error Compiling Shader : ' + error + ' : source=' + str + ', gl.versionInt=' + get_versionInt(this.gl) + ', gl.versionString=' + get_versionString(this.gl));
    }
    return shaderId;
  };
  AGOpengl$GlProgram.prototype.use = function () {
    this.ensure_0();
    this.gl.useProgram_za3lpa$(this.id);
  };
  AGOpengl$GlProgram.prototype.unuse = function () {
    this.ensure_0();
    this.gl.useProgram_za3lpa$(0);
  };
  AGOpengl$GlProgram.prototype.close = function () {
    this.gl.deleteShader_za3lpa$(this.fragmentShaderId);
    this.gl.deleteShader_za3lpa$(this.vertexShaderId);
    this.gl.deleteProgram_za3lpa$(this.id);
  };
  AGOpengl$GlProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlProgram',
    interfaces: [Closeable]
  };
  AGOpengl.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
    var bits = 0;
    this.gl.disable_za3lpa$(this.gl.SCISSOR_TEST);
    if (clearColor) {
      bits = bits | this.gl.COLOR_BUFFER_BIT;
      this.gl.clearColor_7b5o5w$(color.rf, color.gf, color.bf, color.af);
    }
    if (clearDepth) {
      bits = bits | this.gl.DEPTH_BUFFER_BIT;
      this.gl.clearDepthf_mx4ult$(depth);
    }
    if (clearStencil) {
      bits = bits | this.gl.STENCIL_BUFFER_BIT;
      this.gl.stencilMask_za3lpa$(-1);
      this.gl.clearStencil_za3lpa$(stencil);
    }
    this.gl.clear_za3lpa$(bits);
  };
  AGOpengl.prototype.createTexture_6taknv$ = function (premultiplied) {
    return new AGOpengl$GlTexture(this, this.gl, premultiplied);
  };
  function AGOpengl$GlBuffer($outer, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.cachedVersion = -1;
    this.id_0 = -1;
    this.glKind = kind === AG$Buffer$Kind.INDEX ? this.$outer.gl.ELEMENT_ARRAY_BUFFER : this.$outer.gl.ARRAY_BUFFER;
  }
  AGOpengl$GlBuffer.prototype.afterSetMem = function () {
  };
  AGOpengl$GlBuffer.prototype.close = function () {
    this.$outer;
    var this$AGOpengl = this.$outer;
    var buffer = FBuffer.Companion.invoke_za3lpa$(4);
    buffer.setInt_vux9f0$(0, this.id_0);
    this$AGOpengl.gl.deleteBuffers_26fqmq$(1, buffer);
    this.id_0 = -1;
  };
  AGOpengl$GlBuffer.prototype.getGlId_jm7esb$ = function (gl) {
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.id_0 = -1;
    }
    if (this.id_0 < 0) {
      var it = FBuffer.Companion.invoke_za3lpa$(4);
      gl.genBuffers_26fqmq$(1, it);
      this.id_0 = it.getInt_za3lpa$(0);
    }
    if (this.dirty) {
      this._bind_mxkahf$(gl, this.id_0);
      if (this.mem != null) {
        gl.bufferData_r7xkly$(this.glKind, this.memLength, ensureNotNull(this.mem), gl.STATIC_DRAW);
      }
    }
    return this.id_0;
  };
  AGOpengl$GlBuffer.prototype._bind_mxkahf$ = function (gl, id) {
    gl.bindBuffer_vux9f0$(this.glKind, id);
  };
  AGOpengl$GlBuffer.prototype.bind_jm7esb$ = function (gl) {
    this._bind_mxkahf$(gl, this.getGlId_jm7esb$(gl));
  };
  AGOpengl$GlBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlBuffer',
    interfaces: [AG$Buffer]
  };
  AGOpengl.prototype.prepareUploadNativeTexture_m8r6i1$ = function (bmp) {
  };
  function AGOpengl$GlTexture($outer, gl, premultiplied) {
    this.$outer = $outer;
    AG$Texture.call(this, this.$outer);
    this.gl = gl;
    this.premultiplied_8apmqt$_0 = premultiplied;
    this.cachedVersion = -1;
    this.texIds = FBuffer.Companion.invoke_za3lpa$(4);
    this.closed_0 = false;
  }
  Object.defineProperty(AGOpengl$GlTexture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_8apmqt$_0;
    }
  });
  Object.defineProperty(AGOpengl$GlTexture.prototype, 'tex', {
    get: function () {
      if (this.cachedVersion !== this.$outer.contextVersion) {
        this.cachedVersion = this.$outer.contextVersion;
        this.invalidate();
        this.gl.genTextures_26fqmq$(1, this.texIds);
      }
      return this.texIds.getInt_za3lpa$(0);
    }
  });
  AGOpengl$GlTexture.prototype.createBufferForBitmap_p18la5$ = function (bmp) {
    var tmp$;
    if (bmp == null)
      tmp$ = null;
    else if (Kotlin.isType(bmp, NativeImage))
      tmp$ = unsupported('Should not call createBufferForBitmap with a NativeImage');
    else if (Kotlin.isType(bmp, Bitmap8)) {
      var mem = FBuffer.Companion.invoke_za3lpa$(bmp.area);
      arraycopy_0(bmp.data, 0, mem.arrayByte, 0, bmp.area);
      return mem;
    }
     else if (Kotlin.isType(bmp, Bitmap32)) {
      var abmp = this.premultiplied ? bmp.premultipliedIfRequired() : bmp.depremultipliedIfRequired();
      var mem_0 = FBuffer.Companion.invoke_za3lpa$(abmp.area * 4 | 0);
      arraycopy_1(abmp.data.ints, 0, mem_0.arrayInt, 0, abmp.area);
      return mem_0;
    }
     else
      tmp$ = unsupported_0();
    return tmp$;
  };
  AGOpengl$GlTexture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
    var tmp$;
    this.mipmaps = false;
    var bytesPerPixel = source.rgba ? 4 : 1;
    if (source.rgba) {
      tmp$ = this.gl.RGBA;
    }
     else {
      tmp$ = this.gl.LUMINANCE;
    }
    var type = tmp$;
    if (Kotlin.isType(bmp, NativeImage)) {
      this.$outer.prepareUploadNativeTexture_m8r6i1$(bmp);
      this.gl.texImage2D_gqqctv$(this.gl.TEXTURE_2D, 0, type, type, this.gl.UNSIGNED_BYTE, bmp);
    }
     else {
      var buffer = this.createBufferForBitmap_p18la5$(bmp);
      if (buffer != null) {
        this.gl.texImage2D_byudfd$(this.gl.TEXTURE_2D, 0, type, source.width, source.height, 0, type, this.gl.UNSIGNED_BYTE, buffer);
      }
    }
    if (requestMipmaps && get_isPowerOfTwo(source.width) && get_isPowerOfTwo(source.height)) {
      this.mipmaps = true;
      this.bind();
      this.setFilter_6taknv$(true);
      this.setWrapST_0();
      this.gl.generateMipmap_za3lpa$(this.gl.TEXTURE_2D);
    }
  };
  AGOpengl$GlTexture.prototype.bind = function () {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, this.tex);
  };
  AGOpengl$GlTexture.prototype.unbind = function () {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, 0);
  };
  AGOpengl$GlTexture.prototype.close = function () {
    AG$Texture.prototype.close.call(this);
    if (!this.closed_0) {
      this.closed_0 = true;
      this.gl.deleteTextures_26fqmq$(1, this.texIds);
    }
  };
  AGOpengl$GlTexture.prototype.setFilter_6taknv$ = function (linear) {
    var tmp$;
    if (this.mipmaps) {
      tmp$ = linear ? this.gl.LINEAR_MIPMAP_NEAREST : this.gl.NEAREST_MIPMAP_NEAREST;
    }
     else {
      tmp$ = linear ? this.gl.LINEAR : this.gl.NEAREST;
    }
    var minFilter = tmp$;
    var magFilter = linear ? this.gl.LINEAR : this.gl.NEAREST;
    this.setWrapST_0();
    this.setMinMag_0(minFilter, magFilter);
  };
  AGOpengl$GlTexture.prototype.setWrapST_0 = function () {
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
  };
  AGOpengl$GlTexture.prototype.setMinMag_0 = function (min, mag) {
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, min);
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, mag);
  };
  AGOpengl$GlTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlTexture',
    interfaces: [AG$Texture]
  };
  AGOpengl.prototype.readColor_59u9qz$ = function (bitmap) {
    var size = bitmap.area * 4 | 0;
    var buffer = FBuffer.Companion.invoke_za3lpa$(size);
    this.gl.readPixels_8vifew$(0, 0, bitmap.width, bitmap.height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, buffer);
    buffer.getAlignedArrayInt32_coga0j$(0, bitmap.data.ints, 0, bitmap.area);
  };
  AGOpengl.prototype.readDepth_l5lmba$ = function (width, height, out) {
    var area = Kotlin.imul(width, height);
    var size = area * 4 | 0;
    var buffer = FBuffer.Companion.invoke_za3lpa$(size);
    this.gl.readPixels_8vifew$(0, 0, width, height, this.gl.DEPTH_COMPONENT, this.gl.FLOAT, buffer);
    buffer.getAlignedArrayFloat32_3hvitc$(0, out, 0, area);
  };
  AGOpengl.prototype.readColorTexture_l6jlr1$$default = function (texture, width, height) {
    var $receiver = this.gl;
    texture.bind();
    $receiver.copyTexImage2D_wrdw30$($receiver.TEXTURE_2D, 0, $receiver.RGBA, 0, 0, width, height, 0);
    texture.unbind();
  };
  AGOpengl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGOpengl',
    interfaces: [AG]
  };
  function versionString$lambda($receiver) {
    return $receiver.getString_za3lpa$($receiver.SHADING_LANGUAGE_VERSION);
  }
  var versionString;
  var versionString_metadata = new PropertyMetadata('versionString');
  var Any = Object;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function get_versionString($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = versionString.name) != null ? tmp$ : versionString_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = versionString.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = versionString.name) != null ? tmp$_3 : versionString_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function versionInt$lambda($receiver) {
    var tmp$;
    var $receiver_0 = replace(get_versionString($receiver), '.', '');
    var tmp$_0;
    return (tmp$ = toIntOrNull(trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString())) != null ? tmp$ : 100;
  }
  var versionInt;
  var versionInt_metadata = new PropertyMetadata('versionInt');
  function get_versionInt($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = versionInt.name) != null ? tmp$ : versionInt_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = versionInt.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = versionInt.name) != null ? tmp$_3 : versionInt_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  function setFloats($receiver, offset, data, dataOffset, count) {
    for (var n = 0; n < count; n++)
      $receiver.setFloat_24o109$(offset + n | 0, data[dataOffset + n | 0]);
    return $receiver;
  }
  function AGOpenglFactory() {
    AGOpenglFactory_instance = this;
  }
  AGOpenglFactory.prototype.create_s8jyv4$ = function (nativeComponent) {
    return AGFactoryWebgl_getInstance();
  };
  Object.defineProperty(AGOpenglFactory.prototype, 'isTouchDevice', {
    get: function () {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
  });
  AGOpenglFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AGOpenglFactory',
    interfaces: []
  };
  var AGOpenglFactory_instance = null;
  function AGOpenglFactory_getInstance() {
    if (AGOpenglFactory_instance === null) {
      new AGOpenglFactory();
    }
    return AGOpenglFactory_instance;
  }
  function AGFactoryWebgl() {
    AGFactoryWebgl_instance = this;
    this.supportsNativeFrame_xyi6nj$_0 = true;
  }
  Object.defineProperty(AGFactoryWebgl.prototype, 'supportsNativeFrame', {
    get: function () {
      return this.supportsNativeFrame_xyi6nj$_0;
    }
  });
  AGFactoryWebgl.prototype.create_iozxf8$ = function (nativeControl, config) {
    return new AGWebgl(config);
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  AGFactoryWebgl.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init();
  };
  AGFactoryWebgl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AGFactoryWebgl',
    interfaces: [AGFactory]
  };
  var AGFactoryWebgl_instance = null;
  function AGFactoryWebgl_getInstance() {
    if (AGFactoryWebgl_instance === null) {
      new AGFactoryWebgl();
    }
    return AGFactoryWebgl_instance;
  }
  function jsEmptyObject() {
    return {};
  }
  function jsObject(pairs) {
    var tmp$;
    var out = jsEmptyObject();
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      if (v != null)
        out[k] = v;
    }
    return out;
  }
  function AGWebgl(config, glDecorator) {
    AGWebgl$Companion_getInstance();
    if (glDecorator === void 0)
      glDecorator = AGWebgl_init$lambda;
    AGOpengl.call(this);
    this.config = config;
    this.glDecorator = glDecorator;
    this.webgl_qzhorw$_0 = true;
    this.ag_1tusrt$_0 = this;
    var tmp$;
    this.canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.glOpts = jsObject([to('premultipliedAlpha', true), to('alpha', false), to('stencil', true), to('antialias', this.config.antialiasHint)]);
    this.gl_1tuxca$_0 = this.glDecorator(new KmlGlJsCanvas(this.canvas, this.glOpts));
    window.ag = this;
    this.nativeComponent_ktsp3z$_0 = this.canvas;
    this.devicePixelRatio_sbtx5g$_0 = 1.0;
    this.onReadyOnce = new Once();
    this.canvas.addEventListener('webglcontextlost', AGWebgl_init$lambda_0, false);
    this.canvas.addEventListener('webglcontextrestored', AGWebgl_init$lambda_1(this), false);
  }
  Object.defineProperty(AGWebgl.prototype, 'webgl', {
    get: function () {
      return this.webgl_qzhorw$_0;
    }
  });
  function AGWebgl$Companion() {
    AGWebgl$Companion_instance = this;
    this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
  }
  AGWebgl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AGWebgl$Companion_instance = null;
  function AGWebgl$Companion_getInstance() {
    if (AGWebgl$Companion_instance === null) {
      new AGWebgl$Companion();
    }
    return AGWebgl$Companion_instance;
  }
  Object.defineProperty(AGWebgl.prototype, 'ag', {
    get: function () {
      return this.ag_1tusrt$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'gl', {
    get: function () {
      return this.gl_1tuxca$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_ktsp3z$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'tDevicePixelRatio', {
    get: function () {
      return window.devicePixelRatio;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'devicePixelRatio', {
    get: function () {
      if (this.tDevicePixelRatio <= 0.0)
        return 1.0;
      else if (isNaN_0(this.tDevicePixelRatio))
        return 1.0;
      else if (isInfinite(this.tDevicePixelRatio))
        return 1.0;
      else
        return this.tDevicePixelRatio;
    },
    set: function (devicePixelRatio) {
      this.devicePixelRatio_sbtx5g$_0 = devicePixelRatio;
    }
  });
  AGWebgl.prototype.repaint = function () {
    var $this = this.onReadyOnce;
    if (!$this.completed) {
      $this.completed = true;
      this.ready();
    }
    this.onRender.invoke_11rb$(this);
  };
  AGWebgl.prototype.dispose = function () {
  };
  AGWebgl.prototype.prepareUploadNativeTexture_m8r6i1$ = function (bmp) {
    this.gl.pixelStorei_vux9f0$(37441, bmp.premultiplied ? 1 : 0);
  };
  function AGWebgl_init$lambda(it) {
    return it;
  }
  function AGWebgl_init$lambda_0(e) {
    e.preventDefault();
    return Unit;
  }
  function AGWebgl_init$lambda_1(this$AGWebgl) {
    return function (e) {
      var tmp$;
      tmp$ = this$AGWebgl.contextVersion;
      this$AGWebgl.contextVersion = tmp$ + 1 | 0;
      return Unit;
    };
  }
  AGWebgl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGWebgl',
    interfaces: [AGContainer, AGOpengl]
  };
  AGOpengl.GlRenderBuffer = AGOpengl$GlRenderBuffer;
  $$importsForInline$$.kmem = $module$kmem;
  $$importsForInline$$.kds = $module$kds;
  AGOpengl.GlProgram = AGOpengl$GlProgram;
  AGOpengl.GlBuffer = AGOpengl$GlBuffer;
  AGOpengl.GlTexture = AGOpengl$GlTexture;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korag = package$soywiz.korag || (package$soywiz.korag = {});
  package$korag.AGOpengl = AGOpengl;
  package$korag.get_versionString_v5mrd8$ = get_versionString;
  package$korag.get_versionInt_v5mrd8$ = get_versionInt;
  var package$internal = package$korag.internal || (package$korag.internal = {});
  package$internal.setFloats_v86sfg$ = setFloats;
  Object.defineProperty(package$korag, 'AGOpenglFactory', {
    get: AGOpenglFactory_getInstance
  });
  Object.defineProperty(package$korag, 'AGFactoryWebgl', {
    get: AGFactoryWebgl_getInstance
  });
  package$korag.jsEmptyObject = jsEmptyObject;
  package$korag.jsObject_pyyo18$ = jsObject;
  Object.defineProperty(AGWebgl, 'Companion', {
    get: AGWebgl$Companion_getInstance
  });
  $$importsForInline$$.korio = $module$korio;
  package$korag.AGWebgl = AGWebgl;
  versionString = new Extra$PropertyThis(void 0, versionString$lambda);
  versionInt = new Extra$PropertyThis(void 0, versionInt$lambda);
  Kotlin.defineModule('korag-opengl', _);
  return _;
}));

//# sourceMappingURL=korag-opengl.js.map
