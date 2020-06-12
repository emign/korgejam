(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'klock', 'kds', 'korio', 'kmem', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('klock'), require('kds'), require('korio'), require('kmem'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korau'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korau'.");
    }
    if (typeof klock === 'undefined') {
      throw new Error("Error loading module 'korau'. Its dependency 'klock' was not found. Please, check whether 'klock' is loaded prior to 'korau'.");
    }
    if (typeof kds === 'undefined') {
      throw new Error("Error loading module 'korau'. Its dependency 'kds' was not found. Please, check whether 'kds' is loaded prior to 'korau'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korau'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korau'.");
    }
    if (typeof kmem === 'undefined') {
      throw new Error("Error loading module 'korau'. Its dependency 'kmem' was not found. Please, check whether 'kmem' is loaded prior to 'korau'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korau'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korau'.");
    }
    root.korau = factory(typeof korau === 'undefined' ? {} : korau, kotlin, klock, kds, korio, kmem, this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$klock, $module$kds, $module$korio, $module$kmem, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Extra = $module$kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds.com.soywiz.kds.Extra.Mixin;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var openAsync = $module$korio.com.soywiz.korio.stream.openAsync_m1iwyb$;
  var unsupported = $module$korio.com.soywiz.korio.lang.unsupported;
  var toAsync = $module$korio.com.soywiz.korio.stream.toAsync_ucmi9i$;
  var Unit = Kotlin.kotlin.Unit;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var printStackTrace = $module$korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var PathInfo = $module$korio.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio.com.soywiz.korio.file.get_extensionLC_a72sjq$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var L0 = Kotlin.Long.ZERO;
  var readStream = $module$korio.com.soywiz.korio.stream.readStream_50x9bh$;
  var readBytesUpTo = $module$korio.com.soywiz.korio.stream.readBytesUpTo_a0g59h$;
  var UByteArrayInt = $module$kmem.com.soywiz.kmem.UByteArrayInt;
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var openSync = $module$korio.com.soywiz.korio.stream.openSync_m1iwyb$;
  var readString = $module$korio.com.soywiz.korio.stream.readString_6ey4ts$;
  var equals = Kotlin.equals;
  var readString_0 = $module$korio.com.soywiz.korio.stream.readString_4xit9n$;
  var readU8 = $module$korio.com.soywiz.korio.stream.readU8_yjldv$;
  var extract = $module$kmem.com.soywiz.kmem.extract_dqglrj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var lang = $module$korio.com.soywiz.korio.lang;
  var extract_0 = $module$kmem.com.soywiz.kmem.extract_e4yvb3$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var format = $module$korio.com.soywiz.korio.lang.format_e33kwl$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var hasAvailable = $module$korio.com.soywiz.korio.stream.hasAvailable_g5ykjz$;
  var readS8 = $module$korio.com.soywiz.korio.stream.readS8_yjldv$;
  var readS64LE = $module$korio.com.soywiz.korio.stream.readS64LE_yjldv$;
  var readS32LE = $module$korio.com.soywiz.korio.stream.readS32LE_yjldv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var invalidOp = $module$korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var MemorySyncStream = $module$korio.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var readS8_0 = $module$kmem.com.soywiz.kmem.readS8_mrm5p$;
  var toShort = Kotlin.toShort;
  var readS16LE = $module$kmem.com.soywiz.kmem.readS16LE_mrm5p$;
  var readS24LE = $module$kmem.com.soywiz.kmem.readS24LE_mrm5p$;
  var writeString = $module$korio.com.soywiz.korio.stream.writeString_wczyte$;
  var write32LE = $module$korio.com.soywiz.korio.stream.write32LE_1j05bi$;
  var write16LE = $module$korio.com.soywiz.korio.stream.write16LE_1j05bi$;
  var writeShortArrayLE = $module$korio.com.soywiz.korio.stream.writeShortArrayLE_axfcu2$;
  var readS16LE_0 = $module$korio.com.soywiz.korio.stream.readS16LE_yjldv$;
  var readU32LE = $module$korio.com.soywiz.korio.stream.readU32LE_yjldv$;
  var numberToInt = Kotlin.numberToInt;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var clamp = $module$kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var toByte = Kotlin.toByte;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var contentDeepHashCode = Kotlin.arrayDeepHashCode;
  var contentDeepEquals = Kotlin.arrayDeepEquals;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var ShortArrayDeque = $module$kds.com.soywiz.kds.ShortArrayDeque;
  var Closeable = $module$korio.com.soywiz.korio.lang.Closeable;
  var VfsOpenMode = $module$korio.com.soywiz.korio.file.VfsOpenMode;
  var get_baseName = $module$korio.com.soywiz.korio.file.get_baseName_hsf53c$;
  var math = Kotlin.kotlin.math;
  var delay = $module$korio.com.soywiz.korio.async.delay_fv8bff$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var DateTime = $module$klock.com.soywiz.klock.DateTime;
  var LocalVfs = $module$korio.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio.com.soywiz.korio.file.std.UrlVfs;
  var Cancellable = $module$korio.com.soywiz.korio.lang.Cancellable;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var get_uniVfs = $module$korio.com.soywiz.korio.file.std.get_uniVfs_pdl1vz$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Deferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.Deferred;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var delay_0 = $module$korio.com.soywiz.korio.async.delay_boqi9f$;
  var FloatArrayDeque = $module$kds.com.soywiz.kds.FloatArrayDeque;
  InvalidAudioFormatException.prototype = Object.create(RuntimeException.prototype);
  InvalidAudioFormatException.prototype.constructor = InvalidAudioFormatException;
  AudioFormats.prototype = Object.create(AudioFormat.prototype);
  AudioFormats.prototype.constructor = AudioFormats;
  MP3Base.prototype = Object.create(AudioFormat.prototype);
  MP3Base.prototype.constructor = MP3Base;
  MP3.prototype = Object.create(MP3Base.prototype);
  MP3.prototype.constructor = MP3;
  MP3$Companion.prototype = Object.create(MP3.prototype);
  MP3$Companion.prototype.constructor = MP3$Companion;
  MP3Base$Parser$Companion$ChannelMode.prototype = Object.create(Enum.prototype);
  MP3Base$Parser$Companion$ChannelMode.prototype.constructor = MP3Base$Parser$Companion$ChannelMode;
  OggBase.prototype = Object.create(AudioFormat.prototype);
  OggBase.prototype.constructor = OggBase;
  OGG.prototype = Object.create(OggBase.prototype);
  OGG.prototype.constructor = OGG;
  OGG$Companion.prototype = Object.create(OGG.prototype);
  OGG$Companion.prototype.constructor = OGG$Companion;
  WAV.prototype = Object.create(AudioFormat.prototype);
  WAV.prototype.constructor = WAV;
  WAV$Companion.prototype = Object.create(WAV.prototype);
  WAV$Companion.prototype.constructor = WAV$Companion;
  WAV$decodeStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  WAV$decodeStream$ObjectLiteral.prototype.constructor = WAV$decodeStream$ObjectLiteral;
  AudioConversionQuality.prototype = Object.create(Enum.prototype);
  AudioConversionQuality.prototype.constructor = AudioConversionQuality;
  toStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  toStream$ObjectLiteral.prototype.constructor = toStream$ObjectLiteral;
  AudioStream$Companion$generator$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  AudioStream$Companion$generator$ObjectLiteral.prototype.constructor = AudioStream$Companion$generator$ObjectLiteral;
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype.constructor = NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral;
  NativeSoundProvider$createSound$ObjectLiteral.prototype = Object.create(NativeSound.prototype);
  NativeSoundProvider$createSound$ObjectLiteral.prototype.constructor = NativeSoundProvider$createSound$ObjectLiteral;
  DummyNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  DummyNativeSoundProvider.prototype.constructor = DummyNativeSoundProvider;
  DummyNativeSoundChannel.prototype = Object.create(NativeSoundChannel.prototype);
  DummyNativeSoundChannel.prototype.constructor = DummyNativeSoundChannel;
  HtmlNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  HtmlNativeSoundProvider.prototype.constructor = HtmlNativeSoundProvider;
  AudioBufferNativeSound$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  AudioBufferNativeSound$play$ObjectLiteral.prototype.constructor = AudioBufferNativeSound$play$ObjectLiteral;
  AudioBufferNativeSound.prototype = Object.create(NativeSound.prototype);
  AudioBufferNativeSound.prototype.constructor = AudioBufferNativeSound;
  JsPlatformAudioOutput.prototype = Object.create(PlatformAudioOutput.prototype);
  JsPlatformAudioOutput.prototype.constructor = JsPlatformAudioOutput;
  function Korau() {
    Korau_instance = this;
    this.VERSION = KORAU_VERSION;
  }
  Korau.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korau',
    interfaces: []
  };
  var Korau_instance = null;
  function Korau_getInstance() {
    if (Korau_instance === null) {
      new Korau();
    }
    return Korau_instance;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function AudioFormat(exts) {
    var destination = ArrayList_init(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString());
    }
    this.extensions = toSet(destination);
  }
  var TimeSpan = $module$klock.com.soywiz.klock.TimeSpan;
  var numberToDouble = Kotlin.numberToDouble;
  function AudioFormat$Info(duration, channels) {
    if (duration === void 0) {
      duration = TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
    }
    if (channels === void 0)
      channels = 2;
    this.duration = duration;
    this.channels = channels;
    this.$delegate_q4l724$_0 = new Extra$Mixin();
  }
  AudioFormat$Info.prototype.toString = function () {
    return 'Info(duration=' + get_niceStr(this.duration.milliseconds) + 'ms, channels=' + this.channels + ')';
  };
  Object.defineProperty(AudioFormat$Info.prototype, 'extra', {
    get: function () {
      return this.$delegate_q4l724$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_q4l724$_0.extra = tmp$;
    }
  });
  AudioFormat$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: [Extra]
  };
  AudioFormat$Info.prototype.component1 = function () {
    return this.duration;
  };
  AudioFormat$Info.prototype.component2 = function () {
    return this.channels;
  };
  AudioFormat$Info.prototype.copy_dgejwp$ = function (duration, channels) {
    return new AudioFormat$Info(duration === void 0 ? this.duration : duration, channels === void 0 ? this.channels : channels);
  };
  AudioFormat$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.duration) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    return result;
  };
  AudioFormat$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.duration, other.duration) && Kotlin.equals(this.channels, other.channels)))));
  };
  AudioFormat.prototype.tryReadInfo_axnxby$ = function (data, continuation) {
    return null;
  };
  AudioFormat.prototype.decodeStream_axnxby$ = function (data, continuation) {
    return null;
  };
  function Coroutine$decode_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$decode_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_axnxby$.prototype.constructor = Coroutine$decode_axnxby$;
  Coroutine$decode_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = toData(tmp$, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
  AudioFormat.prototype.decode_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$decode_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_fqrh44$.prototype.constructor = Coroutine$decode_fqrh44$;
  Coroutine$decode_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_axnxby$(openAsync(this.local$data), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = toData(tmp$, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
  AudioFormat.prototype.decode_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormat.prototype.encode_ohj27w$ = function (data, out, filename, continuation) {
    return unsupported();
  };
  var ByteArrayBuilder_init = $module$korio.$$importsForInline$$.kmem.com.soywiz.kmem.ByteArrayBuilder_init_za3lpa$;
  var MemorySyncStream_0 = $module$korio.com.soywiz.korio.stream.MemorySyncStream_i9anm0$;
  function Coroutine$encodeToByteArray_szcvz7$($this, data_0, filename_0, format_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$buffer = void 0;
    this.local$data = data_0;
    this.local$filename = filename_0;
    this.local$format = format_0;
  }
  Coroutine$encodeToByteArray_szcvz7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encodeToByteArray_szcvz7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encodeToByteArray_szcvz7$.prototype.constructor = Coroutine$encodeToByteArray_szcvz7$;
  Coroutine$encodeToByteArray_szcvz7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$filename === void 0)
              this.local$filename = 'out.wav';
            if (this.local$format === void 0)
              this.local$format = this.$this;
            this.local$buffer = ByteArrayBuilder_init(4096);
            var s = MemorySyncStream_0(this.local$buffer);
            this.state_0 = 2;
            this.result_0 = this.local$format.encode_ohj27w$(this.local$data, toAsync(s), this.local$filename, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$buffer.toByteArray();
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
  AudioFormat.prototype.encodeToByteArray_szcvz7$ = function (data_0, filename_0, format_0, continuation_0, suspended) {
    var instance = new Coroutine$encodeToByteArray_szcvz7$(this, data_0, filename_0, format_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormat.prototype.toString = function () {
    return 'AudioFormat(' + sorted(this.extensions) + ')';
  };
  AudioFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormat',
    interfaces: []
  };
  function InvalidAudioFormatException(message) {
    RuntimeException_init(message, this);
    this.name = 'InvalidAudioFormatException';
  }
  InvalidAudioFormatException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidAudioFormatException',
    interfaces: [RuntimeException]
  };
  function invalidAudioFormat(message) {
    if (message === void 0)
      message = 'invalid audio format';
    throw new InvalidAudioFormatException(message);
  }
  var defaultAudioFormats;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function AudioFormats() {
    AudioFormat.call(this, []);
    this.formats = LinkedHashSet_init();
  }
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  AudioFormats.prototype.register_rtj1ud$ = function (formats) {
    addAll(this.formats, formats);
    return this;
  };
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  AudioFormats.prototype.register_19yo1f$ = function (formats) {
    addAll_0(this.formats, formats);
    return this;
  };
  function Coroutine$tryReadInfo_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$.prototype.constructor = Coroutine$tryReadInfo_axnxby$;
  Coroutine$tryReadInfo_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var format = this.local$tmp$.next();
            this.exceptionState_0 = 4;
            this.state_0 = 2;
            this.result_0 = format.tryReadInfo_axnxby$(this.local$data.duplicate(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 4;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return this.local$tmp$_0;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            }
             else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 1;
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            return null;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  AudioFormats.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStream_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$format = void 0;
    this.local$data = data_0;
  }
  Coroutine$decodeStream_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_axnxby$.prototype.constructor = Coroutine$decodeStream_axnxby$;
  Coroutine$decodeStream_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            this.local$format = this.local$tmp$.next();
            this.exceptionState_0 = 6;
            this.state_0 = 2;
            this.result_0 = this.local$format.tryReadInfo_axnxby$(this.local$data.duplicate(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (this.result_0 == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$format.decodeStream_axnxby$(this.local$data.duplicate(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            return this.local$tmp$_0;
          case 6:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            }
             else
              throw e;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            throw this.exception_0;
          case 9:
            return null;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
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
  AudioFormats.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioFormats.prototype.encode_ohj27w$ = function (data, out, filename, continuation) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(filename));
    var $receiver = this.formats;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.extensions.contains_11rb$(ext)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw UnsupportedOperationException_init("Don't know how to generate file for extension '" + ext + "'");
    }
    var format = tmp$;
    return format.encode_ohj27w$(data, out, filename, continuation);
  };
  AudioFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioFormats',
    interfaces: [AudioFormat]
  };
  var Any = Object;
  function Coroutine$readSoundInfo($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readSoundInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSoundInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSoundInfo.prototype.constructor = Coroutine$readSoundInfo;
  Coroutine$readSoundInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            var mode;
            mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$formats.tryReadInfo_axnxby$(this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = this.result_0;
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            }
             else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function readSoundInfo($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readSoundInfo($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function registerStandard($receiver) {
    $receiver.register_rtj1ud$([WAV$Companion_getInstance(), OGG$Companion_getInstance(), MP3$Companion_getInstance()]);
    return $receiver;
  }
  function MP3() {
    MP3$Companion_getInstance();
    MP3Base.call(this);
  }
  function MP3$Companion() {
    MP3$Companion_instance = this;
    MP3.call(this);
  }
  MP3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [MP3]
  };
  var MP3$Companion_instance = null;
  function MP3$Companion_getInstance() {
    if (MP3$Companion_instance === null) {
      new MP3$Companion();
    }
    return MP3$Companion_instance;
  }
  MP3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3',
    interfaces: [MP3Base]
  };
  function MP3Base() {
    AudioFormat.call(this, ['mp3']);
  }
  function Coroutine$tryReadInfo_axnxby$_0($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$parser = void 0;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_0.prototype.constructor = Coroutine$tryReadInfo_axnxby$_0;
  Coroutine$tryReadInfo_axnxby$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.exceptionState_0 = 2;
            this.local$parser = new MP3Base$Parser(this.local$data);
            this.state_0 = 1;
            this.result_0 = this.local$parser.getDurationEstimate(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var duration = this.result_0;
            return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble(duration)), (tmp$_1 = (tmp$_0 = (tmp$ = this.local$parser.info) != null ? tmp$.channelMode : null) != null ? tmp$_0.channels : null) != null ? tmp$_1 : 2);
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
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
  MP3Base.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_0(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MP3Base$Parser(data) {
    MP3Base$Parser$Companion_getInstance();
    this.data = data;
    this.info = null;
  }
  MP3Base$Parser.prototype.getDurationEstimate = function (continuation) {
    return this._getDuration_0(true, continuation);
  };
  MP3Base$Parser.prototype.getDurationExact = function (continuation) {
    return this._getDuration_0(false, continuation);
  };
  function Coroutine$_getDuration_0($this, use_cbr_estimate_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fd = void 0;
    this.local$duration = void 0;
    this.local$offset = void 0;
    this.local$info = void 0;
    this.local$block2 = void 0;
    this.local$use_cbr_estimate = use_cbr_estimate_0;
  }
  Coroutine$_getDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_getDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_getDuration_0.prototype.constructor = Coroutine$_getDuration_0;
  Coroutine$_getDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.data.position = L0;
            this.local$fd = this.$this.data.duplicate();
            this.local$duration = L0;
            this.state_0 = 2;
            this.result_0 = readStream(this.local$fd, 100, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.skipID3v2Tag_0(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$offset = this.result_0;
            this.local$fd.position = this.local$offset;
            this.local$info = null;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$fd.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (!!this.result_0) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.state_0 = 7;
            this.result_0 = readBytesUpTo(this.local$fd, 10, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$block2 = new UByteArrayInt(this.result_0);
            if (this.local$block2.size < 10) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            if (this.local$block2.get_za3lpa$(0) === 255 && (this.local$block2.get_za3lpa$(1) & 224) !== 0) {
              this.state_0 = 9;
              this.result_0 = MP3Base$Parser$Companion_getInstance().parseFrameHeader_m5mxob$(this.local$block2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (equals(readString(openSync(this.local$block2.bytes), 3), 'TAG')) {
                this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(118));
              }
               else {
                this.local$fd.position = this.local$fd.position.subtract(Kotlin.Long.fromInt(9));
              }
              this.state_0 = 11;
              continue;
            }

          case 9:
            this.local$info = this.result_0;
            this.$this.info = this.local$info;
            if (this.local$info.frameSize === 0) {
              return this.local$duration;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(this.local$info.frameSize - 10 | 0));
            this.local$duration = this.local$duration.add(Kotlin.Long.fromInt(this.local$info.samples).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$info.samplingRate)));
            this.state_0 = 11;
            continue;
          case 11:
            if (this.local$info != null && this.local$use_cbr_estimate) {
              this.state_0 = 12;
              this.result_0 = this.$this.estimateDuration_0(this.local$info.bitrate, this.local$info.channelMode.channels, this.local$offset.toInt(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 13;
              continue;
            }

          case 12:
            return this.result_0;
          case 13:
            this.state_0 = 4;
            continue;
          case 14:
            return this.local$duration;
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
  MP3Base$Parser.prototype._getDuration_0 = function (use_cbr_estimate_0, continuation_0, suspended) {
    var instance = new Coroutine$_getDuration_0(this, use_cbr_estimate_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$estimateDuration_0($this, bitrate_0, channels_0, offset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$kbps = void 0;
    this.local$bitrate = bitrate_0;
    this.local$channels = channels_0;
    this.local$offset = offset_0;
  }
  Coroutine$estimateDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$estimateDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$estimateDuration_0.prototype.constructor = Coroutine$estimateDuration_0;
  Coroutine$estimateDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$kbps = (this.local$bitrate * 1000 | 0) / 8 | 0;
            this.state_0 = 2;
            this.result_0 = this.$this.data.getLength(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var dataSize = this.result_0.subtract(Kotlin.Long.fromInt(this.local$offset));
            return dataSize.multiply(Kotlin.Long.fromInt(2 / this.local$channels | 0)).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$kbps));
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
  MP3Base$Parser.prototype.estimateDuration_0 = function (bitrate_0, channels_0, offset_0, continuation_0, suspended) {
    var instance = new Coroutine$estimateDuration_0(this, bitrate_0, channels_0, offset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$skipID3v2Tag_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$b = void 0;
    this.local$flag_footer_present = void 0;
    this.local$z0 = void 0;
    this.local$z1 = void 0;
    this.local$z2 = void 0;
    this.local$block = block_0;
  }
  Coroutine$skipID3v2Tag_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$skipID3v2Tag_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$skipID3v2Tag_0.prototype.constructor = Coroutine$skipID3v2Tag_0;
  Coroutine$skipID3v2Tag_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$b = this.local$block.duplicate();
            this.state_0 = 2;
            this.result_0 = readString_0(this.local$b, 3, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.result_0, 'ID3')) {
              this.state_0 = 3;
              this.result_0 = readU8(this.local$b, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 3:
            var id3v2_major_version = this.result_0;
            this.state_0 = 4;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var id3v2_minor_version = this.result_0;
            this.state_0 = 5;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var id3v2_flags = this.result_0;
            var flag_unsynchronisation = extract(id3v2_flags, 7);
            var flag_extended_header = extract(id3v2_flags, 6);
            var flag_experimental_ind = extract(id3v2_flags, 5);
            this.local$flag_footer_present = extract(id3v2_flags, 4);
            this.state_0 = 6;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$z0 = this.result_0;
            this.state_0 = 7;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$z1 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$z2 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var z3 = this.result_0;
            if ((this.local$z0 & 128) === 0 && (this.local$z1 & 128) === 0 && (this.local$z2 & 128) === 0 && (z3 & 128) === 0) {
              var header_size = 10;
              var tag_size = Kotlin.imul(this.local$z0 & 127, 2097152) + ((this.local$z1 & 127) * 16384 | 0) + ((this.local$z2 & 127) * 128 | 0) + (z3 & 127) | 0;
              var footer_size = this.local$flag_footer_present ? 10 : 0;
              return Kotlin.Long.fromInt(header_size + tag_size + footer_size | 0);
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            return L0;
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
  MP3Base$Parser.prototype.skipID3v2Tag_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$skipID3v2Tag_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MP3Base$Parser$Companion() {
    MP3Base$Parser$Companion_instance = this;
    this.versions = ['2.5', 'x', '2', '1'];
    this.layers = new Int32Array([-1, 3, 2, 1]);
    this.bitrates = mapOf([to('V1L1', new Int32Array([0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448])), to('V1L2', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384])), to('V1L3', new Int32Array([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320])), to('V2L1', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256])), to('V2L2', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160])), to('V2L3', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]))]);
    this.sampleRates = mapOf([to('1', new Int32Array([44100, 48000, 32000])), to('2', new Int32Array([22050, 24000, 16000])), to('2.5', new Int32Array([11025, 12000, 8000]))]);
    this.samples = mapOf([to(1, mapOf([to(1, 384), to(2, 1152), to(3, 1152)])), to(2, mapOf([to(1, 384), to(2, 1152), to(3, 576)]))]);
  }
  function MP3Base$Parser$Companion$ChannelMode(name, ordinal, id, channels) {
    Enum.call(this);
    this.id = id;
    this.channels = channels;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MP3Base$Parser$Companion$ChannelMode_initFields() {
    MP3Base$Parser$Companion$ChannelMode_initFields = function () {
    };
    MP3Base$Parser$Companion$ChannelMode$STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('STEREO', 0, 0, 2);
    MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('JOINT_STEREO', 1, 1, 1);
    MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('DUAL_CHANNEL', 2, 2, 2);
    MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('SINGLE_CHANNEL', 3, 3, 1);
    MP3Base$Parser$Companion$ChannelMode$Companion_getInstance();
  }
  var MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  }
  function MP3Base$Parser$Companion$ChannelMode$Companion() {
    MP3Base$Parser$Companion$ChannelMode$Companion_instance = this;
    var $receiver = MP3Base$Parser$Companion$ChannelMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  MP3Base$Parser$Companion$ChannelMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion$ChannelMode$Companion_instance = null;
  function MP3Base$Parser$Companion$ChannelMode$Companion_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    if (MP3Base$Parser$Companion$ChannelMode$Companion_instance === null) {
      new MP3Base$Parser$Companion$ChannelMode$Companion();
    }
    return MP3Base$Parser$Companion$ChannelMode$Companion_instance;
  }
  MP3Base$Parser$Companion$ChannelMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelMode',
    interfaces: [Enum]
  };
  function MP3Base$Parser$Companion$ChannelMode$values() {
    return [MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance(), MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance()];
  }
  MP3Base$Parser$Companion$ChannelMode.values = MP3Base$Parser$Companion$ChannelMode$values;
  function MP3Base$Parser$Companion$ChannelMode$valueOf(name) {
    switch (name) {
      case 'STEREO':
        return MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance();
      case 'JOINT_STEREO':
        return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance();
      case 'DUAL_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance();
      case 'SINGLE_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.format.MP3Base.Parser.Companion.ChannelMode.' + name);
    }
  }
  MP3Base$Parser$Companion$ChannelMode.valueOf_61zpoe$ = MP3Base$Parser$Companion$ChannelMode$valueOf;
  function MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    this.version = version;
    this.layer = layer;
    this.bitrate = bitrate;
    this.samplingRate = samplingRate;
    this.channelMode = channelMode;
    this.frameSize = frameSize;
    this.samples = samples;
  }
  MP3Base$Parser$Companion$Mp3Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mp3Info',
    interfaces: []
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component1 = function () {
    return this.version;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component2 = function () {
    return this.layer;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component3 = function () {
    return this.bitrate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component4 = function () {
    return this.samplingRate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component5 = function () {
    return this.channelMode;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component6 = function () {
    return this.frameSize;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component7 = function () {
    return this.samples;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.copy_wikoj$ = function (version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    return new MP3Base$Parser$Companion$Mp3Info(version === void 0 ? this.version : version, layer === void 0 ? this.layer : layer, bitrate === void 0 ? this.bitrate : bitrate, samplingRate === void 0 ? this.samplingRate : samplingRate, channelMode === void 0 ? this.channelMode : channelMode, frameSize === void 0 ? this.frameSize : frameSize, samples === void 0 ? this.samples : samples);
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.toString = function () {
    return 'Mp3Info(version=' + Kotlin.toString(this.version) + (', layer=' + Kotlin.toString(this.layer)) + (', bitrate=' + Kotlin.toString(this.bitrate)) + (', samplingRate=' + Kotlin.toString(this.samplingRate)) + (', channelMode=' + Kotlin.toString(this.channelMode)) + (', frameSize=' + Kotlin.toString(this.frameSize)) + (', samples=' + Kotlin.toString(this.samples)) + ')';
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.layer) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitrate) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplingRate) | 0;
    result = result * 31 + Kotlin.hashCode(this.channelMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.samples) | 0;
    return result;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.layer, other.layer) && Kotlin.equals(this.bitrate, other.bitrate) && Kotlin.equals(this.samplingRate, other.samplingRate) && Kotlin.equals(this.channelMode, other.channelMode) && Kotlin.equals(this.frameSize, other.frameSize) && Kotlin.equals(this.samples, other.samples)))));
  };
  MP3Base$Parser$Companion.prototype.parseFrameHeader_m5mxob$ = function (f4, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var b0 = f4.get_za3lpa$(0);
    var b1 = f4.get_za3lpa$(1);
    var b2 = f4.get_za3lpa$(2);
    var b3 = f4.get_za3lpa$(3);
    if (b0 !== 255)
      lang.invalidOp;
    var version = this.versions[extract_0(b1, 3, 2)];
    var simple_version = equals(version, '2.5') ? 2 : toInt(version);
    var layer = this.layers[extract_0(b1, 1, 2)];
    var protection_bit = extract_0(b1, 0, 1);
    var bitrate_key = format('V%dL%d', [simple_version, layer]);
    var bitrate_idx = extract_0(b2, 4, 4);
    var bitrate = (tmp$_0 = (tmp$ = this.bitrates.get_11rb$(bitrate_key)) != null ? tmp$[bitrate_idx] : null) != null ? tmp$_0 : 0;
    var sample_rate = (tmp$_2 = (tmp$_1 = this.sampleRates.get_11rb$(version)) != null ? tmp$_1[extract_0(b2, 2, 2)] : null) != null ? tmp$_2 : 0;
    var padding_bit = extract_0(b2, 1, 1);
    var private_bit = extract_0(b2, 0, 1);
    var channelMode = ensureNotNull(MP3Base$Parser$Companion$ChannelMode$Companion_getInstance().BY_ID.get_11rb$(extract_0(b3, 6, 2)));
    var mode_extension_bits = extract_0(b3, 4, 2);
    var copyright_bit = extract_0(b3, 3, 1);
    var original_bit = extract_0(b3, 2, 1);
    var emphasis = extract_0(b3, 0, 2);
    return new MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, sample_rate, channelMode, this.framesize_0(layer, bitrate, sample_rate, padding_bit), (tmp$_4 = (tmp$_3 = this.samples.get_11rb$(simple_version)) != null ? tmp$_3.get_11rb$(layer) : null) != null ? tmp$_4 : 0);
  };
  MP3Base$Parser$Companion.prototype.framesize_0 = function (layer, bitrate, sample_rate, padding_bit) {
    var tmp$;
    if (layer === 1) {
      tmp$ = ((((12 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0) * 4 | 0;
    }
     else {
      tmp$ = (((144 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0;
    }
    return tmp$;
  };
  MP3Base$Parser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion_instance = null;
  function MP3Base$Parser$Companion_getInstance() {
    if (MP3Base$Parser$Companion_instance === null) {
      new MP3Base$Parser$Companion();
    }
    return MP3Base$Parser$Companion_instance;
  }
  MP3Base$Parser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  MP3Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3Base',
    interfaces: [AudioFormat]
  };
  function OGG() {
    OGG$Companion_getInstance();
    OggBase.call(this);
  }
  function OGG$Companion() {
    OGG$Companion_instance = this;
    OGG.call(this);
  }
  OGG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [OGG]
  };
  var OGG$Companion_instance = null;
  function OGG$Companion_getInstance() {
    if (OGG$Companion_instance === null) {
      new OGG$Companion();
    }
    return OGG$Companion_instance;
  }
  OGG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OGG',
    interfaces: [OggBase]
  };
  function OggBase() {
    AudioFormat.call(this, ['ogg']);
  }
  function Coroutine$tryReadInfo_axnxby$_1($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_1.prototype.constructor = Coroutine$tryReadInfo_axnxby$_1;
  Coroutine$tryReadInfo_axnxby$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
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
  OggBase.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_1(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function Coroutine$parse_axnxby$($this, s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$channels = void 0;
    this.local$sampleRate = void 0;
    this.local$bos = void 0;
    this.local$eos = void 0;
    this.local$gpos = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$info = void 0;
    this.local$packetType = void 0;
    this.local$s = s_0;
  }
  Coroutine$parse_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_axnxby$.prototype.constructor = Coroutine$parse_axnxby$;
  Coroutine$parse_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$channels = 2;
            this.local$sampleRate = 44100;
            var brnom = 160000;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = hasAvailable(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 30;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s, 5, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var magic = this.result_0;
            if (!equals(magic, 'OggS\x00'))
              invalidAudioFormat('Not an OGG file');
            this.state_0 = 6;
            this.result_0 = readS8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var type = this.result_0;
            var cont = extract(type, 0);
            this.local$bos = extract(type, 1);
            this.local$eos = extract(type, 2);
            this.state_0 = 7;
            this.result_0 = readS64LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$gpos = this.result_0;
            this.state_0 = 8;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var sn = this.result_0;
            this.state_0 = 9;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var psn = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var chk = this.result_0;
            this.state_0 = 11;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var pseg = this.result_0;
            var $receiver = until(0, pseg);
            this.local$destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 12;
            continue;
          case 12:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 14;
              continue;
            }

            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 13;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 12;
            continue;
          case 14:
            var psizs = this.local$destination;
            this.local$destination_0 = ArrayList_init(collectionSizeOrDefault(psizs, 10));
            this.local$tmp$_1 = psizs.iterator();
            this.state_0 = 15;
            continue;
          case 15:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 17;
              continue;
            }

            var item_0 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.state_0 = 16;
            this.result_0 = readStream(this.local$s, item_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_2.call(this.local$destination_0, this.result_0);
            this.state_0 = 15;
            continue;
          case 17:
            var pages = this.local$destination_0;
            if (this.local$bos) {
              this.local$info = pages.get_za3lpa$(0);
              this.state_0 = 18;
              this.result_0 = readU8(this.local$info, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 28;
              continue;
            }

          case 18:
            this.local$packetType = this.result_0;
            if (this.local$packetType > 3)
              invalidOp('Unsupported OGG vorbis file');
            this.state_0 = 19;
            this.result_0 = readString_0(this.local$info, 6, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            if (!equals(this.result_0, 'vorbis'))
              invalidOp('Unsupported OGG vorbis file');
            switch (this.local$packetType) {
              case 1:
                this.state_0 = 20;
                this.result_0 = readS32LE(this.local$info, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 3:
                this.state_0 = 27;
                continue;
              case 5:
                this.state_0 = 27;
                continue;
            }

          case 20:
            var vver = this.result_0;
            this.state_0 = 21;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$channels = this.result_0;
            this.state_0 = 22;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$sampleRate = this.result_0;
            this.state_0 = 23;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            var brmax = this.result_0;
            this.state_0 = 24;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            brnom = this.result_0;
            this.state_0 = 25;
            this.result_0 = readS32LE(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            var brmin = this.result_0;
            this.state_0 = 26;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            var bsinfo = this.result_0;
            this.state_0 = 27;
            continue;
          case 27:
            this.state_0 = 28;
            continue;
          case 28:
            if (this.local$eos) {
              var $receiver_0 = Kotlin.Long.fromNumber(this.local$gpos.toNumber() * 1000000.0 / this.local$sampleRate);
              return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver_0)), this.local$channels);
            }
             else {
              this.state_0 = 29;
              continue;
            }

          case 29:
            this.state_0 = 2;
            continue;
          case 30:
            invalidOp('Cannot parse stream');
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
  OggBase.prototype.parse_axnxby$ = function (s_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_axnxby$(this, s_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function OggBase$PacketTypes() {
    OggBase$PacketTypes_instance = this;
    this.ID_HEADER = 1;
    this.COMMENT_HEADER = 3;
    this.SETUP_HEADER = 5;
  }
  OggBase$PacketTypes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PacketTypes',
    interfaces: []
  };
  var OggBase$PacketTypes_instance = null;
  function OggBase$PacketTypes_getInstance() {
    if (OggBase$PacketTypes_instance === null) {
      new OggBase$PacketTypes();
    }
    return OggBase$PacketTypes_instance;
  }
  OggBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OggBase',
    interfaces: [AudioFormat]
  };
  function WAV() {
    WAV$Companion_getInstance();
    AudioFormat.call(this, ['wav']);
  }
  function WAV$Companion() {
    WAV$Companion_instance = this;
    WAV.call(this);
  }
  WAV$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [WAV]
  };
  var WAV$Companion_instance = null;
  function WAV$Companion_getInstance() {
    if (WAV$Companion_instance === null) {
      new WAV$Companion();
    }
    return WAV$Companion_instance;
  }
  function WAV$Chunk(type, data) {
    this.type = type;
    this.data = data;
  }
  WAV$Chunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  WAV$Chunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$Chunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$Chunk.prototype.copy_519pps$ = function (type, data) {
    return new WAV$Chunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data);
  };
  WAV$Chunk.prototype.toString = function () {
    return 'Chunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  WAV$Chunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  WAV$Chunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data)))));
  };
  function WAV$ProcessedChunk(type, data, extra) {
    this.type = type;
    this.data = data;
    this.extra = extra;
  }
  WAV$ProcessedChunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessedChunk',
    interfaces: []
  };
  WAV$ProcessedChunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$ProcessedChunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$ProcessedChunk.prototype.component3 = function () {
    return this.extra;
  };
  WAV$ProcessedChunk.prototype.copy_rxnnyd$ = function (type, data, extra) {
    return new WAV$ProcessedChunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data, extra === void 0 ? this.extra : extra);
  };
  WAV$ProcessedChunk.prototype.toString = function () {
    return 'ProcessedChunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  WAV$ProcessedChunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  WAV$ProcessedChunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.extra, other.extra)))));
  };
  function WAV$tryReadInfo$lambda(it) {
    return Unit;
  }
  function Coroutine$tryReadInfo_axnxby$_2($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$tryReadInfo_axnxby$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_2.prototype.constructor = Coroutine$tryReadInfo_axnxby$_2;
  Coroutine$tryReadInfo_axnxby$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$tryReadInfo$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
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
  WAV.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_2(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$decodeStream$lambda(closure$fmt, closure$buffer) {
    return function (it) {
      var extra = it.extra;
      if (Kotlin.isType(extra, WAV$Fmt))
        closure$fmt.v = extra;
      if (equals(it.type, 'data')) {
        closure$buffer.v = it.data;
      }
      return Unit;
    };
  }
  function WAV$decodeStream$ObjectLiteral(closure$buffer, closure$bytesPerSample, this$WAV, rate, channels) {
    this.closure$buffer = closure$buffer;
    this.closure$bytesPerSample = closure$bytesPerSample;
    this.this$WAV = this$WAV;
    AudioStream.call(this, rate, channels);
    this.finished_qhpm5o$_0 = false;
  }
  Object.defineProperty(WAV$decodeStream$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_qhpm5o$_0;
    },
    set: function (finished) {
      this.finished_qhpm5o$_0 = finished;
    }
  });
  function Coroutine$read_trriok$($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bytes = void 0;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$.prototype.constructor = Coroutine$read_trriok$;
  Coroutine$read_trriok$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = readBytesUpTo(this.$this.closure$buffer.v, Kotlin.imul(Kotlin.imul(this.local$length, this.$this.closure$bytesPerSample), this.$this.channels), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$bytes = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.closure$buffer.v.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.finished = this.result_0;
            var availableSamples = (this.local$bytes.length / this.$this.closure$bytesPerSample | 0) / this.$this.channels | 0;
            tmp$ = this.$this.channels;
            for (var channel = 0; channel < tmp$; channel++) {
              switch (this.$this.closure$bytesPerSample) {
                case 1:
                  var bytesPerSample = this.$this.closure$bytesPerSample;
                  var increment = Kotlin.imul(this.$this.channels, bytesPerSample);
                  var index = Kotlin.imul(channel, bytesPerSample);
                  var outc = this.local$out.get_za3lpa$(channel);
                  for (var n = 0; n < availableSamples; n++) {
                    outc[this.local$offset + n | 0] = toShort(readS8_0(this.local$bytes, index) << 8);
                    index = index + increment | 0;
                  }

                  break;
                case 2:
                  var bytesPerSample_0 = this.$this.closure$bytesPerSample;
                  var increment_0 = Kotlin.imul(this.$this.channels, bytesPerSample_0);
                  var index_0 = Kotlin.imul(channel, bytesPerSample_0);
                  var outc_0 = this.local$out.get_za3lpa$(channel);
                  for (var n_0 = 0; n_0 < availableSamples; n_0++) {
                    outc_0[this.local$offset + n_0 | 0] = toShort(readS16LE(this.local$bytes, index_0));
                    index_0 = index_0 + increment_0 | 0;
                  }

                  break;
                case 3:
                  var bytesPerSample_1 = this.$this.closure$bytesPerSample;
                  var increment_1 = Kotlin.imul(this.$this.channels, bytesPerSample_1);
                  var index_1 = Kotlin.imul(channel, bytesPerSample_1);
                  var outc_1 = this.local$out.get_za3lpa$(channel);
                  for (var n_1 = 0; n_1 < availableSamples; n_1++) {
                    outc_1[this.local$offset + n_1 | 0] = toShort(readS24LE(this.local$bytes, index_1) >>> 8);
                    index_1 = index_1 + increment_1 | 0;
                  }

                  break;
                default:invalidOp('Unsupported bytesPerSample=' + this.$this.closure$bytesPerSample);
                  break;
              }
            }

            return availableSamples;
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
  WAV$decodeStream$ObjectLiteral.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV$decodeStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  function Coroutine$decodeStream_axnxby$_0($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$buffer = void 0;
    this.local$data = data_0;
  }
  Coroutine$decodeStream_axnxby$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_axnxby$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_axnxby$_0.prototype.constructor = Coroutine$decodeStream_axnxby$_0;
  Coroutine$decodeStream_axnxby$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = {v: new WAV$Fmt()};
            this.local$buffer = {v: toAsync(MemorySyncStream())};
            this.state_0 = 2;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$decodeStream$lambda(this.local$fmt, this.local$buffer), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var bytesPerSample = this.local$fmt.v.bitsPerSample / 8 | 0;
            return new WAV$decodeStream$ObjectLiteral(this.local$buffer, bytesPerSample, this.$this, this.local$fmt.v.samplesPerSec, this.local$fmt.v.channels);
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
  WAV.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$_0(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV.prototype.readBlock_75070n$_0 = function (channel, channels, availableSamples, bytesPerSample, out, offset, read) {
    var increment = Kotlin.imul(channels, bytesPerSample);
    var index = Kotlin.imul(channel, bytesPerSample);
    var outc = out.get_za3lpa$(channel);
    for (var n = 0; n < availableSamples; n++) {
      outc[offset + n | 0] = read(index);
      index = index + increment | 0;
    }
  };
  function Coroutine$encode_ohj27w$($this, data_0, out_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$out = out_0;
  }
  Coroutine$encode_ohj27w$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encode_ohj27w$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encode_ohj27w$.prototype.constructor = Coroutine$encode_ohj27w$;
  Coroutine$encode_ohj27w$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = writeString(this.local$out, 'RIFF', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = write32LE(this.local$out, 36 + (this.local$data.samples.size * 2 | 0) | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeString(this.local$out, 'WAVE', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = writeString(this.local$out, 'fmt ', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = write32LE(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = write16LE(this.local$out, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = write16LE(this.local$out, this.local$data.channels, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = write32LE(this.local$out, this.local$data.rate, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = write32LE(this.local$out, Kotlin.imul(this.local$data.rate, this.local$data.channels) * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = write16LE(this.local$out, 2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = write16LE(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = writeString(this.local$out, 'data', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = write32LE(this.local$out, this.local$data.samples.size * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.state_0 = 15;
            this.result_0 = writeShortArrayLE(this.local$out, interleaved(this.local$data.samples).data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
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
  WAV.prototype.encode_ohj27w$ = function (data_0, out_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$encode_ohj27w$(this, data_0, out_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function WAV$Fmt(formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    if (formatTag === void 0)
      formatTag = -1;
    if (channels === void 0)
      channels = 2;
    if (samplesPerSec === void 0)
      samplesPerSec = 44100;
    if (avgBytesPerSec === void 0)
      avgBytesPerSec = L0;
    if (blockAlign === void 0)
      blockAlign = 0;
    if (bitsPerSample === void 0)
      bitsPerSample = 0;
    this.formatTag = formatTag;
    this.channels = channels;
    this.samplesPerSec = samplesPerSec;
    this.avgBytesPerSec = avgBytesPerSec;
    this.blockAlign = blockAlign;
    this.bitsPerSample = bitsPerSample;
  }
  WAV$Fmt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fmt',
    interfaces: []
  };
  WAV$Fmt.prototype.component1 = function () {
    return this.formatTag;
  };
  WAV$Fmt.prototype.component2 = function () {
    return this.channels;
  };
  WAV$Fmt.prototype.component3 = function () {
    return this.samplesPerSec;
  };
  WAV$Fmt.prototype.component4 = function () {
    return this.avgBytesPerSec;
  };
  WAV$Fmt.prototype.component5 = function () {
    return this.blockAlign;
  };
  WAV$Fmt.prototype.component6 = function () {
    return this.bitsPerSample;
  };
  WAV$Fmt.prototype.copy_9l942n$ = function (formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    return new WAV$Fmt(formatTag === void 0 ? this.formatTag : formatTag, channels === void 0 ? this.channels : channels, samplesPerSec === void 0 ? this.samplesPerSec : samplesPerSec, avgBytesPerSec === void 0 ? this.avgBytesPerSec : avgBytesPerSec, blockAlign === void 0 ? this.blockAlign : blockAlign, bitsPerSample === void 0 ? this.bitsPerSample : bitsPerSample);
  };
  WAV$Fmt.prototype.toString = function () {
    return 'Fmt(formatTag=' + Kotlin.toString(this.formatTag) + (', channels=' + Kotlin.toString(this.channels)) + (', samplesPerSec=' + Kotlin.toString(this.samplesPerSec)) + (', avgBytesPerSec=' + Kotlin.toString(this.avgBytesPerSec)) + (', blockAlign=' + Kotlin.toString(this.blockAlign)) + (', bitsPerSample=' + Kotlin.toString(this.bitsPerSample)) + ')';
  };
  WAV$Fmt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.formatTag) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.avgBytesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitsPerSample) | 0;
    return result;
  };
  WAV$Fmt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.formatTag, other.formatTag) && Kotlin.equals(this.channels, other.channels) && Kotlin.equals(this.samplesPerSec, other.samplesPerSec) && Kotlin.equals(this.avgBytesPerSec, other.avgBytesPerSec) && Kotlin.equals(this.blockAlign, other.blockAlign) && Kotlin.equals(this.bitsPerSample, other.bitsPerSample)))));
  };
  function Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fmt = closure$fmt_0;
    this.local$closure$dataSize = closure$dataSize_0;
    this.local$closure$handle = closure$handle_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$d = void 0;
    this.local$cdata = void 0;
    this.local$tmp$_5 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WAV$parse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WAV$parse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WAV$parse$lambda.prototype.constructor = Coroutine$WAV$parse$lambda;
  Coroutine$WAV$parse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var type = this.local$$receiver.component1()
            , d2 = this.local$$receiver.component2();
            this.local$d = d2.duplicate();
            this.local$cdata = Unit;
            switch (type) {
              case 'fmt ':
                this.local$tmp$ = this.local$closure$fmt;
                this.state_0 = 3;
                this.result_0 = readS16LE_0(this.local$d, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'data':
                this.local$tmp$_5 = this.local$closure$dataSize.v;
                this.state_0 = 2;
                this.result_0 = this.local$d.getLength(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:this.state_0 = 9;
                continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$dataSize.v = this.local$tmp$_5.add(this.result_0);
            this.local$cdata = this.local$d;
            this.state_0 = 9;
            continue;
          case 3:
            this.local$tmp$.formatTag = this.result_0;
            this.local$tmp$_0 = this.local$closure$fmt;
            this.state_0 = 4;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.channels = this.result_0;
            this.local$tmp$_1 = this.local$closure$fmt;
            this.state_0 = 5;
            this.result_0 = readS32LE(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_1.samplesPerSec = this.result_0;
            this.local$tmp$_2 = this.local$closure$fmt;
            this.state_0 = 6;
            this.result_0 = readU32LE(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_2.avgBytesPerSec = this.result_0;
            this.local$tmp$_3 = this.local$closure$fmt;
            this.state_0 = 7;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_3.blockAlign = this.result_0;
            this.local$tmp$_4 = this.local$closure$fmt;
            this.state_0 = 8;
            this.result_0 = readS16LE_0(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_4.bitsPerSample = this.result_0;
            this.local$cdata = this.local$closure$fmt;
            this.state_0 = 9;
            continue;
          case 9:
            return this.local$closure$handle(new WAV$ProcessedChunk(this.local$$receiver.type, this.local$$receiver.data, this.local$cdata));
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
  function WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$parse_phffkd$($this, data_0, handle_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$dataSize = void 0;
    this.local$data = data_0;
    this.local$handle = handle_0;
  }
  Coroutine$parse_phffkd$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_phffkd$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_phffkd$.prototype.constructor = Coroutine$parse_phffkd$;
  Coroutine$parse_phffkd$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = new WAV$Fmt();
            this.local$dataSize = {v: L0};
            this.state_0 = 2;
            this.result_0 = this.$this.riff_9bjwaz$(this.local$data, WAV$parse$lambda(this.local$fmt, this.local$dataSize, this.local$handle), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$fmt.formatTag < 0)
              invalidOp("Couldn't find RIFF 'fmt ' chunk");
            var $receiver = this.local$dataSize.v.multiply(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000)).div(this.local$fmt.avgBytesPerSec);
            return new AudioFormat$Info(TimeSpan.Companion.fromMicroseconds_14dthe$(numberToDouble($receiver)), this.local$fmt.channels);
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
  WAV.prototype.parse_phffkd$ = function (data_0, handle_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_phffkd$(this, data_0, handle_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$riff_9bjwaz$($this, data_0, handler_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$s2 = void 0;
    this.local$magic = void 0;
    this.local$length = void 0;
    this.local$s = void 0;
    this.local$type = void 0;
    this.local$data = data_0;
    this.local$handler = handler_0;
  }
  Coroutine$riff_9bjwaz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$riff_9bjwaz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$riff_9bjwaz$.prototype.constructor = Coroutine$riff_9bjwaz$;
  Coroutine$riff_9bjwaz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$s2 = this.local$data.duplicate();
            this.state_0 = 2;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$magic = this.result_0;
            this.state_0 = 3;
            this.result_0 = readS32LE(this.local$s2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$length = this.result_0;
            this.state_0 = 4;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var magic2 = this.result_0;
            if (!equals(this.local$magic, 'RIFF'))
              invalidAudioFormat("Not a RIFF file but '" + this.local$magic + "'");
            if (!equals(magic2, 'WAVE'))
              invalidAudioFormat('Not a RIFF + WAVE file');
            this.state_0 = 5;
            this.result_0 = readStream(this.local$s2, this.local$length - 4 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$s = this.result_0;
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.local$s.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            if (!!this.result_0) {
              this.state_0 = 13;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            this.state_0 = 9;
            this.result_0 = readString_0(this.local$s, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$type = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32LE(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var size = this.result_0;
            this.state_0 = 11;
            this.result_0 = readStream(this.local$s, size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var d = this.result_0;
            this.state_0 = 12;
            this.result_0 = this.local$handler(new WAV$Chunk(this.local$type, d), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 6;
            continue;
          case 13:
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
  WAV.prototype.riff_9bjwaz$ = function (data_0, handler_0, continuation_0, suspended) {
    var instance = new Coroutine$riff_9bjwaz$(this, data_0, handler_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WAV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WAV',
    interfaces: [AudioFormat]
  };
  function toWav($receiver, continuation) {
    return WAV$Companion_getInstance().encodeToByteArray_szcvz7$($receiver, void 0, void 0, continuation);
  }
  var temp;
  function write($receiver, value) {
    temp[0] = value;
    $receiver.write_kgymra$(temp, 0, 1);
  }
  var KORAU_VERSION;
  var Math_0 = Math;
  function get_niceStr($receiver) {
    return Math_0.floor($receiver) === $receiver ? numberToInt($receiver).toString() : $receiver.toString();
  }
  function SampleConvert() {
    SampleConvert_instance = this;
  }
  SampleConvert.prototype.floatToShort_mx4ult$ = function (v) {
    return toShort(clamp(numberToInt(v * kotlin_js_internal_ShortCompanionObject.MAX_VALUE), -32768, 32767));
  };
  SampleConvert.prototype.shortToFloat_mq22fl$ = function (v) {
    return v / kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
  };
  SampleConvert.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SampleConvert',
    interfaces: []
  };
  var SampleConvert_instance = null;
  function SampleConvert_getInstance() {
    if (SampleConvert_instance === null) {
      new SampleConvert();
    }
    return SampleConvert_instance;
  }
  var wrapFunction = Kotlin.wrapFunction;
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
  function combine($receiver) {
    var tmp$;
    var tmp$_0 = Int16Array;
    var tmp$_1;
    var sum = 0;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      sum = sum + element.length | 0;
    }
    var combined = new tmp$_0(sum);
    var pos = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var buffer = tmp$.next();
      arrayCopy(buffer, combined, pos, 0, 0 + buffer.length | 0);
      pos = pos + $receiver.size | 0;
    }
    return combined;
  }
  function Coroutine$copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deque = deque_0;
    this.local$temp = temp_0;
    this.local$maxSize = maxSize_0;
  }
  Coroutine$copyChunkTo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$copyChunkTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyChunkTo.prototype.constructor = Coroutine$copyChunkTo;
  Coroutine$copyChunkTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$maxSize === void 0)
              this.local$maxSize = this.local$temp.length;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read_mj6st8$(this.local$temp, 0, this.local$maxSize, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var size = this.result_0;
            this.local$deque.write_mj6st8$(this.local$temp, 0, size);
            return size;
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
  function copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0, suspended) {
    var instance = new Coroutine$copyChunkTo($receiver_0, deque_0, temp_0, maxSize_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function toByteArrayLE($receiver) {
    var out = new Int8Array($receiver.length * 2 | 0);
    for (var n = 0; n < $receiver.length; n++) {
      out[(n * 2 | 0) + 0 | 0] = toByte($receiver[n] >> 0);
      out[(n * 2 | 0) + 1 | 0] = toByte($receiver[n] >> 8);
    }
    return out;
  }
  function toShortArrayLE($receiver) {
    var out = new Int16Array($receiver.length / 2 | 0);
    for (var n = 0; n < out.length; n++) {
      var l = $receiver[(n * 2 | 0) + 0 | 0] & 255;
      var h = $receiver[(n * 2 | 0) + 1 | 0] & 255;
      out[n] = toShort(h << 8 | l);
    }
    return out;
  }
  function arraycopyStep(step, src, srcPos, dst, dstPos, length) {
    for (var n = 0; n < length; n += step)
      dst[dstPos + n | 0] = src[srcPos + n | 0];
  }
  function arraycopyStep_0(step, src, srcPos, dst, dstPos, length) {
    for (var n = 0; n < length; n += step)
      dst[dstPos + n | 0] = src[srcPos + n | 0];
  }
  function AudioData(rate, samples) {
    AudioData$Companion_getInstance();
    this.rate = rate;
    this.samples = samples;
    this.samplesInterleaved_i5r49h$_0 = lazy(AudioData$samplesInterleaved$lambda(this));
  }
  Object.defineProperty(AudioData.prototype, 'samplesInterleaved', {
    get: function () {
      return this.samplesInterleaved_i5r49h$_0.value;
    }
  });
  function AudioData$Companion() {
    AudioData$Companion_instance = this;
    this.DUMMY_o40jgj$_0 = lazy(AudioData$Companion$DUMMY$lambda);
  }
  Object.defineProperty(AudioData$Companion.prototype, 'DUMMY', {
    get: function () {
      return this.DUMMY_o40jgj$_0.value;
    }
  });
  function AudioData$Companion$DUMMY$lambda() {
    return new AudioData(44100, new AudioSamples(2, 0));
  }
  AudioData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioData$Companion_instance = null;
  function AudioData$Companion_getInstance() {
    if (AudioData$Companion_instance === null) {
      new AudioData$Companion();
    }
    return AudioData$Companion_instance;
  }
  Object.defineProperty(AudioData.prototype, 'channels', {
    get: function () {
      return this.samples.channels;
    }
  });
  Object.defineProperty(AudioData.prototype, 'totalSamples', {
    get: function () {
      return this.samples.totalSamples;
    }
  });
  Object.defineProperty(AudioData.prototype, 'totalTime', {
    get: function () {
      return this.timeAtSample_za3lpa$(this.totalSamples);
    }
  });
  AudioData.prototype.timeAtSample_za3lpa$ = function (sample) {
    var $receiver = sample / this.rate;
    return TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
  };
  AudioData.prototype.get_za3lpa$ = function (channel) {
    return this.samples.data[channel];
  };
  AudioData.prototype.get_vux9f0$ = function (channel, sample) {
    return this.samples.data[channel][sample];
  };
  AudioData.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.samples.data[channel][sample] = value;
  };
  AudioData.prototype.toString = function () {
    return 'AudioData(rate=' + this.rate + ', channels=' + this.channels + ', samples=' + this.totalSamples + ')';
  };
  function AudioData$samplesInterleaved$lambda(this$AudioData) {
    return function () {
      return interleaved(this$AudioData.samples);
    };
  }
  AudioData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioData',
    interfaces: []
  };
  function AudioConversionQuality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AudioConversionQuality_initFields() {
    AudioConversionQuality_initFields = function () {
    };
    AudioConversionQuality$FAST_instance = new AudioConversionQuality('FAST', 0);
  }
  var AudioConversionQuality$FAST_instance;
  function AudioConversionQuality$FAST_getInstance() {
    AudioConversionQuality_initFields();
    return AudioConversionQuality$FAST_instance;
  }
  AudioConversionQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioConversionQuality',
    interfaces: [Enum]
  };
  function AudioConversionQuality$values() {
    return [AudioConversionQuality$FAST_getInstance()];
  }
  AudioConversionQuality.values = AudioConversionQuality$values;
  function AudioConversionQuality$valueOf(name) {
    switch (name) {
      case 'FAST':
        return AudioConversionQuality$FAST_getInstance();
      default:throwISE('No enum constant com.soywiz.korau.sound.AudioConversionQuality.' + name);
    }
  }
  AudioConversionQuality.valueOf_61zpoe$ = AudioConversionQuality$valueOf;
  function withRate($receiver, rate) {
    return new AudioData(rate, $receiver.samples);
  }
  function toStream$ObjectLiteral(this$toStream, rate, channels) {
    this.this$toStream = this$toStream;
    AudioStream.call(this, rate, channels);
    this.cursor = 0;
    this.finished_if0xzf$_0 = false;
  }
  Object.defineProperty(toStream$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_if0xzf$_0;
    },
    set: function (finished) {
      this.finished_if0xzf$_0 = finished;
    }
  });
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  toStream$ObjectLiteral.prototype.read_trriok$ = function (out, offset, length, continuation) {
    var tmp$;
    var available = this.this$toStream.samples.totalSamples - this.cursor | 0;
    var toread = Math_0.min(available, length);
    if (toread > 0) {
      tmp$ = this.channels;
      for (var n = 0; n < tmp$; n++) {
        var srcPos = this.cursor;
        arrayCopy(this.this$toStream.samples.get_za3lpa$(n), out.get_za3lpa$(n), offset, srcPos, srcPos + toread | 0);
      }
    }
    if (toread <= 0)
      this.finished = true;
    return toread;
  };
  toStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  function toStream($receiver) {
    return new toStream$ObjectLiteral($receiver, $receiver.rate, $receiver.channels);
  }
  function toNativeSound($receiver, continuation) {
    return get_nativeSoundProvider().createSound_c6p9kv$($receiver, void 0, void 0, continuation);
  }
  function Coroutine$playAndWait($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$playAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait.prototype.constructor = Coroutine$playAndWait;
  Coroutine$playAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = toNativeSound(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.play();
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
  function playAndWait($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAudioData($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readAudioData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioData.prototype.constructor = Coroutine$readAudioData;
  Coroutine$readAudioData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            var mode;
            mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$formats.decode_axnxby$(this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = (tmp$ = this.result_0) != null ? tmp$ : invalidOp("Can't decode audio file " + this.local$$receiver);
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            }
             else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function readAudioData($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioData($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function IAudioSamples() {
  }
  Object.defineProperty(IAudioSamples.prototype, 'size', {
    get: function () {
      return this.totalSamples;
    }
  });
  IAudioSamples.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IAudioSamples.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  IAudioSamples.prototype.getFloat_vux9f0$ = function (channel, sample) {
    return SampleConvert_getInstance().shortToFloat_mq22fl$(this.get_vux9f0$(channel, sample));
  };
  IAudioSamples.prototype.setFloat_n0b4r3$ = function (channel, sample, value) {
    this.set_n7dwxb$(channel, sample, SampleConvert_getInstance().floatToShort_mx4ult$(value));
  };
  IAudioSamples.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IAudioSamples',
    interfaces: []
  };
  var Array_0 = Array;
  function AudioSamples(channels, totalSamples) {
    this.channels_kqaju8$_0 = channels;
    this.totalSamples_tcevdn$_0 = totalSamples;
    var array = Array_0(this.channels);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int16Array(this.totalSamples);
    }
    this.data = array;
  }
  Object.defineProperty(AudioSamples.prototype, 'channels', {
    get: function () {
      return this.channels_kqaju8$_0;
    }
  });
  Object.defineProperty(AudioSamples.prototype, 'totalSamples', {
    get: function () {
      return this.totalSamples_tcevdn$_0;
    }
  });
  AudioSamples.prototype.get_za3lpa$ = function (channel) {
    return this.data[channel];
  };
  AudioSamples.prototype.get_vux9f0$ = function (channel, sample) {
    return this.data[channel][sample];
  };
  AudioSamples.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.data[channel][sample] = value;
  };
  AudioSamples.prototype.hashCode = function () {
    return this.channels + (this.totalSamples * 32 | 0) + (contentDeepHashCode(this.data) * 64 | 0) | 0;
  };
  AudioSamples.prototype.equals = function (other) {
    return Kotlin.isType(other, AudioSamples) && this.channels === other.channels && this.totalSamples === other.totalSamples && contentDeepEquals(this.data, other.data);
  };
  AudioSamples.prototype.toString = function () {
    return 'AudioSamples(channels=' + this.channels + ', totalSamples=' + this.totalSamples + ')';
  };
  AudioSamples.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamples',
    interfaces: [IAudioSamples]
  };
  function AudioSamplesInterleaved(channels, totalSamples) {
    this.channels_n99llb$_0 = channels;
    this.totalSamples_s6a5dw$_0 = totalSamples;
    this.data = new Int16Array(Kotlin.imul(this.totalSamples, this.channels));
  }
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'channels', {
    get: function () {
      return this.channels_n99llb$_0;
    }
  });
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'totalSamples', {
    get: function () {
      return this.totalSamples_s6a5dw$_0;
    }
  });
  AudioSamplesInterleaved.prototype.index_0 = function (channel, sample) {
    return Kotlin.imul(sample, this.channels) + channel | 0;
  };
  AudioSamplesInterleaved.prototype.get_vux9f0$ = function (channel, sample) {
    return this.data[this.index_0(channel, sample)];
  };
  AudioSamplesInterleaved.prototype.set_n7dwxb$ = function (channel, sample, value) {
    this.data[this.index_0(channel, sample)] = value;
  };
  AudioSamplesInterleaved.prototype.toString = function () {
    return 'AudioSamplesInterleaved(channels=' + this.channels + ', totalSamples=' + this.totalSamples + ')';
  };
  AudioSamplesInterleaved.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamplesInterleaved',
    interfaces: [IAudioSamples]
  };
  var arraycopy$lambda_1 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function copyOfRange($receiver, start, end) {
    var tmp$;
    var out = new AudioSamples($receiver.channels, end - start | 0);
    tmp$ = $receiver.channels;
    for (var n = 0; n < tmp$; n++) {
      arrayCopy($receiver.get_za3lpa$(n), out.get_za3lpa$(n), 0, start, start + (end - start | 0) | 0);
    }
    return out;
  }
  function interleaved($receiver, out) {
    if (out === void 0)
      out = new AudioSamplesInterleaved($receiver.channels, $receiver.totalSamples);
    var tmp$, tmp$_0, tmp$_1;
    var m = 0;
    tmp$ = $receiver.totalSamples;
    for (var n = 0; n < tmp$; n++) {
      tmp$_0 = $receiver.channels;
      for (var c = 0; c < tmp$_0; c++) {
        out.data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = $receiver.get_vux9f0$(c, n);
      }
    }
    return out;
  }
  function separated($receiver, out) {
    if (out === void 0)
      out = new AudioSamples($receiver.channels, $receiver.totalSamples);
    var tmp$, tmp$_0;
    tmp$ = $receiver.totalSamples;
    for (var n = 0; n < tmp$; n++) {
      tmp$_0 = $receiver.channels;
      for (var c = 0; c < tmp$_0; c++)
        out.set_n7dwxb$(c, n, $receiver.get_vux9f0$(c, n));
    }
    return out;
  }
  function AudioSamplesDeque(channels) {
    this.channels = channels;
    var array = Array_0(this.channels);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new ShortArrayDeque();
    }
    this.buffer = array;
    this.temp_0 = new Int16Array(1);
  }
  Object.defineProperty(AudioSamplesDeque.prototype, 'availableRead', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = getOrNull(this.buffer, 0)) != null ? tmp$.availableRead : null) != null ? tmp$_0 : 0;
    }
  });
  Object.defineProperty(AudioSamplesDeque.prototype, 'availableReadMax', {
    get: function () {
      var tmp$;
      var $receiver = this.buffer;
      var destination = ArrayList_init($receiver.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var item = $receiver[tmp$_0];
        destination.add_11rb$(item.availableRead);
      }
      return (tmp$ = max(destination)) != null ? tmp$ : 0;
    }
  });
  AudioSamplesDeque.prototype.read_za3lpa$ = function (channel) {
    this.buffer[channel].read_359eei$(this.temp_0, 0, 1);
    return this.temp_0[0];
  };
  AudioSamplesDeque.prototype.write_2bqt6h$ = function (channel, sample) {
    var tmp$ = this.buffer[channel];
    var $receiver = this.temp_0;
    this.temp_0[0] = sample;
    return tmp$.write_359eei$($receiver, 0, 1);
  };
  AudioSamplesDeque.prototype.write_trriok$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    var tmp$;
    tmp$ = samples.channels;
    for (var channel = 0; channel < tmp$; channel++)
      this.write_r43jz4$(channel, samples.get_za3lpa$(channel), offset, len);
  };
  AudioSamplesDeque.prototype.write_7kdvij$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    this.writeInterleaved_rbjysc$(samples.data, offset, len, samples.channels);
  };
  AudioSamplesDeque.prototype.write_32capx$ = function (samples, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = samples.size - offset | 0;
    var tmp$;
    if (Kotlin.isType(samples, AudioSamples))
      this.write_trriok$(samples, offset, len);
    else if (Kotlin.isType(samples, AudioSamplesInterleaved))
      this.write_7kdvij$(samples, offset, len);
    else {
      tmp$ = samples.channels;
      for (var c = 0; c < tmp$; c++) {
        for (var n = 0; n < len; n++)
          this.write_2bqt6h$(c, samples.get_vux9f0$(c, offset + n | 0));
      }
    }
  };
  AudioSamplesDeque.prototype.write_r43jz4$ = function (channel, data, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = data.length - offset | 0;
    this.buffer[channel].write_359eei$(data, offset, len);
  };
  AudioSamplesDeque.prototype.write_3hvitc$ = function (channel, data, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = data.length - offset | 0;
    for (var n = 0; n < len; n++)
      this.write_2bqt6h$(channel, SampleConvert_getInstance().floatToShort_mx4ult$(data[offset + n | 0]));
  };
  AudioSamplesDeque.prototype.writeInterleaved_rbjysc$ = function (data, offset, len, channels) {
    if (len === void 0)
      len = data.length - offset | 0;
    if (channels === void 0)
      channels = this.channels;
    for (var n = 0; n < len; n++) {
      var channel = n % channels;
      this.write_2bqt6h$(channel, data[offset + n | 0]);
    }
  };
  AudioSamplesDeque.prototype.read_trriok$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    tmp$ = out.channels;
    for (var channel = 0; channel < tmp$; channel++)
      this.buffer[channel].read_359eei$(out.get_za3lpa$(channel), offset, len);
    return result;
  };
  AudioSamplesDeque.prototype.read_7kdvij$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    tmp$ = out.channels;
    for (var channel = 0; channel < tmp$; channel++) {
      for (var n = 0; n < len; n++)
        out.set_n7dwxb$(channel, offset + n | 0, this.read_za3lpa$(channel));
    }
    return result;
  };
  AudioSamplesDeque.prototype.read_32capx$ = function (out, offset, len) {
    if (offset === void 0)
      offset = 0;
    if (len === void 0)
      len = out.totalSamples - offset | 0;
    var tmp$;
    var b = this.availableRead;
    var result = Math_0.min(len, b);
    if (Kotlin.isType(out, AudioSamples))
      this.read_trriok$(out, offset, len);
    else if (Kotlin.isType(out, AudioSamplesInterleaved))
      this.read_7kdvij$(out, offset, len);
    else {
      tmp$ = out.channels;
      for (var c = 0; c < tmp$; c++) {
        for (var n = 0; n < len; n++)
          out.set_n7dwxb$(c, offset + n | 0, this.read_za3lpa$(c));
      }
    }
    return result;
  };
  AudioSamplesDeque.prototype.toString = function () {
    return 'AudioSamplesDeque(channels=' + this.channels + ', availableRead=' + this.availableRead + ')';
  };
  AudioSamplesDeque.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioSamplesDeque',
    interfaces: []
  };
  function AudioStream(rate_0, channels_0) {
    AudioStream$Companion_getInstance();
    this.rate = rate_0;
    this.channels = channels_0;
    this.finished_3olf9t$_0 = false;
    this.totalLengthInSamples = null;
  }
  Object.defineProperty(AudioStream.prototype, 'finished', {
    get: function () {
      return this.finished_3olf9t$_0;
    }
  });
  Object.defineProperty(AudioStream.prototype, 'totalLength', {
    get: function () {
      var tmp$;
      var $receiver = ((tmp$ = this.totalLengthInSamples) != null ? tmp$ : L0).toNumber() / this.rate;
      return TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
    }
  });
  AudioStream.prototype.read_trriok$ = function (out, offset, length, continuation) {
    return 0;
  };
  AudioStream.prototype.close = function () {
  };
  function AudioStream$Companion() {
    AudioStream$Companion_instance = this;
  }
  function AudioStream$Companion$generator$ObjectLiteral(closure$generateChunk, closure$channels, rate_0, channels_0) {
    this.closure$generateChunk = closure$generateChunk;
    AudioStream.call(this, rate_0, channels_0);
    this.deque = new AudioSamplesDeque(closure$channels);
    this.finished_6civll$_0 = false;
    this.step_0 = 0;
  }
  Object.defineProperty(AudioStream$Companion$generator$ObjectLiteral.prototype, 'availableRead', {
    get: function () {
      return this.deque.availableRead;
    }
  });
  Object.defineProperty(AudioStream$Companion$generator$ObjectLiteral.prototype, 'finished', {
    get: function () {
      return this.finished_6civll$_0;
    },
    set: function (finished) {
      this.finished_6civll$_0 = finished;
    }
  });
  function Coroutine$read_trriok$_0($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_trriok$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_trriok$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_trriok$_0.prototype.constructor = Coroutine$read_trriok$_0;
  Coroutine$read_trriok$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.$this.finished && this.$this.availableRead <= 0) {
              return -1;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (this.$this.availableRead > 0) {
              this.state_0 = 6;
              continue;
            }

            this.state_0 = 4;
            this.result_0 = this.$this.closure$generateChunk(this.$this.deque, (tmp$ = this.$this.step_0, this.$this.step_0 = tmp$ + 1 | 0, tmp$), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (!this.result_0) {
              this.$this.finished = true;
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 3;
            continue;
          case 6:
            var b = this.$this.availableRead;
            var read = Math_0.min(this.local$length, b);
            this.$this.deque.read_trriok$(this.local$out, this.local$offset, read);
            return read;
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
  AudioStream$Companion$generator$ObjectLiteral.prototype.read_trriok$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_trriok$_0(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AudioStream$Companion$generator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  AudioStream$Companion.prototype.generator_cyo1yf$ = function (rate, channels, generateChunk) {
    return new AudioStream$Companion$generator$ObjectLiteral(generateChunk, channels, rate, channels);
  };
  AudioStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioStream$Companion_instance = null;
  function AudioStream$Companion_getInstance() {
    if (AudioStream$Companion_instance === null) {
      new AudioStream$Companion();
    }
    return AudioStream$Companion_instance;
  }
  AudioStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioStream',
    interfaces: [Closeable]
  };
  function Coroutine$toData($receiver_0, maxSamples_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$out = void 0;
    this.local$buffer = void 0;
    this.local$read = void 0;
    this.local$$receiver = $receiver_0;
    this.local$maxSamples = maxSamples_0;
  }
  Coroutine$toData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toData.prototype.constructor = Coroutine$toData;
  Coroutine$toData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$maxSamples === void 0)
              this.local$maxSamples = 2147483647;
            this.local$out = new AudioSamplesDeque(this.local$$receiver.channels);
            this.local$buffer = new AudioSamples(this.local$$receiver.channels, 1024);
            this.exceptionState_0 = 7;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$$receiver.finished) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read_trriok$(this.local$buffer, 0, this.local$buffer.totalSamples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$read = this.result_0;
            if (this.local$read <= 0) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$out.write_trriok$(this.local$buffer, 0, this.local$read);
            if (this.local$out.availableRead >= this.local$maxSamples) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [6];
            this.state_0 = 8;
            continue;
          case 6:
            var maxOutSamples = this.local$out.availableReadMax;
            var tmp$ = this.local$$receiver.rate;
            var $receiver = new AudioSamples(this.local$$receiver.channels, maxOutSamples);
            this.local$out.read_trriok$($receiver);
            return new AudioData(tmp$, $receiver);
          case 7:
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 9;
            this.local$$receiver.close();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 9) {
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
  function toData($receiver_0, maxSamples_0, continuation_0, suspended) {
    var instance = new Coroutine$toData($receiver_0, maxSamples_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function playAndWait_0($receiver, bufferSeconds, continuation) {
    if (bufferSeconds === void 0)
      bufferSeconds = 0.1;
    return get_nativeSoundProvider().playAndWait_hni0ux$($receiver, bufferSeconds, continuation);
  }
  function Coroutine$readAudioStream($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readAudioStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioStream.prototype.constructor = Coroutine$readAudioStream;
  Coroutine$readAudioStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.open_tiaunm$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeStream_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function readAudioStream($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioStream($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeAudio($receiver_0, data_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$error = void 0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$data = data_0;
    this.local$formats = formats_0;
  }
  Coroutine$writeAudio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeAudio.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAudio.prototype.constructor = Coroutine$writeAudio;
  Coroutine$writeAudio.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            var mode = VfsOpenMode.CREATE_OR_TRUNCATE;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver_0 = this.result_0;
            var tmp$_2;
            this.local$error = null;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$formats.encode_ohj27w$(this.local$data, this.local$$receiver_0, get_baseName(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$_1 = Unit;
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Throwable)) {
              this.local$error = e_0;
              this.local$tmp$_1 = null;
            }
             else
              throw e_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$result = this.local$tmp$_1;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.local$error != null)
              throw this.local$error;
            this.result_0 = (tmp$_2 = this.local$result) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            this.result_0;
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function writeAudio($receiver_0, data_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$writeAudio($receiver_0, data_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function AudioTone() {
    AudioTone_instance = this;
  }
  AudioTone.prototype.generate_wivp55$ = function (length, freq, rate) {
    if (rate === void 0)
      rate = 44100;
    var nsamples = numberToInt(rate * length.seconds);
    var samples = new AudioSamples(1, nsamples);
    var scale = freq / nsamples;
    for (var n = 0; n < nsamples; n++) {
      var ratio = n / nsamples;
      var x = ratio * math.PI * scale;
      var sample = Math_0.cos(x);
      var shortSample = SampleConvert_getInstance().floatToShort_mx4ult$(sample);
      samples.set_n7dwxb$(0, n, shortSample);
    }
    return new AudioData(rate, samples);
  };
  AudioTone.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AudioTone',
    interfaces: []
  };
  var AudioTone_instance = null;
  function AudioTone_getInstance() {
    if (AudioTone_instance === null) {
      new AudioTone();
    }
    return AudioTone_instance;
  }
  function NativeSoundProvider() {
    this.target_bgeedf$_0 = 'unknown';
    this.initialized_768h90$_0 = false;
  }
  Object.defineProperty(NativeSoundProvider.prototype, 'target', {
    get: function () {
      return this.target_bgeedf$_0;
    }
  });
  NativeSoundProvider.prototype.initOnce = function () {
    if (!this.initialized_768h90$_0) {
      this.initialized_768h90$_0 = true;
      this.init();
    }
  };
  NativeSoundProvider.prototype.createAudioStream_za3lpa$$default = function (freq) {
    return new PlatformAudioOutput(freq);
  };
  NativeSoundProvider.prototype.createAudioStream_za3lpa$ = function (freq, callback$default) {
    if (freq === void 0)
      freq = 44100;
    return callback$default ? callback$default(freq) : this.createAudioStream_za3lpa$$default(freq);
  };
  NativeSoundProvider.prototype.init = function () {
  };
  function NativeSoundProvider$createSound$ObjectLiteral() {
    NativeSound.call(this);
  }
  NativeSoundProvider$createSound$ObjectLiteral.prototype.decode = function (continuation) {
    return AudioData$Companion_getInstance().DUMMY;
  };
  function NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral(sound_0) {
    NativeSoundChannel.call(this, sound_0);
  }
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype.stop = function () {
  };
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  NativeSoundProvider$createSound$ObjectLiteral.prototype.play = function () {
    return new NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral(this);
  };
  NativeSoundProvider$createSound$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSound]
  };
  NativeSoundProvider.prototype.createSound_1fhb37$$default = function (data, streaming, continuation) {
    return new NativeSoundProvider$createSound$ObjectLiteral();
  };
  NativeSoundProvider.prototype.createSound_1fhb37$ = function (data, streaming, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(data, streaming, continuation) : this.createSound_1fhb37$$default(data, streaming, continuation);
  };
  function Coroutine$createSound_52yb2k$$default($this, vfs_0, path_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_52yb2k$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_52yb2k$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_52yb2k$$default.prototype.constructor = Coroutine$createSound_52yb2k$$default;
  Coroutine$createSound_52yb2k$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1fhb37$(this.result_0, this.local$streaming, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  NativeSoundProvider.prototype.createSound_52yb2k$$default = function (vfs_0, path_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_52yb2k$$default(this, vfs_0, path_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_52yb2k$ = function (vfs, path, streaming, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(vfs, path, streaming, continuation) : this.createSound_52yb2k$$default(vfs, path, streaming, continuation);
  };
  NativeSoundProvider.prototype.createSound_1ecnpg$ = function (file, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return this.createSound_52yb2k$(file.vfs, file.path, streaming, continuation);
  };
  function Coroutine$createSound_x9gm8m$($this, file_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_x9gm8m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_x9gm8m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_x9gm8m$.prototype.constructor = Coroutine$createSound_x9gm8m$;
  Coroutine$createSound_x9gm8m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$streaming === void 0)
              this.local$streaming = false;
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1ecnpg$(this.result_0, this.local$streaming, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  NativeSoundProvider.prototype.createSound_x9gm8m$ = function (file_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_x9gm8m$(this, file_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_c6p9kv$$default($this, data_0, formats_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_c6p9kv$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_c6p9kv$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_c6p9kv$$default.prototype.constructor = Coroutine$createSound_c6p9kv$$default;
  Coroutine$createSound_c6p9kv$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = WAV$Companion_getInstance().encodeToByteArray_szcvz7$(this.local$data, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1fhb37$(this.result_0, this.local$streaming, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  NativeSoundProvider.prototype.createSound_c6p9kv$$default = function (data_0, formats_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_c6p9kv$$default(this, data_0, formats_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.prototype.createSound_c6p9kv$ = function (data, formats, streaming, continuation, callback$default) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(data, formats, streaming, continuation) : this.createSound_c6p9kv$$default(data, formats, streaming, continuation);
  };
  function Coroutine$playAndWait_hni0ux$($this, stream_0, bufferSeconds_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 11;
    this.$this = $this;
    this.local$nas = void 0;
    this.local$temp = void 0;
    this.local$minBuf = void 0;
    this.local$stream = stream_0;
    this.local$bufferSeconds = bufferSeconds_0;
  }
  Coroutine$playAndWait_hni0ux$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWait_hni0ux$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWait_hni0ux$.prototype.constructor = Coroutine$playAndWait_hni0ux$;
  Coroutine$playAndWait_hni0ux$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$bufferSeconds === void 0)
              this.local$bufferSeconds = 0.1;
            var tmp$;
            this.local$nas = get_nativeSoundProvider().createAudioStream_za3lpa$();
            this.exceptionState_0 = 9;
            this.local$temp = new AudioSamples(this.local$stream.channels, 1024);
            var nchannels = 2;
            this.local$minBuf = numberToInt(Kotlin.imul(this.local$stream.rate, nchannels) * this.local$bufferSeconds);
            this.local$nas.start();
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$stream.finished) {
              this.state_0 = 8;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = this.local$stream.read_trriok$(this.local$temp, 0, this.local$temp.totalSamples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var read = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$nas.add_trriok$(this.local$temp, 0, read, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            tmp$ = this.local$nas.availableSamples;
            if (!(this.local$minBuf <= tmp$ && tmp$ <= (this.local$minBuf * 2 | 0))) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 4;
            continue;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            this.exceptionState_0 = 11;
            this.state_0 = 10;
            continue;
          case 9:
            this.exceptionState_0 = 11;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              this.local$nas.stop();
            }
             else
              throw e;
            this.state_0 = 10;
            continue;
          case 10:
            return;
          case 11:
            throw this.exception_0;
          default:this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 11) {
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
  NativeSoundProvider.prototype.playAndWait_hni0ux$ = function (stream_0, bufferSeconds_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWait_hni0ux$(this, stream_0, bufferSeconds_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundProvider',
    interfaces: []
  };
  function DummyNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  DummyNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function DummyNativeSoundChannel(sound, data) {
    if (data === void 0)
      data = null;
    NativeSoundChannel.call(this, sound);
    this.data = data;
    this.timeStart_0 = DateTime.Companion.now();
  }
  Object.defineProperty(DummyNativeSoundChannel.prototype, 'current', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.timeStart_0);
    }
  });
  Object.defineProperty(DummyNativeSoundChannel.prototype, 'total', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.data) != null ? tmp$.totalTime : null) != null ? tmp$_0 : TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
    }
  });
  DummyNativeSoundChannel.prototype.stop = function () {
    this.timeStart_0 = DateTime.Companion.now().plus_fv8bff$(this.total);
  };
  DummyNativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundChannel',
    interfaces: [NativeSoundChannel]
  };
  function NativeSoundChannel(sound_0) {
    this.sound = sound_0;
    this.startTime_po208j$_0 = DateTime.Companion.now();
    this.volume_jvnuhq$_0 = 1.0;
    this.pitch_g1jq7w$_0 = 1.0;
    this.panning_pl2mbv$_0 = 0.0;
  }
  Object.defineProperty(NativeSoundChannel.prototype, 'volume', {
    get: function () {
      return this.volume_jvnuhq$_0;
    },
    set: function (volume) {
      this.volume_jvnuhq$_0 = volume;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'pitch', {
    get: function () {
      return this.pitch_g1jq7w$_0;
    },
    set: function (pitch) {
      this.pitch_g1jq7w$_0 = pitch;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'panning', {
    get: function () {
      return this.panning_pl2mbv$_0;
    },
    set: function (panning) {
      this.panning_pl2mbv$_0 = panning;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'current', {
    get: function () {
      return DateTime.Companion.now().minus_mw5vjr$(this.startTime_po208j$_0);
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'total', {
    get: function () {
      return this.sound.length;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'playing', {
    get: function () {
      return this.current.compareTo_11rb$(this.total) < 0;
    }
  });
  NativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundChannel',
    interfaces: []
  };
  function await$lambda($receiver, current, total) {
    return Unit;
  }
  function Coroutine$await($receiver_0, progress_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$progress = progress_0;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$progress === void 0)
              this.local$progress = await$lambda;
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$$receiver.playing) {
              this.state_0 = 3;
              continue;
            }

            this.local$progress(this.local$$receiver, this.local$$receiver.current, this.local$$receiver.total);
            this.state_0 = 2;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 1;
            continue;
          case 3:
            this.local$progress(this.local$$receiver, this.local$$receiver.total, this.local$$receiver.total);
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              this.local$$receiver.stop();
            }
             else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function await_0($receiver_0, progress_0, continuation_0, suspended) {
    var instance = new Coroutine$await($receiver_0, progress_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function NativeSound() {
    this.length_mgoqkj$_0 = TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
  }
  Object.defineProperty(NativeSound.prototype, 'length', {
    get: function () {
      return this.length_mgoqkj$_0;
    }
  });
  NativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSound',
    interfaces: []
  };
  function toData_0($receiver, continuation) {
    return $receiver.decode(continuation);
  }
  function Coroutine$toStream($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toStream.prototype.constructor = Coroutine$toStream;
  Coroutine$toStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.decode(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toStream(this.result_0);
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
  function toStream_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toStream($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function playAndWait$lambda($receiver, current, total) {
    return Unit;
  }
  function playAndWait_1($receiver, progress, continuation) {
    if (progress === void 0)
      progress = playAndWait$lambda;
    return await_0($receiver.play(), progress, continuation);
  }
  function readNativeSound($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_x9gm8m$($receiver, streaming, continuation);
  }
  function readNativeSoundOptimized($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_x9gm8m$($receiver, streaming, continuation);
  }
  function PlatformAudioOutput(freq) {
    this.availableSamples_ezqrsf$_0 = 0;
  }
  Object.defineProperty(PlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.availableSamples_ezqrsf$_0;
    }
  });
  PlatformAudioOutput.prototype.add_trriok$$default = function (samples, offset, size, continuation) {
    return Unit;
  };
  PlatformAudioOutput.prototype.add_trriok$ = function (samples, offset, size, continuation, callback$default) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0)
      size = samples.totalSamples;
    return callback$default ? callback$default(samples, offset, size, continuation) : this.add_trriok$$default(samples, offset, size, continuation);
  };
  PlatformAudioOutput.prototype.add_29y2db$ = function (data, continuation) {
    return this.add_trriok$(data.samples, 0, data.totalSamples, continuation);
  };
  PlatformAudioOutput.prototype.start = function () {
  };
  PlatformAudioOutput.prototype.stop = function () {
  };
  PlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformAudioOutput',
    interfaces: []
  };
  function SoundUtils() {
    SoundUtils_instance = this;
  }
  SoundUtils.prototype.convertS16ToF32_r43jz4$ = function (channels, input, leftVolume, rightVolume) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var output = new Float32Array((input.length * 2 | 0) / channels | 0);
    var optimized = leftVolume === 1 && rightVolume === 1;
    switch (channels) {
      case 2:
        if (optimized) {
          for (var n = 0; n < output.length; n++)
            output[n] = input[n] / 32767.0;
        }
         else {
          for (var n_0 = 0; n_0 < output.length; n_0 += 2) {
            output[n_0 + 0 | 0] = input[n_0 + 0 | 0] / 32767.0 * leftVolume;
            output[n_0 + 1 | 0] = input[n_0 + 1 | 0] / 32767.0 * rightVolume;
          }
        }

        break;
      case 1:
        if (optimized) {
          var m = 0;
          for (var n_1 = 0; n_1 < input.length; n_1++) {
            var v = input[n_1] / 32767.0;
            output[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = v;
            output[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = v;
          }
        }
         else {
          var m_0 = 0;
          for (var n_2 = 0; n_2 < input.length; n_2++) {
            var sample = input[n_2] / 32767.0;
            output[tmp$_1 = m_0, m_0 = tmp$_1 + 1 | 0, tmp$_1] = sample * leftVolume;
            output[tmp$_2 = m_0, m_0 = tmp$_2 + 1 | 0, tmp$_2] = sample * rightVolume;
          }
        }

        break;
    }
    return output;
  };
  SoundUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundUtils',
    interfaces: []
  };
  var SoundUtils_instance = null;
  function SoundUtils_getInstance() {
    if (SoundUtils_instance === null) {
      new SoundUtils();
    }
    return SoundUtils_instance;
  }
  function HtmlNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  HtmlNativeSoundProvider.prototype.initOnce = function () {
  };
  HtmlNativeSoundProvider.prototype.createAudioStream_za3lpa$$default = function (freq) {
    return new JsPlatformAudioOutput(freq);
  };
  function Coroutine$createSound_1fhb37$$default($this, data_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$createSound_1fhb37$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_1fhb37$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_1fhb37$$default.prototype.constructor = Coroutine$createSound_1fhb37$$default;
  Coroutine$createSound_1fhb37$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HtmlSimpleSound_getInstance().loadSound_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new AudioBufferNativeSound(this.result_0);
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
  HtmlNativeSoundProvider.prototype.createSound_1fhb37$$default = function (data_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_1fhb37$$default(this, data_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_52yb2k$$default_0($this, vfs_0, path_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$createSound_52yb2k$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_52yb2k$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_52yb2k$$default_0.prototype.constructor = Coroutine$createSound_52yb2k$$default_0;
  Coroutine$createSound_52yb2k$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.local$vfs, LocalVfs) || Kotlin.isType(this.local$vfs, UrlVfs)) {
              if (Kotlin.isType(this.local$vfs, LocalVfs))
                tmp$ = this.local$path;
              else if (Kotlin.isType(this.local$vfs, UrlVfs))
                tmp$ = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
              else
                tmp$ = lang.invalidOp;
              var rpath = tmp$;
              this.state_0 = 3;
              this.result_0 = HtmlSimpleSound_getInstance().loadSound_61zpoe$(rpath, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.$this.createSound_52yb2k$(this.local$vfs, this.local$path, void 0, this, NativeSoundProvider.prototype.createSound_52yb2k$$default.bind(this.$this));
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return new AudioBufferNativeSound(this.result_0);
          case 4:
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
  HtmlNativeSoundProvider.prototype.createSound_52yb2k$$default = function (vfs_0, path_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_52yb2k$$default_0(this, vfs_0, path_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function AudioBufferNativeSound(buffer) {
    NativeSound.call(this);
    this.buffer = buffer;
    var tmp$, tmp$_0;
    var $receiver = (tmp$_0 = (tmp$ = this.buffer) != null ? tmp$.duration : null) != null ? tmp$_0 : 0.0;
    this.length_u3ai7r$_0 = TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble($receiver));
  }
  Object.defineProperty(AudioBufferNativeSound.prototype, 'length', {
    get: function () {
      return this.length_u3ai7r$_0;
    }
  });
  AudioBufferNativeSound.prototype.decode = function (continuation) {
    var tmp$;
    if (this.buffer == null) {
      return AudioData$Companion_getInstance().DUMMY;
    }
     else {
      var nchannels = this.buffer.numberOfChannels;
      var nsamples = this.buffer.length;
      var data = new AudioSamples(nchannels, nsamples);
      var m = 0;
      for (var c = 0; c < nchannels; c++) {
        var channelF = this.buffer.getChannelData(c);
        for (var n = 0; n < nsamples; n++) {
          data.get_za3lpa$(c)[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = SampleConvert_getInstance().floatToShort_mx4ult$(channelF[n]);
        }
      }
      return new AudioData(this.buffer.sampleRate, data);
    }
  };
  function AudioBufferNativeSound$play$ObjectLiteral(this$AudioBufferNativeSound, sound) {
    NativeSoundChannel.call(this, sound);
    this.channel = this$AudioBufferNativeSound.buffer != null ? HtmlSimpleSound_getInstance().playSound_f3gkkr$(this$AudioBufferNativeSound.buffer) : null;
    var tmp$, tmp$_0, tmp$_1;
    this.total_ri43qs$_0 = (tmp$_1 = (tmp$_0 = (tmp$ = this$AudioBufferNativeSound.buffer) != null ? tmp$.duration : null) != null ? TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(tmp$_0)) : null) != null ? tmp$_1 : TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
  }
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'volume', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.gain : null) != null ? tmp$_0.gain : null) != null ? tmp$_1.value : null) != null ? tmp$_2 : 1.0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.gain : null) != null ? tmp$_0.gain : null) != null ? (tmp$_1.value = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'pitch', {
    get: function () {
      return Kotlin.callGetter(this, NativeSoundChannel.prototype, 'pitch');
    },
    set: function (value) {
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'panning', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.panner : null) != null ? tmp$_0.pan : null) != null ? tmp$_1.value : null) != null ? tmp$_2 : 0.0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.panner : null) != null ? tmp$_0.pan : null) != null ? (tmp$_1.value = value) : null;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'current', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this.channel) != null ? tmp$.currentTime : null) != null ? TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(tmp$_0)) : null) != null ? tmp$_1 : TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(0));
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'total', {
    get: function () {
      return this.total_ri43qs$_0;
    }
  });
  Object.defineProperty(AudioBufferNativeSound$play$ObjectLiteral.prototype, 'playing', {
    get: function () {
      return this.current.compareTo_11rb$(this.total) < 0;
    }
  });
  AudioBufferNativeSound$play$ObjectLiteral.prototype.stop = function () {
    var tmp$;
    (tmp$ = this.channel) != null ? (tmp$.stop(), Unit) : null;
  };
  AudioBufferNativeSound$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  AudioBufferNativeSound.prototype.play = function () {
    return new AudioBufferNativeSound$play$ObjectLiteral(this, this);
  };
  AudioBufferNativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioBufferNativeSound',
    interfaces: [NativeSound]
  };
  function Coroutine$soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$elapsed = void 0;
    this.local$totalTime = totalTime_0;
    this.local$timeProvider = timeProvider_0;
    this.local$progress = progress_0;
    this.local$startTime = startTime_0;
  }
  Coroutine$soundProgress.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$soundProgress.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$soundProgress.prototype.constructor = Coroutine$soundProgress;
  Coroutine$soundProgress.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$startTime === void 0)
              this.local$startTime = this.local$timeProvider();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var now = this.local$timeProvider();
            this.local$elapsed = now - this.local$startTime;
            if (this.local$elapsed >= this.local$totalTime) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$progress(this.local$elapsed, this.local$totalTime);
            this.state_0 = 4;
            this.result_0 = delay(TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            this.local$progress(this.local$totalTime, this.local$totalTime);
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
  function soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0, suspended) {
    var instance = new Coroutine$soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function MediaElementAudioSourceNodeWithAudioElement(node, audio) {
    this.node = node;
    this.audio = audio;
  }
  MediaElementAudioSourceNodeWithAudioElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MediaElementAudioSourceNodeWithAudioElement',
    interfaces: []
  };
  function HtmlSimpleSound() {
    HtmlSimpleSound_instance = this;
    var tmp$, tmp$_0, tmp$_1;
    try {
      if (!equals(typeof window.AudioContext, 'undefined'))
        tmp$ = new AudioContext();
      else {
        if (!equals(typeof window.webkitAudioContext, 'undefined'))
          tmp$ = new webkitAudioContext();
        else
          tmp$ = null;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        tmp$ = null;
      }
       else
        throw e;
    }
    this.ctx = tmp$;
    this.unlocked = false;
    this.unlockDeferred_0 = CompletableDeferred(Job());
    this.unlock = Kotlin.isType(tmp$_0 = this.unlockDeferred_0, Deferred) ? tmp$_0 : throwCCE();
    var _scratchBuffer = (tmp$_1 = this.ctx) != null ? tmp$_1.createBuffer(1, 1, 22050) : null;
    var unlock = {v: null};
    unlock.v = HtmlSimpleSound_init$lambda(this, _scratchBuffer, unlock);
    document.addEventListener('keydown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchstart', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchend', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('mousedown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
  }
  Object.defineProperty(HtmlSimpleSound.prototype, 'available', {
    get: function () {
      return this.ctx != null;
    }
  });
  function HtmlSimpleSound$SimpleSoundChannel(buffer, node, gain, panner) {
    this.buffer = buffer;
    this.node = node;
    this.gain = gain;
    this.panner = panner;
    var tmp$, tmp$_0;
    this.startTime = (tmp$_0 = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.currentTime : null) != null ? tmp$_0 : 0.0;
    this.running_0 = true;
  }
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'currentTime', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.currentTime : null) != null ? tmp$_0 : 0.0;
    }
  });
  Object.defineProperty(HtmlSimpleSound$SimpleSoundChannel.prototype, 'playing', {
    get: function () {
      return this.running_0 && this.currentTime < this.buffer.duration;
    }
  });
  HtmlSimpleSound$SimpleSoundChannel.prototype.stop = function () {
    var tmp$;
    this.running_0 = false;
    (tmp$ = this.node) != null ? (tmp$.stop(), Unit) : null;
  };
  HtmlSimpleSound$SimpleSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleSoundChannel',
    interfaces: []
  };
  function HtmlSimpleSound$panner$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.panner_r9e1zk$ = function ($receiver, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$panner$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }
    var ctx = tmp$;
    var node = ctx.createStereoPanner();
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$gain$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.gain_cvo8qv$ = function ($receiver, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$gain$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }
    var ctx = tmp$;
    var node = ctx.createGain();
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$source$lambda($receiver) {
    return Unit;
  }
  HtmlSimpleSound.prototype.source_qe40ti$ = function ($receiver, buffer, callback) {
    if (callback === void 0)
      callback = HtmlSimpleSound$source$lambda;
    var tmp$;
    tmp$ = this.ctx;
    if (tmp$ == null) {
      return null;
    }
    var ctx = tmp$;
    var node = ctx.createBufferSource();
    node.buffer = buffer;
    callback(node);
    node.connect($receiver);
    return node;
  };
  function HtmlSimpleSound$playSound$lambda$lambda$lambda$lambda($receiver) {
    $receiver.start(0.0);
    return Unit;
  }
  function HtmlSimpleSound$playSound$lambda$lambda$lambda(closure$buffer, this$HtmlSimpleSound, closure$sourceNode) {
    return function ($receiver) {
      $receiver.gain.value = 1.0;
      closure$sourceNode.v = this$HtmlSimpleSound.source_qe40ti$($receiver, closure$buffer, HtmlSimpleSound$playSound$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function HtmlSimpleSound$playSound$lambda$lambda(closure$buffer, this$HtmlSimpleSound, closure$sourceNode, closure$gainNode) {
    return function ($receiver) {
      closure$gainNode.v = this$HtmlSimpleSound.gain_cvo8qv$($receiver, HtmlSimpleSound$playSound$lambda$lambda$lambda(closure$buffer, this$HtmlSimpleSound, closure$sourceNode));
      return Unit;
    };
  }
  HtmlSimpleSound.prototype.playSound_f3gkkr$ = function (buffer) {
    if (this.ctx == null)
      return null;
    var gainNode = {v: null};
    var pannerNode = {v: null};
    var sourceNode = {v: null};
    pannerNode.v = this.panner_r9e1zk$(this.ctx.destination, HtmlSimpleSound$playSound$lambda$lambda(buffer, this, sourceNode, gainNode));
    return new HtmlSimpleSound$SimpleSoundChannel(buffer, sourceNode.v, gainNode.v, pannerNode.v);
  };
  HtmlSimpleSound.prototype.stopSound_dq0zcj$ = function (channel) {
    channel != null ? (channel.disconnect(0), Unit) : null;
    channel != null ? (channel.stop(0.0), Unit) : null;
  };
  function Coroutine$waitUnlocked($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$waitUnlocked.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitUnlocked.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitUnlocked.prototype.constructor = Coroutine$waitUnlocked;
  Coroutine$waitUnlocked.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.unlock.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.ctx;
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
  HtmlSimpleSound.prototype.waitUnlocked = function (continuation_0, suspended) {
    var instance = new Coroutine$waitUnlocked(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HtmlSimpleSound$callOnUnlocked$lambda(closure$cancelled, closure$callback) {
    return function (it) {
      if (!closure$cancelled.v)
        closure$callback(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound$callOnUnlocked$lambda_0(closure$cancelled) {
    return function (it) {
      closure$cancelled.v = true;
      return Unit;
    };
  }
  HtmlSimpleSound.prototype.callOnUnlocked_x41j5s$ = function (callback) {
    var cancelled = {v: false};
    this.unlock.invokeOnCompletion_f05bi3$(HtmlSimpleSound$callOnUnlocked$lambda(cancelled, callback));
    return Cancellable.Companion.invoke_4m4org$(HtmlSimpleSound$callOnUnlocked$lambda_0(cancelled));
  };
  var Result = Kotlin.kotlin.Result;
  function HtmlSimpleSound$loadSound$lambda$lambda(closure$c) {
    return function (data) {
      closure$c.resumeWith_tl1gpc$(new Result(data));
      return Unit;
    };
  }
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  function HtmlSimpleSound$loadSound$lambda$lambda_0(closure$c, closure$url) {
    return function () {
      var $receiver = closure$c;
      var exception = Exception_init('error decoding ' + closure$url);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      return Unit;
    };
  }
  function HtmlSimpleSound$loadSound$lambda(this$HtmlSimpleSound, closure$data, closure$url) {
    return function (c) {
      this$HtmlSimpleSound.ctx.decodeAudioData(closure$data, HtmlSimpleSound$loadSound$lambda$lambda(c), HtmlSimpleSound$loadSound$lambda$lambda_0(c, closure$url));
      return Unit;
    };
  }
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  function Coroutine$loadSound_qucnhy$($this, data_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$url = url_0;
  }
  Coroutine$loadSound_qucnhy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_qucnhy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_qucnhy$.prototype.constructor = Coroutine$loadSound_qucnhy$;
  Coroutine$loadSound_qucnhy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.ctx == null) {
              return null;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = suspendCoroutine$lambda(HtmlSimpleSound$loadSound$lambda(this.$this, this.local$data, this.local$url))(this);
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
  HtmlSimpleSound.prototype.loadSound_qucnhy$ = function (data_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_qucnhy$(this, data_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HtmlSimpleSound.prototype.loadSoundBuffer_61zpoe$ = function (url, continuation) {
    if (this.ctx == null)
      return null;
    var audioPool = document.createElement('audio');
    audioPool.currentTime = 0.0;
    audioPool.pause();
    audioPool.autoplay = false;
    audioPool.src = url;
    return new MediaElementAudioSourceNodeWithAudioElement(this.ctx.createMediaElementSource(audioPool), audioPool);
  };
  HtmlSimpleSound.prototype.playSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? tmp$.play() : null;
      (tmp$_0 = buffer != null ? buffer.node : null) != null ? tmp$_0.connect(this.ctx.destination) : null;
    }
  };
  HtmlSimpleSound.prototype.stopSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? (tmp$.pause(), Unit) : null;
      (tmp$_0 = buffer != null ? buffer.audio : null) != null ? (tmp$_0.currentTime = 0.0) : null;
      (tmp$_1 = buffer != null ? buffer.node : null) != null ? (tmp$_1.disconnect(this.ctx.destination), Unit) : null;
    }
  };
  HtmlSimpleSound.prototype.loadSound_fqrh44$ = function (data, continuation) {
    return this.loadSound_qucnhy$(data.buffer, 'ByteArray', continuation);
  };
  function Coroutine$loadSound_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
  }
  Coroutine$loadSound_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_61zpoe$.prototype.constructor = Coroutine$loadSound_61zpoe$;
  Coroutine$loadSound_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = get_uniVfs(this.local$url).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.loadSound_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  HtmlSimpleSound.prototype.loadSound_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HtmlSimpleSound_init$lambda$lambda(closure$source, closure$unlock, this$HtmlSimpleSound) {
    return function () {
      closure$source.disconnect(0);
      document.removeEventListener('keydown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchstart', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchend', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('mousedown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      this$HtmlSimpleSound.unlocked = true;
      this$HtmlSimpleSound.unlockDeferred_0.complete_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound_init$lambda(this$HtmlSimpleSound, closure$_scratchBuffer, closure$unlock) {
    return function (it) {
      if (this$HtmlSimpleSound.ctx != null) {
        var source = this$HtmlSimpleSound.ctx.createBufferSource();
        source.buffer = closure$_scratchBuffer;
        source.connect(this$HtmlSimpleSound.ctx.destination);
        source.start(0.0);
        if (typeof this$HtmlSimpleSound.ctx.resume === 'function')
          this$HtmlSimpleSound.ctx.resume();
        source.onended = HtmlSimpleSound_init$lambda$lambda(source, closure$unlock, this$HtmlSimpleSound);
      }
      return Unit;
    };
  }
  HtmlSimpleSound.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlSimpleSound',
    interfaces: []
  };
  var HtmlSimpleSound_instance = null;
  function HtmlSimpleSound_getInstance() {
    if (HtmlSimpleSound_instance === null) {
      new HtmlSimpleSound();
    }
    return HtmlSimpleSound_instance;
  }
  function nativeSoundProvider$lambda() {
    return new HtmlNativeSoundProvider();
  }
  var nativeSoundProvider;
  function get_nativeSoundProvider() {
    return nativeSoundProvider.value;
  }
  function JsPlatformAudioOutput(freq) {
    JsPlatformAudioOutput$Companion_getInstance();
    PlatformAudioOutput.call(this, freq);
    this.freq = freq;
    var tmp$;
    this.id = (tmp$ = JsPlatformAudioOutput$Companion_getInstance().lastId, JsPlatformAudioOutput$Companion_getInstance().lastId = tmp$ + 1 | 0, tmp$);
    get_nativeSoundProvider().initOnce();
    this.missingDataCount = 0;
    this.nodeRunning = false;
    this.node = null;
    this.nchannels_0 = 2;
    var array = Array_0(this.nchannels_0);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = new FloatArrayDeque();
    }
    this.deques_0 = array;
    this.startPromise_0 = null;
    this.totalShorts = 0;
  }
  function JsPlatformAudioOutput$Companion() {
    JsPlatformAudioOutput$Companion_instance = this;
    this.lastId = 0;
  }
  JsPlatformAudioOutput$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsPlatformAudioOutput$Companion_instance = null;
  function JsPlatformAudioOutput$Companion_getInstance() {
    if (JsPlatformAudioOutput$Companion_instance === null) {
      new JsPlatformAudioOutput$Companion();
    }
    return JsPlatformAudioOutput$Companion_instance;
  }
  JsPlatformAudioOutput.prototype.process_0 = function (e) {
    var tmp$;
    var array = Array_0(e.outputBuffer.numberOfChannels);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = e.outputBuffer.getChannelData(i);
    }
    var outChannels = array;
    var hasData = true;
    if (!document.hidden) {
      tmp$ = this.nchannels_0;
      for (var channel = 0; channel < tmp$; channel++) {
        var deque = this.deques_0[channel];
        var outChannel = outChannels[channel];
        var read = deque.read_kgymra$(outChannel);
        if (read < outChannel.length)
          hasData = false;
      }
    }
    if (!hasData) {
      this.missingDataCount = this.missingDataCount + 1 | 0;
    }
    if (this.missingDataCount >= 500) {
      this.stop();
    }
  };
  JsPlatformAudioOutput.prototype.ensureInit_0 = function () {
    return this.node;
  };
  function JsPlatformAudioOutput$start$lambda$lambda(this$JsPlatformAudioOutput) {
    return function (it) {
      this$JsPlatformAudioOutput.process_0(it);
      return Unit;
    };
  }
  function JsPlatformAudioOutput$start$lambda(this$JsPlatformAudioOutput) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      this$JsPlatformAudioOutput.node = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.createScriptProcessor(1024, 2, 2) : null;
      (tmp$_0 = this$JsPlatformAudioOutput.node) != null ? (tmp$_0.onaudioprocess = JsPlatformAudioOutput$start$lambda$lambda(this$JsPlatformAudioOutput)) : null;
      if (HtmlSimpleSound_getInstance().ctx != null)
        (tmp$_1 = this$JsPlatformAudioOutput.node) != null ? tmp$_1.connect(HtmlSimpleSound_getInstance().ctx.destination) : null;
      return Unit;
    };
  }
  JsPlatformAudioOutput.prototype.start = function () {
    if (this.nodeRunning)
      return;
    this.startPromise_0 = HtmlSimpleSound_getInstance().callOnUnlocked_x41j5s$(JsPlatformAudioOutput$start$lambda(this));
    this.missingDataCount = 0;
    this.nodeRunning = true;
  };
  JsPlatformAudioOutput.prototype.stop = function () {
    var tmp$, tmp$_0;
    if (!this.nodeRunning)
      return;
    (tmp$ = this.startPromise_0) != null ? (tmp$.cancel_tcv7n7$(), Unit) : null;
    (tmp$_0 = this.node) != null ? (tmp$_0.disconnect(), Unit) : null;
    this.nodeRunning = false;
  };
  JsPlatformAudioOutput.prototype.ensureRunning = function () {
    this.ensureInit_0();
    if (!this.nodeRunning) {
      this.start();
    }
  };
  Object.defineProperty(JsPlatformAudioOutput.prototype, 'availableSamples', {
    get: function () {
      return this.totalShorts;
    }
  });
  function Coroutine$add_trriok$$default($this, samples_0, offset_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$samples = samples_0;
    this.local$offset = offset_0;
    this.local$size = size_0;
  }
  Coroutine$add_trriok$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_trriok$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_trriok$$default.prototype.constructor = Coroutine$add_trriok$$default;
  Coroutine$add_trriok$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.$this.totalShorts = this.$this.totalShorts + this.local$size | 0;
            if (!HtmlSimpleSound_getInstance().available) {
              var sampleCount = this.local$size / 2 | 0;
              var timeSeconds = sampleCount / 41000.0;
              this.state_0 = 5;
              this.result_0 = delay_0(this.context, TimeSpan.Companion.fromSeconds_14dthe$(numberToDouble(timeSeconds)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.$this.ensureRunning();
              tmp$ = this.$this.nchannels_0;
              for (var channel = 0; channel < tmp$; channel++) {
                var sample = this.local$samples.get_za3lpa$(channel);
                var deque = this.$this.deques_0[channel];
                for (var n = 0; n < this.local$size; n++) {
                  write(deque, SampleConvert_getInstance().shortToFloat_mq22fl$(sample[this.local$offset + n | 0]));
                }
              }
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.deques_0[0].availableRead <= (this.local$samples.totalSamples * 4 | 0)) {
              this.state_0 = 4;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = delay_0(this.context, TimeSpan.Companion.fromMilliseconds_14dthe$(numberToDouble(4)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
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
  JsPlatformAudioOutput.prototype.add_trriok$$default = function (samples_0, offset_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$add_trriok$$default(this, samples_0, offset_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsPlatformAudioOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPlatformAudioOutput',
    interfaces: [PlatformAudioOutput]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korau = package$soywiz.korau || (package$soywiz.korau = {});
  Object.defineProperty(package$korau, 'Korau', {
    get: Korau_getInstance
  });
  $$importsForInline$$.klock = $module$klock;
  AudioFormat.Info = AudioFormat$Info;
  $$importsForInline$$.korio = $module$korio;
  var package$format = package$korau.format || (package$korau.format = {});
  package$format.AudioFormat = AudioFormat;
  package$format.InvalidAudioFormatException = InvalidAudioFormatException;
  package$format.invalidAudioFormat_61zpoe$ = invalidAudioFormat;
  Object.defineProperty(package$format, 'defaultAudioFormats', {
    get: function () {
      return defaultAudioFormats;
    }
  });
  package$format.AudioFormats = AudioFormats;
  package$format.readSoundInfo_m9jcvn$ = readSoundInfo;
  package$format.registerStandard_llp23w$ = registerStandard;
  Object.defineProperty(MP3, 'Companion', {
    get: MP3$Companion_getInstance
  });
  package$format.MP3 = MP3;
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'JOINT_STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'DUAL_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'SINGLE_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'Companion', {
    get: MP3Base$Parser$Companion$ChannelMode$Companion_getInstance
  });
  MP3Base$Parser$Companion.prototype.ChannelMode = MP3Base$Parser$Companion$ChannelMode;
  MP3Base$Parser$Companion.prototype.Mp3Info = MP3Base$Parser$Companion$Mp3Info;
  Object.defineProperty(MP3Base$Parser, 'Companion', {
    get: MP3Base$Parser$Companion_getInstance
  });
  MP3Base.Parser = MP3Base$Parser;
  package$format.MP3Base = MP3Base;
  Object.defineProperty(OGG, 'Companion', {
    get: OGG$Companion_getInstance
  });
  package$format.OGG = OGG;
  Object.defineProperty(OggBase, 'PacketTypes', {
    get: OggBase$PacketTypes_getInstance
  });
  package$format.OggBase = OggBase;
  Object.defineProperty(WAV, 'Companion', {
    get: WAV$Companion_getInstance
  });
  WAV.Chunk = WAV$Chunk;
  WAV.ProcessedChunk = WAV$ProcessedChunk;
  $$importsForInline$$.korau = _;
  WAV.Fmt = WAV$Fmt;
  package$format.WAV = WAV;
  package$format.toWav_gs0hc$ = toWav;
  var package$internal = package$korau.internal || (package$korau.internal = {});
  package$internal.write_n2t6zc$ = write;
  Object.defineProperty(package$internal, 'KORAU_VERSION_8be2vx$', {
    get: function () {
      return KORAU_VERSION;
    }
  });
  package$internal.get_niceStr_1zw1ma$ = get_niceStr;
  Object.defineProperty(package$internal, 'SampleConvert', {
    get: SampleConvert_getInstance
  });
  $$importsForInline$$.kmem = $module$kmem;
  package$internal.combine_ydpzj9$ = combine;
  package$internal.copyChunkTo_heux3r$ = copyChunkTo;
  package$internal.toByteArrayLE_dez40u$ = toByteArrayLE;
  package$internal.toShortArrayLE_jln3ri$ = toShortArrayLE;
  package$internal.arraycopyStep_ft9mzz$ = arraycopyStep;
  package$internal.arraycopyStep_b5ow4v$ = arraycopyStep_0;
  Object.defineProperty(AudioData, 'Companion', {
    get: AudioData$Companion_getInstance
  });
  var package$sound = package$korau.sound || (package$korau.sound = {});
  package$sound.AudioData = AudioData;
  Object.defineProperty(AudioConversionQuality, 'FAST', {
    get: AudioConversionQuality$FAST_getInstance
  });
  package$sound.AudioConversionQuality = AudioConversionQuality;
  package$sound.withRate_fii12q$ = withRate;
  package$sound.toStream_gs0hc$ = toStream;
  package$sound.toNativeSound_gs0hc$ = toNativeSound;
  package$sound.playAndWait_gs0hc$ = playAndWait;
  package$sound.readAudioData_m9jcvn$ = readAudioData;
  package$sound.IAudioSamples = IAudioSamples;
  package$sound.AudioSamples = AudioSamples;
  package$sound.AudioSamplesInterleaved = AudioSamplesInterleaved;
  package$sound.copyOfRange_bca8f$ = copyOfRange;
  package$sound.interleaved_ym3bex$ = interleaved;
  package$sound.separated_ywklkw$ = separated;
  package$sound.AudioSamplesDeque = AudioSamplesDeque;
  Object.defineProperty(AudioStream, 'Companion', {
    get: AudioStream$Companion_getInstance
  });
  package$sound.AudioStream = AudioStream;
  package$sound.toData_ev1oyk$ = toData;
  package$sound.playAndWait_sameis$ = playAndWait_0;
  package$sound.readAudioStream_m9jcvn$ = readAudioStream;
  package$sound.writeAudio_qdx2ve$ = writeAudio;
  Object.defineProperty(package$sound, 'AudioTone', {
    get: AudioTone_getInstance
  });
  package$sound.NativeSoundProvider = NativeSoundProvider;
  package$sound.DummyNativeSoundProvider = DummyNativeSoundProvider;
  package$sound.DummyNativeSoundChannel = DummyNativeSoundChannel;
  package$sound.NativeSoundChannel = NativeSoundChannel;
  package$sound.await_6ares6$ = await_0;
  package$sound.NativeSound = NativeSound;
  package$sound.toData_kbpa60$ = toData_0;
  package$sound.toStream_kbpa60$ = toStream_0;
  package$sound.playAndWait_ioct6n$ = playAndWait_1;
  package$sound.readNativeSound_thwgyb$ = readNativeSound;
  package$sound.readNativeSoundOptimized_thwgyb$ = readNativeSoundOptimized;
  package$sound.PlatformAudioOutput = PlatformAudioOutput;
  Object.defineProperty(package$sound, 'SoundUtils', {
    get: SoundUtils_getInstance
  });
  package$sound.HtmlNativeSoundProvider = HtmlNativeSoundProvider;
  package$sound.AudioBufferNativeSound = AudioBufferNativeSound;
  package$sound.MediaElementAudioSourceNodeWithAudioElement = MediaElementAudioSourceNodeWithAudioElement;
  HtmlSimpleSound.prototype.SimpleSoundChannel = HtmlSimpleSound$SimpleSoundChannel;
  Object.defineProperty(package$sound, 'HtmlSimpleSound', {
    get: HtmlSimpleSound_getInstance
  });
  Object.defineProperty(package$sound, 'nativeSoundProvider', {
    get: get_nativeSoundProvider
  });
  Object.defineProperty(JsPlatformAudioOutput, 'Companion', {
    get: JsPlatformAudioOutput$Companion_getInstance
  });
  package$sound.JsPlatformAudioOutput = JsPlatformAudioOutput;
  Object.defineProperty(AudioSamples.prototype, 'size', Object.getOwnPropertyDescriptor(IAudioSamples.prototype, 'size'));
  AudioSamples.prototype.isEmpty = IAudioSamples.prototype.isEmpty;
  AudioSamples.prototype.isNotEmpty = IAudioSamples.prototype.isNotEmpty;
  AudioSamples.prototype.getFloat_vux9f0$ = IAudioSamples.prototype.getFloat_vux9f0$;
  AudioSamples.prototype.setFloat_n0b4r3$ = IAudioSamples.prototype.setFloat_n0b4r3$;
  Object.defineProperty(AudioSamplesInterleaved.prototype, 'size', Object.getOwnPropertyDescriptor(IAudioSamples.prototype, 'size'));
  AudioSamplesInterleaved.prototype.isEmpty = IAudioSamples.prototype.isEmpty;
  AudioSamplesInterleaved.prototype.isNotEmpty = IAudioSamples.prototype.isNotEmpty;
  AudioSamplesInterleaved.prototype.getFloat_vux9f0$ = IAudioSamples.prototype.getFloat_vux9f0$;
  AudioSamplesInterleaved.prototype.setFloat_n0b4r3$ = IAudioSamples.prototype.setFloat_n0b4r3$;
  var $receiver = new AudioFormats();
  registerStandard($receiver);
  defaultAudioFormats = $receiver;
  temp = new Float32Array(1);
  KORAU_VERSION = '1.6.5';
  nativeSoundProvider = lazy(nativeSoundProvider$lambda);
  Kotlin.defineModule('korau', _);
  return _;
}));

//# sourceMappingURL=korau.js.map
