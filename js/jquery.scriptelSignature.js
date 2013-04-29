(function($) {
    var methods = {
        /**
         * Return an object of arrays used to translate characters into numeric position values.
         *
         * @param bool
         * @return Object
         */
        buildLookupTable: function(capsLockOff) {
            //Object to return
            var ret = {};
            
            if (capsLockOff) {
                //Most Significant Digits - X Values (Shift On, Caps Lock Off)
                ret.msx = [];
                //      Hex     Value   Character
                ret.msx[0x29] = 0;  //  )
                ret.msx[0x21] = 1;  //  !
                ret.msx[0x40] = 2;  //  @
                ret.msx[0x23] = 3;  //  #
                ret.msx[0x24] = 4;  //  $
                ret.msx[0x25] = 5;  //  %
                ret.msx[0x5e] = 6;  //  ^
                ret.msx[0x26] = 7;  //  &
                ret.msx[0x2a] = 8;  //  *
                ret.msx[0x28] = 9;  //  (
                ret.msx[0x41] = 10; //  A
                ret.msx[0x42] = 11; //  B
                ret.msx[0x43] = 12; //  C
                ret.msx[0x44] = 13; //  D
                ret.msx[0x45] = 14; //  E
                ret.msx[0x46] = 15; //  F
                ret.msx[0x47] = 16; //  G
                ret.msx[0x48] = 17; //  H
                ret.msx[0x49] = 18; //  I
                ret.msx[0x4a] = 19; //  J
                ret.msx[0x4b] = 20; //  K
                ret.msx[0x4c] = 21; //  L
                
                //Least Significant Digits - X Values (Shift On, Caps Lock Off)
                ret.lsx = [];
                //      Hex     Value   Character
                ret.lsx[0x4d] = 0;  //  M
                ret.lsx[0x4e] = 1;  //  N
                ret.lsx[0x4f] = 2;  //  O
                ret.lsx[0x50] = 3;  //  P
                ret.lsx[0x51] = 4;  //  Q
                ret.lsx[0x52] = 5;  //  R
                ret.lsx[0x53] = 6;  //  S
                ret.lsx[0x54] = 7;  //  T
                ret.lsx[0x55] = 8;  //  U
                ret.lsx[0x56] = 9;  //  V
                ret.lsx[0x57] = 10; //  W
                ret.lsx[0x58] = 11; //  X
                ret.lsx[0x59] = 12; //  Y
                ret.lsx[0x5a] = 13; //  Z
                ret.lsx[0x22] = 14; //  “
                ret.lsx[0x3c] = 15; //  <
                ret.lsx[0x5f] = 16; //  _
                ret.lsx[0x3e] = 17; //  >
                ret.lsx[0x3f] = 18; //  ?
                ret.lsx[0x3a] = 19; //  :
                ret.lsx[0x2b] = 20; //  +
                ret.lsx[0x7b] = 21; //  {
                ret.lsx[0x7c] = 22; //  |
                
                //Most Significant Digits - Y Values (Shift Off, Caps Lock Off)
                ret.msy = [];
                //      Hex     Value   Character
                ret.msy[0x30] = 0;  //  0
                ret.msy[0x31] = 1;  //  1
                ret.msy[0x32] = 2;  //  2
                ret.msy[0x33] = 3;  //  3
                ret.msy[0x34] = 4;  //  4
                ret.msy[0x35] = 5;  //  5
                ret.msy[0x36] = 6;  //  6
                ret.msy[0x37] = 7;  //  7
                ret.msy[0x38] = 8;  //  8
                ret.msy[0x39] = 9;  //  9
                ret.msy[0x61] = 10; //  a
                ret.msy[0x62] = 11; //  b
                ret.msy[0x63] = 12; //  c
                ret.msy[0x64] = 13; //  d
                ret.msy[0x65] = 14; //  e
                ret.msy[0x66] = 15; //  f
                ret.msy[0x67] = 16; //  g
                ret.msy[0x68] = 17; //  h
                ret.msy[0x69] = 18; //  i
                ret.msy[0x6a] = 19; //  j
                ret.msy[0x6b] = 20; //  k
                ret.msy[0x6c] = 21; //  l
                
                //Least Significant Digits - Y Values (Shift Off, Caps Lock Off)
                ret.lsy = [];
                //      Hex     Value   Character
                ret.lsy[0x6d] = 0;  //  m
                ret.lsy[0x6e] = 1;  //  n
                ret.lsy[0x6f] = 2;  //  o
                ret.lsy[0x70] = 3;  //  p
                ret.lsy[0x71] = 4;  //  q
                ret.lsy[0x72] = 5;  //  r
                ret.lsy[0x73] = 6;  //  s
                ret.lsy[0x74] = 7;  //  t
                ret.lsy[0x75] = 8;  //  u
                ret.lsy[0x76] = 9;  //  v
                ret.lsy[0x77] = 10; //  w
                ret.lsy[0x78] = 11; //  x
                ret.lsy[0x79] = 12; //  y
                ret.lsy[0x7a] = 13; //  z
                ret.lsy[0x27] = 14; //  ‘
                ret.lsy[0x2c] = 15; //  ,
                ret.lsy[0x2d] = 16; //  -
                ret.lsy[0x2e] = 17; //  .
                ret.lsy[0x2f] = 18; //  /
                ret.lsy[0x3b] = 19; //  ;
                ret.lsy[0x3d] = 20; //  =
                ret.lsy[0x5b] = 21; //  [
                ret.lsy[0x5c] = 22; //  \   (Text Here To Stop '\' From Escaping Newline)
            } else {
                //Most Significant Digits - X Values (Shift On, Caps Lock On)
                ret.msx = [];
                //      Hex     Value   Character
                ret.msx[0x29] = 0;  //  )
                ret.msx[0x21] = 1;  //  !
                ret.msx[0x40] = 2;  //  @
                ret.msx[0x23] = 3;  //  #
                ret.msx[0x24] = 4;  //  $
                ret.msx[0x25] = 5;  //  %
                ret.msx[0x5e] = 6;  //  ^
                ret.msx[0x26] = 7;  //  &
                ret.msx[0x2a] = 8;  //  *
                ret.msx[0x28] = 9;  //  (
                ret.msx[0x61] = 10; //  a
                ret.msx[0x62] = 11; //  b
                ret.msx[0x63] = 12; //  c
                ret.msx[0x64] = 13; //  d
                ret.msx[0x65] = 14; //  e
                ret.msx[0x66] = 15; //  f
                ret.msx[0x67] = 16; //  g
                ret.msx[0x68] = 17; //  h
                ret.msx[0x69] = 18; //  i
                ret.msx[0x6a] = 19; //  j
                ret.msx[0x6b] = 20; //  k
                ret.msx[0x6c] = 21; //  l
                
                //Least Significant Digits - X Values (Shift On, Caps Lock On)
                ret.lsx = [];
                //      Hex     Value   Character
                ret.lsx[0x6d] = 0;  //  m
                ret.lsx[0x6e] = 1;  //  n
                ret.lsx[0x6f] = 2;  //  o
                ret.lsx[0x70] = 3;  //  p
                ret.lsx[0x71] = 4;  //  q
                ret.lsx[0x72] = 5;  //  r
                ret.lsx[0x73] = 6;  //  s
                ret.lsx[0x74] = 7;  //  t
                ret.lsx[0x75] = 8;  //  u
                ret.lsx[0x76] = 9;  //  v
                ret.lsx[0x77] = 10; //  w
                ret.lsx[0x78] = 11; //  x
                ret.lsx[0x79] = 12; //  y
                ret.lsx[0x7a] = 13; //  z
                ret.lsx[0x22] = 14; //  “
                ret.lsx[0x3c] = 15; //  <
                ret.lsx[0x5f] = 16; //  _
                ret.lsx[0x3e] = 17; //  >
                ret.lsx[0x3f] = 18; //  ?
                ret.lsx[0x3a] = 19; //  :
                ret.lsx[0x2b] = 20; //  +
                ret.lsx[0x7b] = 21; //  {
                ret.lsx[0x7c] = 22; //  |
                
                //Most Significant Digits - Y Values (Shift Off, Caps Lock On)
                ret.msy = [];
                //      Hex     Value   Character
                ret.msy[0x30] = 0;  //  0
                ret.msy[0x31] = 1;  //  1
                ret.msy[0x32] = 2;  //  2
                ret.msy[0x33] = 3;  //  3
                ret.msy[0x34] = 4;  //  4
                ret.msy[0x35] = 5;  //  5
                ret.msy[0x36] = 6;  //  6
                ret.msy[0x37] = 7;  //  7
                ret.msy[0x38] = 8;  //  8
                ret.msy[0x39] = 9;  //  9
                ret.msy[0x41] = 10; //  A
                ret.msy[0x42] = 11; //  B
                ret.msy[0x43] = 12; //  C
                ret.msy[0x44] = 13; //  D
                ret.msy[0x45] = 14; //  E
                ret.msy[0x46] = 15; //  F
                ret.msy[0x47] = 16; //  G
                ret.msy[0x48] = 17; //  H
                ret.msy[0x49] = 18; //  I
                ret.msy[0x4a] = 19; //  J
                ret.msy[0x4b] = 20; //  K
                ret.msy[0x4c] = 21; //  L
                
                //Least Significant Digits - Y Values (Shift Off, Caps Lock On)
                ret.lsy = [];
                //      Hex     Value   Character
                ret.lsy[0x4d] = 0;  //  M
                ret.lsy[0x4e] = 1;  //  N
                ret.lsy[0x4f] = 2;  //  O
                ret.lsy[0x50] = 3;  //  P
                ret.lsy[0x51] = 4;  //  Q
                ret.lsy[0x52] = 5;  //  R
                ret.lsy[0x53] = 6;  //  S
                ret.lsy[0x54] = 7;  //  T
                ret.lsy[0x55] = 8;  //  U
                ret.lsy[0x56] = 9;  //  V
                ret.lsy[0x57] = 10; //  W
                ret.lsy[0x58] = 11; //  X
                ret.lsy[0x59] = 12; //  Y
                ret.lsy[0x5a] = 13; //  Z
                ret.lsy[0x27] = 14; //  ‘
                ret.lsy[0x2c] = 15; //  ,
                ret.lsy[0x2d] = 16; //  -
                ret.lsy[0x2e] = 17; //  .
                ret.lsy[0x2f] = 18; //  /
                ret.lsy[0x3b] = 19; //  ;
                ret.lsy[0x3d] = 20; //  =
                ret.lsy[0x5b] = 21; //  [
                ret.lsy[0x5c] = 22; //  \   (Text Here To Stop '\' From Escaping Newline)
            }
            
            //Return the object for the value mapping
            return ret;
        },
        /**
         * If parsed successfully, return an array of point objects used to map the pen's path during the signature
         * The array is ordered such that a line is drawn between the first point and each successive point.
         * Whenever an empty object is encountered in the sequence it indicates the pen was lifted and
         * that the next point should be the start of a new line segment and a line should not connect the
         * perviosu and next points.
         *
         * @param string
         * @return Array | false
         */
        convertSignatureStringToArray: function(inputString) {
            var returnArr = [],
                decoder,
                nthSubstrPos = function(haystack, needle, n) {
                    var times = 0,
                        index = null;
                    while (times < n && index !== -1) {
                        index = haystack.indexOf(needle, index+1);
                        times++;
                    }
                    return index;
                }
                signatureStartPos = nthSubstrPos(inputString, ' ', 4) + 1,
                pattern = /^\}(?:SCRIPTEL\ (?:[^\ ]+\ ){3}(?:(?:[\x40-\x4c\x23-\x26\x28-\x2a\x21\x5e][\x4d-\x5a\x22\x3c\x5f\x3a\x3e\x3f\x2b\x7b\x7c]|[\x4d-\x5a\x22\x3c\x5f\x3a\x3e\x3f\x2b\x7b\x7c][\x40-\x4c\x23-\x26\x28-\x2a\x21\x5e])(?:[\x30-\x39\x61-\x6c][\x6d-\x7a\x27\x2c-\x2f\x3b\x3d\x5b\x5c]|[\x6d-\x7a\x27\x2c-\x2f\x3b\x3d\x5b\x5c][\x30-\x39\x61-\x6c])|\x20)*)|(?:scriptel\ (?:[^\ ]+\ ){3}(?:(?:[\x21\x23-\x26\x28-\x2a\x40\x5e\x61-\x6c][\x22\x2b\x3a\x3c\x3e\x3f\x6d-\x7a\x5f\x7b\x7c]|[\x22\x2b\x3a\x3c\x3e\x3f\x6d-\x7a\x5f\x7b\x7c][\x21\x23-\x26\x28-\x2a\x40\x5e\x61-\x6c])(?:[\x30-x39\x41-\x4c][\x4d-\x5a\x27\x2c-\x2f\x3b\x3d\x5b\x5c]|[\x4d-\x5a\x27\x2c-\x2f\x3b\x3d\x5b\x5c][\x30-x39\x41-\x4c])|\x20)*)\]$/;
                //Caps Lock Off Only
                //pattern = /^\}(?:SCRIPTEL|scriptel)\ (?:[^\ ]+\ ){3}(?:(?:[\x40-\x4c\x23-\x26\x28-\x2a\x21\x5e][\x4d-\x5a\x22\x3c\x5f\x3a\x3e\x3f\x2b\x7b\x7c]|[\x4d-\x5a\x22\x3c\x5f\x3a\x3e\x3f\x2b\x7b\x7c][\x40-\x4c\x23-\x26\x28-\x2a\x21\x5e])(?:[\x30-\x39\x61-\x6c][\x6d-\x7a\x27\x2c-\x2f\x3b\x3d\x5b\x5c]|[\x6d-\x7a\x27\x2c-\x2f\x3b\x3d\x5b\x5c][\x30-\x39\x61-\x6c])|\x20)*\]$/;
            
            if (pattern.test(inputString)) {
                console.log("Complete signature data match.");
            } else {
                console.log("NO MATCH: Do not expect good results.");
                return false;
            }
            
            if (/^\}SCRIPTEL/.test(inputString.substring(0, 9))) {
                decoder = $(this).scriptelSignature('buildLookupTable', true);
                console.log("beginning verified: proceeding to decode");
            } else if (/^\}scriptel/.test(inputString.substring(0, 9))) {
                console.log("beginning verified with caps lock: proceeding to decode");
                decoder = $(this).scriptelSignature('buildLookupTable', false);
            } else {
                return false;
            }
            
            for (var i = signatureStartPos; i+4 < inputString.length-1; i += 4) {
                var msx = 0,
                    lsx = 0,
                    msy = 0,
                    lsy = 0;
                
                while(inputString.charAt(i) == " ") {
                    returnArr.push({});
                    i++;
                }
                
                while ((typeof decoder.msx[inputString.charCodeAt(i)] === 'undefined') && (typeof decoder.lsx[inputString.charCodeAt(i)] === 'undefined') && i < inputString.length-1) {
                    console.log("missing lsx or msx at " + i + ", value: " + inputString.charCodeAt(i) + ", char: " + inputString.charAt(i));
                    if(inputString.charAt(i) == " ") {
                        returnArr.push({});
                    }
                    i++;
                }
                
                if (i+3 > inputString.length-1) {
                    continue;
                }
                
                if ((typeof decoder.msx[inputString.charCodeAt(i)] !== 'undefined') && (typeof decoder.lsx[inputString.charCodeAt(i+1)] !== 'undefined')) {
                    msx = decoder.msx[inputString.charCodeAt(i)];
                    lsx = decoder.lsx[inputString.charCodeAt(i+1)];
                } else if ((typeof decoder.msx[inputString.charCodeAt(i+1)] !== 'undefined') && (typeof decoder.lsx[inputString.charCodeAt(i)] !== 'undefined')) {
                    msx = decoder.msx[inputString.charCodeAt(i+1)];
                    lsx = decoder.lsx[inputString.charCodeAt(i)];
                } else {
                    console.log("unexpected error #1 at " + i + " ("+inputString.charCodeAt(i)+" = "+inputString[i]+", "+inputString.charCodeAt(i+1)+" = "+inputString[i+1]+")");
                }
                
                if ((typeof decoder.msy[inputString.charCodeAt(i+2)] === 'undefined') && (typeof decoder.lsy[inputString.charCodeAt(i+2)] === 'undefined')) {
                    console.log("missing lsy or msy at " + (i+2) + ", value: " + inputString.charCodeAt(i+2) + ", char: " + inputString.charAt(i+2));
                    continue;
                }
                
                if ((typeof decoder.msy[inputString.charCodeAt(i+2)] !== 'undefined') && (typeof decoder.lsy[inputString.charCodeAt(i+3)] !== 'undefined')) {
                    msy = decoder.msy[inputString.charCodeAt(i+2)];
                    lsy = decoder.lsy[inputString.charCodeAt(i+3)];
                } else if ((typeof decoder.msy[inputString.charCodeAt(i+3)] !== 'undefined') && (typeof decoder.lsy[inputString.charCodeAt(i+2)] !== 'undefined')) {
                    msy = decoder.msy[inputString.charCodeAt(i+3)];
                    lsy = decoder.lsy[inputString.charCodeAt(i+2)];
                } else {
                    console.log("unexpected error #2 at " + i);
                }
                
                returnArr.push({
                    x: (msx*23+lsx)+1,  //1 - 500
                    y: (msy*23+lsy)+1   //1 - 500
                });
            }

            if (inputString.charAt(inputString.length-1) != ']') {
                console.log("ending NOT verified");
            } else {
                console.log("ending verified: finishing");
            }
            return returnArr;
        },
        init: function(options) {
            return this.each(function() {
                var data = $(this).data('scriptelSignature');
                if (!data) {
                    $(this).data('scriptelSignature', {
                        canvas: undefined,
                        ctx: undefined,
                        stroking: false,
                        enabled: true,
                        lastX: 0,
                        plastY: 0,
                        stroke: [],
                        width: 0,
                        height: 0
                    });
                    data = $(this).data('scriptelSignature');
                    data.width = $(this).width();
                    data.height = $(this).height();
                    var canvas,
                        canvasid;
                    if ($(this).is('canvas')) {
                        canvas = $(this);
                        if (!$(canvas).attr('id')) {
                            $(canvas).attr('id', 'signature-'+(new Date()).getTime()+'-canvas')
                        }
                        canvasid = $(canvas).attr('id');
                    } else if ($(this).children('canvas').length > 0) {
                        canvas = $(this).children('canvas').get(0);
                        if (!$(canvas).attr('id')) {
                            $(canvas).attr('id', $(this).attr('id')+'-canvas')
                        }
                        canvasid = $(canvas).attr('id');
                    } else {
                        canvas = document.createElement('canvas');
                        canvasid = $(this).attr('id')+'-canvas';
                    }
                    
                    $(canvas).attr('width', data.width).attr('height', data.height).attr('id', canvasid);
                    if (!$(this).is('canvas')) {
                        $(canvas).attr('cursor', 'pointer').attr('style', 'position:absolute; top:0; left:0;');
                    }
                    
                    if (typeof G_vmlCanvasManager != 'undefined') {
                        canvas = G_vmlCanvasManager.initElement(canvas);
                    }
                    
                    data.canvas = $(canvas).get(0);
                    if (!$(this).is('canvas')) {
                        $(this).prepend(data.canvas);
                    }
                    
                    data.ctx = data.canvas.getContext("2d");
                }
                $(this).scriptelSignature('clear');
            });
        },
        clear: function() {
            return this.each(function() {
                var data = $(this).data('scriptelSignature');
                data.stroke = [];
                data.ctx.save();
                data.ctx.scale(1.0, 1.0);
                data.ctx.clearRect(0, 0, data.canvas.width, data.canvas.height);
                data.ctx.beginPath();
                data.ctx.stroke();
                data.ctx.restore();
            });
        },
        draw: function(pointArray) {
            return this.each(function() {
                var data = $(this).data('scriptelSignature'),
                    scaleX = data.canvas.width / 500,
                    scaleY = data.canvas.height / 500,
                    drawing = false;
                data.stroke = $.isArray(pointArray) ? pointArray : [];
                data.ctx.save();
                data.ctx.beginPath();
                data.ctx.lineCap = "round";
                data.ctx.lineJoin = "round";
                data.ctx.lineWidth = 2;
                data.ctx.strokeStyle = "rgba(100,0,50,1)";
                for (var i=0, len=data.stroke.length; i<len; ++i) {
                    var item = data.stroke[i];
                    if (item.x) {
                        if (drawing) {
                            data.ctx.lineTo(item.x * scaleX, item.y * scaleY);
                        } else {
                            data.ctx.moveTo(item.x * scaleX, item.y * scaleY);
                            data.ctx.lineTo(item.x * scaleX, item.y * scaleY);
                            drawing = true;
                        }
                    } else {
                        drawing = false;
                    }
                }
                data.ctx.stroke();
                data.ctx.restore();
            });
        },
        show: function(pointArray) {
            return this.each(function() {
                $(this).scriptelSignature('clear');
                $(this).scriptelSignature('draw', pointArray);
            });
        },
        process: function(inputString) {
            return this.each(function() {
                $(this).scriptelSignature('show', $(this).scriptelSignature('convertSignatureStringToArray', inputString));
            });
        },
        destroy: function() {
            return this.each(function() {
                var data = $(this).data('scriptelSignature');
                $(window).unbind('.scriptelSignature');
                data.ctx.remove();
                data.stroke.remove();
                data.canvas.remove();
                $(this).removeData('scriptelSignature');
            });
        }
    };
    
    $.fn.scriptelSignature = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ( typeof method === 'object' || !method ) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method '+method+' does not exist for plugin');
        }
    };
})(jQuery);