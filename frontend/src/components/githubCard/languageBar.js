Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var ABAP = {
	color: "#E8274B",
	url: "https://github.com/trending?l=ABAP"
};
var ActionScript = {
	color: "#882B0F",
	url: "https://github.com/trending?l=ActionScript"
};
var Ada = {
	color: "#02f88c",
	url: "https://github.com/trending?l=Ada"
};
var Agda = {
	color: "#315665",
	url: "https://github.com/trending?l=Agda"
};
var AL = {
	color: "#3AA2B5",
	url: "https://github.com/trending?l=AL"
};
var Alloy = {
	color: "#64C800",
	url: "https://github.com/trending?l=Alloy"
};
var AMPL = {
	color: "#E6EFBB",
	url: "https://github.com/trending?l=AMPL"
};
var AngelScript = {
	color: "#C7D7DC",
	url: "https://github.com/trending?l=AngelScript"
};
var ANTLR = {
	color: "#9DC3FF",
	url: "https://github.com/trending?l=ANTLR"
};
var Apex = {
	color: "#1797c0",
	url: "https://github.com/trending?l=Apex"
};
var APL = {
	color: "#5A8164",
	url: "https://github.com/trending?l=APL"
};
var AppleScript = {
	color: "#101F1F",
	url: "https://github.com/trending?l=AppleScript"
};
var Arc = {
	color: "#aa2afe",
	url: "https://github.com/trending?l=Arc"
};
var ASL = {
	color: null,
	url: "https://github.com/trending?l=ASL"
};
var AspectJ = {
	color: "#a957b0",
	url: "https://github.com/trending?l=AspectJ"
};
var Assembly = {
	color: "#6E4C13",
	url: "https://github.com/trending?l=Assembly"
};
var Asymptote = {
	color: "#ff0000",
	url: "https://github.com/trending?l=Asymptote"
};
var ATS = {
	color: "#1ac620",
	url: "https://github.com/trending?l=ATS"
};
var Augeas = {
	color: null,
	url: "https://github.com/trending?l=Augeas"
};
var AutoHotkey = {
	color: "#6594b9",
	url: "https://github.com/trending?l=AutoHotkey"
};
var AutoIt = {
	color: "#1C3552",
	url: "https://github.com/trending?l=AutoIt"
};
var Awk = {
	color: null,
	url: "https://github.com/trending?l=Awk"
};
var Ballerina = {
	color: "#FF5000",
	url: "https://github.com/trending?l=Ballerina"
};
var Batchfile = {
	color: "#C1F12E",
	url: "https://github.com/trending?l=Batchfile"
};
var Beef = {
	color: "#a52f4e",
	url: "https://github.com/trending?l=Beef"
};
var Befunge = {
	color: null,
	url: "https://github.com/trending?l=Befunge"
};
var Bison = {
	color: "#6A463F",
	url: "https://github.com/trending?l=Bison"
};
var BitBake = {
	color: null,
	url: "https://github.com/trending?l=BitBake"
};
var Blade = {
	color: "#f7523f",
	url: "https://github.com/trending?l=Blade"
};
var BlitzBasic = {
	color: null,
	url: "https://github.com/trending?l=BlitzBasic"
};
var BlitzMax = {
	color: "#cd6400",
	url: "https://github.com/trending?l=BlitzMax"
};
var Bluespec = {
	color: null,
	url: "https://github.com/trending?l=Bluespec"
};
var Boo = {
	color: "#d4bec1",
	url: "https://github.com/trending?l=Boo"
};
var Boogie = {
	color: "#c80fa0",
	url: "https://github.com/trending?l=Boogie"
};
var Brainfuck = {
	color: "#2F2530",
	url: "https://github.com/trending?l=Brainfuck"
};
var Brightscript = {
	color: null,
	url: "https://github.com/trending?l=Brightscript"
};
var Browserslist = {
	color: "#ffd539",
	url: "https://github.com/trending?l=Browserslist"
};
var C = {
	color: "#555555",
	url: "https://github.com/trending?l=C"
};
var CartoCSS = {
	color: null,
	url: "https://github.com/trending?l=CartoCSS"
};
var Ceylon = {
	color: "#dfa535",
	url: "https://github.com/trending?l=Ceylon"
};
var Chapel = {
	color: "#8dc63f",
	url: "https://github.com/trending?l=Chapel"
};
var Charity = {
	color: null,
	url: "https://github.com/trending?l=Charity"
};
var ChucK = {
	color: null,
	url: "https://github.com/trending?l=ChucK"
};
var Cirru = {
	color: "#ccccff",
	url: "https://github.com/trending?l=Cirru"
};
var Clarion = {
	color: "#db901e",
	url: "https://github.com/trending?l=Clarion"
};
var Clean = {
	color: "#3F85AF",
	url: "https://github.com/trending?l=Clean"
};
var Click = {
	color: "#E4E6F3",
	url: "https://github.com/trending?l=Click"
};
var CLIPS = {
	color: null,
	url: "https://github.com/trending?l=CLIPS"
};
var Clojure = {
	color: "#db5855",
	url: "https://github.com/trending?l=Clojure"
};
var CMake = {
	color: null,
	url: "https://github.com/trending?l=CMake"
};
var COBOL = {
	color: null,
	url: "https://github.com/trending?l=COBOL"
};
var CodeQL = {
	color: null,
	url: "https://github.com/trending?l=CodeQL"
};
var CoffeeScript = {
	color: "#244776",
	url: "https://github.com/trending?l=CoffeeScript"
};
var ColdFusion = {
	color: "#ed2cd6",
	url: "https://github.com/trending?l=ColdFusion"
};
var Cool = {
	color: null,
	url: "https://github.com/trending?l=Cool"
};
var Coq = {
	color: null,
	url: "https://github.com/trending?l=Coq"
};
var Crystal = {
	color: "#000100",
	url: "https://github.com/trending?l=Crystal"
};
var CSON = {
	color: "#244776",
	url: "https://github.com/trending?l=CSON"
};
var Csound = {
	color: null,
	url: "https://github.com/trending?l=Csound"
};
var CSS = {
	color: "#563d7c",
	url: "https://github.com/trending?l=CSS"
};
var Cuda = {
	color: "#3A4E3A",
	url: "https://github.com/trending?l=Cuda"
};
var CWeb = {
	color: null,
	url: "https://github.com/trending?l=CWeb"
};
var Cycript = {
	color: null,
	url: "https://github.com/trending?l=Cycript"
};
var Cython = {
	color: null,
	url: "https://github.com/trending?l=Cython"
};
var D = {
	color: "#ba595e",
	url: "https://github.com/trending?l=D"
};
var Dafny = {
	color: "#FFEC25",
	url: "https://github.com/trending?l=Dafny"
};
var Dart = {
	color: "#00B4AB",
	url: "https://github.com/trending?l=Dart"
};
var DataWeave = {
	color: "#003a52",
	url: "https://github.com/trending?l=DataWeave"
};
var Dhall = {
	color: "#dfafff",
	url: "https://github.com/trending?l=Dhall"
};
var DM = {
	color: "#447265",
	url: "https://github.com/trending?l=DM"
};
var Dockerfile = {
	color: "#384d54",
	url: "https://github.com/trending?l=Dockerfile"
};
var Dogescript = {
	color: "#cca760",
	url: "https://github.com/trending?l=Dogescript"
};
var DTrace = {
	color: null,
	url: "https://github.com/trending?l=DTrace"
};
var Dylan = {
	color: "#6c616e",
	url: "https://github.com/trending?l=Dylan"
};
var E = {
	color: "#ccce35",
	url: "https://github.com/trending?l=E"
};
var eC = {
	color: "#913960",
	url: "https://github.com/trending?l=eC"
};
var ECL = {
	color: "#8a1267",
	url: "https://github.com/trending?l=ECL"
};
var ECLiPSe = {
	color: null,
	url: "https://github.com/trending?l=ECLiPSe"
};
var Eiffel = {
	color: "#4d6977",
	url: "https://github.com/trending?l=Eiffel"
};
var EJS = {
	color: "#a91e50",
	url: "https://github.com/trending?l=EJS"
};
var Elixir = {
	color: "#6e4a7e",
	url: "https://github.com/trending?l=Elixir"
};
var Elm = {
	color: "#60B5CC",
	url: "https://github.com/trending?l=Elm"
};
var EmberScript = {
	color: "#FFF4F3",
	url: "https://github.com/trending?l=EmberScript"
};
var EQ = {
	color: "#a78649",
	url: "https://github.com/trending?l=EQ"
};
var Erlang = {
	color: "#B83998",
	url: "https://github.com/trending?l=Erlang"
};
var Factor = {
	color: "#636746",
	url: "https://github.com/trending?l=Factor"
};
var Fancy = {
	color: "#7b9db4",
	url: "https://github.com/trending?l=Fancy"
};
var Fantom = {
	color: "#14253c",
	url: "https://github.com/trending?l=Fantom"
};
var Faust = {
	color: "#c37240",
	url: "https://github.com/trending?l=Faust"
};
var Filterscript = {
	color: null,
	url: "https://github.com/trending?l=Filterscript"
};
var fish = {
	color: null,
	url: "https://github.com/trending?l=fish"
};
var FLUX = {
	color: "#88ccff",
	url: "https://github.com/trending?l=FLUX"
};
var Forth = {
	color: "#341708",
	url: "https://github.com/trending?l=Forth"
};
var Fortran = {
	color: "#4d41b1",
	url: "https://github.com/trending?l=Fortran"
};
var FreeMarker = {
	color: "#0050b2",
	url: "https://github.com/trending?l=FreeMarker"
};
var Frege = {
	color: "#00cafe",
	url: "https://github.com/trending?l=Frege"
};
var Futhark = {
	color: "#5f021f",
	url: "https://github.com/trending?l=Futhark"
};
var GAML = {
	color: "#FFC766",
	url: "https://github.com/trending?l=GAML"
};
var GAMS = {
	color: null,
	url: "https://github.com/trending?l=GAMS"
};
var GAP = {
	color: null,
	url: "https://github.com/trending?l=GAP"
};
var GDB = {
	color: null,
	url: "https://github.com/trending?l=GDB"
};
var GDScript = {
	color: "#355570",
	url: "https://github.com/trending?l=GDScript"
};
var Genie = {
	color: "#fb855d",
	url: "https://github.com/trending?l=Genie"
};
var Genshi = {
	color: null,
	url: "https://github.com/trending?l=Genshi"
};
var Gherkin = {
	color: "#5B2063",
	url: "https://github.com/trending?l=Gherkin"
};
var GLSL = {
	color: null,
	url: "https://github.com/trending?l=GLSL"
};
var Glyph = {
	color: "#c1ac7f",
	url: "https://github.com/trending?l=Glyph"
};
var Gnuplot = {
	color: "#f0a9f0",
	url: "https://github.com/trending?l=Gnuplot"
};
var Go = {
	color: "#00ADD8",
	url: "https://github.com/trending?l=Go"
};
var Golo = {
	color: "#88562A",
	url: "https://github.com/trending?l=Golo"
};
var Gosu = {
	color: "#82937f",
	url: "https://github.com/trending?l=Gosu"
};
var Grace = {
	color: null,
	url: "https://github.com/trending?l=Grace"
};
var GraphQL = {
	color: "#e10098",
	url: "https://github.com/trending?l=GraphQL"
};
var Groovy = {
	color: "#e69f56",
	url: "https://github.com/trending?l=Groovy"
};
var Hack = {
	color: "#878787",
	url: "https://github.com/trending?l=Hack"
};
var Haml = {
	color: "#ece2a9",
	url: "https://github.com/trending?l=Haml"
};
var Handlebars = {
	color: "#f7931e",
	url: "https://github.com/trending?l=Handlebars"
};
var Harbour = {
	color: "#0e60e3",
	url: "https://github.com/trending?l=Harbour"
};
var Haskell = {
	color: "#5e5086",
	url: "https://github.com/trending?l=Haskell"
};
var Haxe = {
	color: "#df7900",
	url: "https://github.com/trending?l=Haxe"
};
var HCL = {
	color: null,
	url: "https://github.com/trending?l=HCL"
};
var HiveQL = {
	color: "#dce200",
	url: "https://github.com/trending?l=HiveQL"
};
var HLSL = {
	color: null,
	url: "https://github.com/trending?l=HLSL"
};
var HolyC = {
	color: "#ffefaf",
	url: "https://github.com/trending?l=HolyC"
};
var HTML = {
	color: "#e34c26",
	url: "https://github.com/trending?l=HTML"
};
var Hy = {
	color: "#7790B2",
	url: "https://github.com/trending?l=Hy"
};
var HyPhy = {
	color: null,
	url: "https://github.com/trending?l=HyPhy"
};
var IDL = {
	color: "#a3522f",
	url: "https://github.com/trending?l=IDL"
};
var Idris = {
	color: "#b30000",
	url: "https://github.com/trending?l=Idris"
};
var Io = {
	color: "#a9188d",
	url: "https://github.com/trending?l=Io"
};
var Ioke = {
	color: "#078193",
	url: "https://github.com/trending?l=Ioke"
};
var Isabelle = {
	color: "#FEFE00",
	url: "https://github.com/trending?l=Isabelle"
};
var J = {
	color: "#9EEDFF",
	url: "https://github.com/trending?l=J"
};
var Jasmin = {
	color: null,
	url: "https://github.com/trending?l=Jasmin"
};
var Java = {
	color: "#b07219",
	url: "https://github.com/trending?l=Java"
};
var JavaScript = {
	color: "#f1e05a",
	url: "https://github.com/trending?l=JavaScript"
};
var JFlex = {
	color: "#DBCA00",
	url: "https://github.com/trending?l=JFlex"
};
var Jison = {
	color: null,
	url: "https://github.com/trending?l=Jison"
};
var Jolie = {
	color: "#843179",
	url: "https://github.com/trending?l=Jolie"
};
var jq = {
	color: "#c7254e",
	url: "https://github.com/trending?l=jq"
};
var JSONiq = {
	color: "#40d47e",
	url: "https://github.com/trending?l=JSONiq"
};
var Jsonnet = {
	color: "#0064bd",
	url: "https://github.com/trending?l=Jsonnet"
};
var Julia = {
	color: "#a270ba",
	url: "https://github.com/trending?l=Julia"
};
var Kotlin = {
	color: "#F18E33",
	url: "https://github.com/trending?l=Kotlin"
};
var KRL = {
	color: "#28430A",
	url: "https://github.com/trending?l=KRL"
};
var LabVIEW = {
	color: null,
	url: "https://github.com/trending?l=LabVIEW"
};
var Lark = {
	color: "#2980B9",
	url: "https://github.com/trending?l=Lark"
};
var Lasso = {
	color: "#999999",
	url: "https://github.com/trending?l=Lasso"
};
var Latte = {
	color: "#f2a542",
	url: "https://github.com/trending?l=Latte"
};
var Lean = {
	color: null,
	url: "https://github.com/trending?l=Lean"
};
var Less = {
	color: "#1d365d",
	url: "https://github.com/trending?l=Less"
};
var Lex = {
	color: "#DBCA00",
	url: "https://github.com/trending?l=Lex"
};
var LFE = {
	color: "#4C3023",
	url: "https://github.com/trending?l=LFE"
};
var LilyPond = {
	color: null,
	url: "https://github.com/trending?l=LilyPond"
};
var Limbo = {
	color: null,
	url: "https://github.com/trending?l=Limbo"
};
var Liquid = {
	color: "#67b8de",
	url: "https://github.com/trending?l=Liquid"
};
var LiveScript = {
	color: "#499886",
	url: "https://github.com/trending?l=LiveScript"
};
var LLVM = {
	color: "#185619",
	url: "https://github.com/trending?l=LLVM"
};
var Logos = {
	color: null,
	url: "https://github.com/trending?l=Logos"
};
var Logtalk = {
	color: null,
	url: "https://github.com/trending?l=Logtalk"
};
var LOLCODE = {
	color: "#cc9900",
	url: "https://github.com/trending?l=LOLCODE"
};
var LookML = {
	color: "#652B81",
	url: "https://github.com/trending?l=LookML"
};
var LoomScript = {
	color: null,
	url: "https://github.com/trending?l=LoomScript"
};
var LSL = {
	color: "#3d9970",
	url: "https://github.com/trending?l=LSL"
};
var Lua = {
	color: "#000080",
	url: "https://github.com/trending?l=Lua"
};
var M = {
	color: null,
	url: "https://github.com/trending?l=M"
};
var M4 = {
	color: null,
	url: "https://github.com/trending?l=M4"
};
var M4Sugar = {
	color: null,
	url: "https://github.com/trending?l=M4Sugar"
};
var Macaulay2 = {
	color: "#d8ffff",
	url: "https://github.com/trending?l=Macaulay2"
};
var Makefile = {
	color: "#427819",
	url: "https://github.com/trending?l=Makefile"
};
var Mako = {
	color: null,
	url: "https://github.com/trending?l=Mako"
};
var Markdown = {
	color: "#083fa1",
	url: "https://github.com/trending?l=Markdown"
};
var Marko = {
	color: "#42bff2",
	url: "https://github.com/trending?l=Marko"
};
var Mask = {
	color: "#f97732",
	url: "https://github.com/trending?l=Mask"
};
var Mathematica = {
	color: null,
	url: "https://github.com/trending?l=Mathematica"
};
var MATLAB = {
	color: "#e16737",
	url: "https://github.com/trending?l=MATLAB"
};
var Max = {
	color: "#c4a79c",
	url: "https://github.com/trending?l=Max"
};
var MAXScript = {
	color: "#00a6a6",
	url: "https://github.com/trending?l=MAXScript"
};
var mcfunction = {
	color: "#E22837",
	url: "https://github.com/trending?l=mcfunction"
};
var Mercury = {
	color: "#ff2b2b",
	url: "https://github.com/trending?l=Mercury"
};
var Meson = {
	color: "#007800",
	url: "https://github.com/trending?l=Meson"
};
var Metal = {
	color: "#8f14e9",
	url: "https://github.com/trending?l=Metal"
};
var MiniD = {
	color: null,
	url: "https://github.com/trending?l=MiniD"
};
var Mirah = {
	color: "#c7a938",
	url: "https://github.com/trending?l=Mirah"
};
var MLIR = {
	color: "#5EC8DB",
	url: "https://github.com/trending?l=MLIR"
};
var Modelica = {
	color: null,
	url: "https://github.com/trending?l=Modelica"
};
var Monkey = {
	color: null,
	url: "https://github.com/trending?l=Monkey"
};
var Moocode = {
	color: null,
	url: "https://github.com/trending?l=Moocode"
};
var MoonScript = {
	color: null,
	url: "https://github.com/trending?l=MoonScript"
};
var MQL4 = {
	color: "#62A8D6",
	url: "https://github.com/trending?l=MQL4"
};
var MQL5 = {
	color: "#4A76B8",
	url: "https://github.com/trending?l=MQL5"
};
var MTML = {
	color: "#b7e1f4",
	url: "https://github.com/trending?l=MTML"
};
var MUF = {
	color: null,
	url: "https://github.com/trending?l=MUF"
};
var mupad = {
	color: null,
	url: "https://github.com/trending?l=mupad"
};
var Mustache = {
	color: "#724b3b",
	url: "https://github.com/trending?l=Mustache"
};
var Myghty = {
	color: null,
	url: "https://github.com/trending?l=Myghty"
};
var NASL = {
	color: null,
	url: "https://github.com/trending?l=NASL"
};
var NCL = {
	color: "#28431f",
	url: "https://github.com/trending?l=NCL"
};
var Nearley = {
	color: "#990000",
	url: "https://github.com/trending?l=Nearley"
};
var Nemerle = {
	color: "#3d3c6e",
	url: "https://github.com/trending?l=Nemerle"
};
var nesC = {
	color: "#94B0C7",
	url: "https://github.com/trending?l=nesC"
};
var NetLinx = {
	color: "#0aa0ff",
	url: "https://github.com/trending?l=NetLinx"
};
var NetLogo = {
	color: "#ff6375",
	url: "https://github.com/trending?l=NetLogo"
};
var NewLisp = {
	color: "#87AED7",
	url: "https://github.com/trending?l=NewLisp"
};
var Nextflow = {
	color: "#3ac486",
	url: "https://github.com/trending?l=Nextflow"
};
var Nim = {
	color: "#ffc200",
	url: "https://github.com/trending?l=Nim"
};
var Nit = {
	color: "#009917",
	url: "https://github.com/trending?l=Nit"
};
var Nix = {
	color: "#7e7eff",
	url: "https://github.com/trending?l=Nix"
};
var NSIS = {
	color: null,
	url: "https://github.com/trending?l=NSIS"
};
var Nu = {
	color: "#c9df40",
	url: "https://github.com/trending?l=Nu"
};
var NumPy = {
	color: "#9C8AF9",
	url: "https://github.com/trending?l=NumPy"
};
var Nunjucks = {
	color: "#3d8137",
	url: "https://github.com/trending?l=Nunjucks"
};
var NWScript = {
	color: "#111522",
	url: "https://github.com/trending?l=NWScript"
};
var ObjectScript = {
	color: "#424893",
	url: "https://github.com/trending?l=ObjectScript"
};
var OCaml = {
	color: "#3be133",
	url: "https://github.com/trending?l=OCaml"
};
var Odin = {
	color: "#60AFFE",
	url: "https://github.com/trending?l=Odin"
};
var Omgrofl = {
	color: "#cabbff",
	url: "https://github.com/trending?l=Omgrofl"
};
var ooc = {
	color: "#b0b77e",
	url: "https://github.com/trending?l=ooc"
};
var Opa = {
	color: null,
	url: "https://github.com/trending?l=Opa"
};
var Opal = {
	color: "#f7ede0",
	url: "https://github.com/trending?l=Opal"
};
var OpenCL = {
	color: null,
	url: "https://github.com/trending?l=OpenCL"
};
var OpenQASM = {
	color: "#AA70FF",
	url: "https://github.com/trending?l=OpenQASM"
};
var OpenSCAD = {
	color: null,
	url: "https://github.com/trending?l=OpenSCAD"
};
var Org = {
	color: "#77aa99",
	url: "https://github.com/trending?l=Org"
};
var Ox = {
	color: null,
	url: "https://github.com/trending?l=Ox"
};
var Oxygene = {
	color: "#cdd0e3",
	url: "https://github.com/trending?l=Oxygene"
};
var Oz = {
	color: "#fab738",
	url: "https://github.com/trending?l=Oz"
};
var P4 = {
	color: "#7055b5",
	url: "https://github.com/trending?l=P4"
};
var Pan = {
	color: "#cc0000",
	url: "https://github.com/trending?l=Pan"
};
var Papyrus = {
	color: "#6600cc",
	url: "https://github.com/trending?l=Papyrus"
};
var Parrot = {
	color: "#f3ca0a",
	url: "https://github.com/trending?l=Parrot"
};
var Pascal = {
	color: "#E3F171",
	url: "https://github.com/trending?l=Pascal"
};
var Pawn = {
	color: "#dbb284",
	url: "https://github.com/trending?l=Pawn"
};
var Pep8 = {
	color: "#C76F5B",
	url: "https://github.com/trending?l=Pep8"
};
var Perl = {
	color: "#0298c3",
	url: "https://github.com/trending?l=Perl"
};
var PHP = {
	color: "#4F5D95",
	url: "https://github.com/trending?l=PHP"
};
var PicoLisp = {
	color: null,
	url: "https://github.com/trending?l=PicoLisp"
};
var PigLatin = {
	color: "#fcd7de",
	url: "https://github.com/trending?l=PigLatin"
};
var Pike = {
	color: "#005390",
	url: "https://github.com/trending?l=Pike"
};
var PLpgSQL = {
	color: null,
	url: "https://github.com/trending?l=PLpgSQL"
};
var PLSQL = {
	color: "#dad8d8",
	url: "https://github.com/trending?l=PLSQL"
};
var PogoScript = {
	color: "#d80074",
	url: "https://github.com/trending?l=PogoScript"
};
var Pony = {
	color: null,
	url: "https://github.com/trending?l=Pony"
};
var PostScript = {
	color: "#da291c",
	url: "https://github.com/trending?l=PostScript"
};
var PowerBuilder = {
	color: "#8f0f8d",
	url: "https://github.com/trending?l=PowerBuilder"
};
var PowerShell = {
	color: "#012456",
	url: "https://github.com/trending?l=PowerShell"
};
var Prisma = {
	color: "#0c344b",
	url: "https://github.com/trending?l=Prisma"
};
var Processing = {
	color: "#0096D8",
	url: "https://github.com/trending?l=Processing"
};
var Prolog = {
	color: "#74283c",
	url: "https://github.com/trending?l=Prolog"
};
var Pug = {
	color: "#a86454",
	url: "https://github.com/trending?l=Pug"
};
var Puppet = {
	color: "#302B6D",
	url: "https://github.com/trending?l=Puppet"
};
var PureBasic = {
	color: "#5a6986",
	url: "https://github.com/trending?l=PureBasic"
};
var PureScript = {
	color: "#1D222D",
	url: "https://github.com/trending?l=PureScript"
};
var Python = {
	color: "#3572A5",
	url: "https://github.com/trending?l=Python"
};
var q = {
	color: "#0040cd",
	url: "https://github.com/trending?l=q"
};
var QMake = {
	color: null,
	url: "https://github.com/trending?l=QMake"
};
var QML = {
	color: "#44a51c",
	url: "https://github.com/trending?l=QML"
};
var Quake = {
	color: "#882233",
	url: "https://github.com/trending?l=Quake"
};
var R = {
	color: "#198CE7",
	url: "https://github.com/trending?l=R"
};
var Racket = {
	color: "#3c5caa",
	url: "https://github.com/trending?l=Racket"
};
var Ragel = {
	color: "#9d5200",
	url: "https://github.com/trending?l=Ragel"
};
var Raku = {
	color: "#0000fb",
	url: "https://github.com/trending?l=Raku"
};
var RAML = {
	color: "#77d9fb",
	url: "https://github.com/trending?l=RAML"
};
var Rascal = {
	color: "#fffaa0",
	url: "https://github.com/trending?l=Rascal"
};
var REALbasic = {
	color: null,
	url: "https://github.com/trending?l=REALbasic"
};
var Reason = {
	color: "#ff5847",
	url: "https://github.com/trending?l=Reason"
};
var Rebol = {
	color: "#358a5b",
	url: "https://github.com/trending?l=Rebol"
};
var Red = {
	color: "#f50000",
	url: "https://github.com/trending?l=Red"
};
var Redcode = {
	color: null,
	url: "https://github.com/trending?l=Redcode"
};
var RenderScript = {
	color: null,
	url: "https://github.com/trending?l=RenderScript"
};
var ReScript = {
	color: "#ed5051",
	url: "https://github.com/trending?l=ReScript"
};
var REXX = {
	color: null,
	url: "https://github.com/trending?l=REXX"
};
var Ring = {
	color: "#2D54CB",
	url: "https://github.com/trending?l=Ring"
};
var Riot = {
	color: "#A71E49",
	url: "https://github.com/trending?l=Riot"
};
var RobotFramework = {
	color: null,
	url: "https://github.com/trending?l=RobotFramework"
};
var Roff = {
	color: "#ecdebe",
	url: "https://github.com/trending?l=Roff"
};
var Rouge = {
	color: "#cc0088",
	url: "https://github.com/trending?l=Rouge"
};
var RPC = {
	color: null,
	url: "https://github.com/trending?l=RPC"
};
var Ruby = {
	color: "#701516",
	url: "https://github.com/trending?l=Ruby"
};
var RUNOFF = {
	color: "#665a4e",
	url: "https://github.com/trending?l=RUNOFF"
};
var Rust = {
	color: "#dea584",
	url: "https://github.com/trending?l=Rust"
};
var Sage = {
	color: null,
	url: "https://github.com/trending?l=Sage"
};
var SaltStack = {
	color: "#646464",
	url: "https://github.com/trending?l=SaltStack"
};
var SAS = {
	color: "#B34936",
	url: "https://github.com/trending?l=SAS"
};
var Sass = {
	color: "#a53b70",
	url: "https://github.com/trending?l=Sass"
};
var Scala = {
	color: "#c22d40",
	url: "https://github.com/trending?l=Scala"
};
var Scaml = {
	color: "#bd181a",
	url: "https://github.com/trending?l=Scaml"
};
var Scheme = {
	color: "#1e4aec",
	url: "https://github.com/trending?l=Scheme"
};
var Scilab = {
	color: null,
	url: "https://github.com/trending?l=Scilab"
};
var SCSS = {
	color: "#c6538c",
	url: "https://github.com/trending?l=SCSS"
};
var sed = {
	color: "#64b970",
	url: "https://github.com/trending?l=sed"
};
var Self = {
	color: "#0579aa",
	url: "https://github.com/trending?l=Self"
};
var ShaderLab = {
	color: null,
	url: "https://github.com/trending?l=ShaderLab"
};
var Shell = {
	color: "#89e051",
	url: "https://github.com/trending?l=Shell"
};
var ShellSession = {
	color: null,
	url: "https://github.com/trending?l=ShellSession"
};
var Shen = {
	color: "#120F14",
	url: "https://github.com/trending?l=Shen"
};
var Sieve = {
	color: null,
	url: "https://github.com/trending?l=Sieve"
};
var Slash = {
	color: "#007eff",
	url: "https://github.com/trending?l=Slash"
};
var Slice = {
	color: "#003fa2",
	url: "https://github.com/trending?l=Slice"
};
var Slim = {
	color: "#2b2b2b",
	url: "https://github.com/trending?l=Slim"
};
var Smali = {
	color: null,
	url: "https://github.com/trending?l=Smali"
};
var Smalltalk = {
	color: "#596706",
	url: "https://github.com/trending?l=Smalltalk"
};
var Smarty = {
	color: null,
	url: "https://github.com/trending?l=Smarty"
};
var SmPL = {
	color: "#c94949",
	url: "https://github.com/trending?l=SmPL"
};
var SMT = {
	color: null,
	url: "https://github.com/trending?l=SMT"
};
var Solidity = {
	color: "#AA6746",
	url: "https://github.com/trending?l=Solidity"
};
var SourcePawn = {
	color: "#f69e1d",
	url: "https://github.com/trending?l=SourcePawn"
};
var SQF = {
	color: "#3F3F3F",
	url: "https://github.com/trending?l=SQF"
};
var SQLPL = {
	color: null,
	url: "https://github.com/trending?l=SQLPL"
};
var Squirrel = {
	color: "#800000",
	url: "https://github.com/trending?l=Squirrel"
};
var Stan = {
	color: "#b2011d",
	url: "https://github.com/trending?l=Stan"
};
var Starlark = {
	color: "#76d275",
	url: "https://github.com/trending?l=Starlark"
};
var Stata = {
	color: null,
	url: "https://github.com/trending?l=Stata"
};
var Stylus = {
	color: "#ff6347",
	url: "https://github.com/trending?l=Stylus"
};
var SuperCollider = {
	color: "#46390b",
	url: "https://github.com/trending?l=SuperCollider"
};
var Svelte = {
	color: "#ff3e00",
	url: "https://github.com/trending?l=Svelte"
};
var SVG = {
	color: "#ff9900",
	url: "https://github.com/trending?l=SVG"
};
var Swift = {
	color: "#ffac45",
	url: "https://github.com/trending?l=Swift"
};
var SWIG = {
	color: null,
	url: "https://github.com/trending?l=SWIG"
};
var SystemVerilog = {
	color: "#DAE1C2",
	url: "https://github.com/trending?l=SystemVerilog"
};
var Tcl = {
	color: "#e4cc98",
	url: "https://github.com/trending?l=Tcl"
};
var Tcsh = {
	color: null,
	url: "https://github.com/trending?l=Tcsh"
};
var Terra = {
	color: "#00004c",
	url: "https://github.com/trending?l=Terra"
};
var TeX = {
	color: "#3D6117",
	url: "https://github.com/trending?l=TeX"
};
var Thrift = {
	color: null,
	url: "https://github.com/trending?l=Thrift"
};
var TLA = {
	color: null,
	url: "https://github.com/trending?l=TLA"
};
var TSQL = {
	color: null,
	url: "https://github.com/trending?l=TSQL"
};
var TSX = {
	color: null,
	url: "https://github.com/trending?l=TSX"
};
var Turing = {
	color: "#cf142b",
	url: "https://github.com/trending?l=Turing"
};
var Twig = {
	color: "#c1d026",
	url: "https://github.com/trending?l=Twig"
};
var TXL = {
	color: null,
	url: "https://github.com/trending?l=TXL"
};
var TypeScript = {
	color: "#2b7489",
	url: "https://github.com/trending?l=TypeScript"
};
var Uno = {
	color: "#9933cc",
	url: "https://github.com/trending?l=Uno"
};
var UnrealScript = {
	color: "#a54c4d",
	url: "https://github.com/trending?l=UnrealScript"
};
var UrWeb = {
	color: null,
	url: "https://github.com/trending?l=UrWeb"
};
var V = {
	color: "#4f87c4",
	url: "https://github.com/trending?l=V"
};
var Vala = {
	color: "#fbe5cd",
	url: "https://github.com/trending?l=Vala"
};
var VBA = {
	color: "#867db1",
	url: "https://github.com/trending?l=VBA"
};
var VBScript = {
	color: "#15dcdc",
	url: "https://github.com/trending?l=VBScript"
};
var VCL = {
	color: "#148AA8",
	url: "https://github.com/trending?l=VCL"
};
var Verilog = {
	color: "#b2b7f8",
	url: "https://github.com/trending?l=Verilog"
};
var VHDL = {
	color: "#adb2cb",
	url: "https://github.com/trending?l=VHDL"
};
var Volt = {
	color: "#1F1F1F",
	url: "https://github.com/trending?l=Volt"
};
var Vue = {
	color: "#2c3e50",
	url: "https://github.com/trending?l=Vue"
};
var wdl = {
	color: "#42f1f4",
	url: "https://github.com/trending?l=wdl"
};
var WebAssembly = {
	color: "#04133b",
	url: "https://github.com/trending?l=WebAssembly"
};
var WebIDL = {
	color: null,
	url: "https://github.com/trending?l=WebIDL"
};
var wisp = {
	color: "#7582D1",
	url: "https://github.com/trending?l=wisp"
};
var Wollok = {
	color: "#a23738",
	url: "https://github.com/trending?l=Wollok"
};
var X10 = {
	color: "#4B6BEF",
	url: "https://github.com/trending?l=X10"
};
var xBase = {
	color: "#403a40",
	url: "https://github.com/trending?l=xBase"
};
var XC = {
	color: "#99DA07",
	url: "https://github.com/trending?l=XC"
};
var Xojo = {
	color: null,
	url: "https://github.com/trending?l=Xojo"
};
var XProc = {
	color: null,
	url: "https://github.com/trending?l=XProc"
};
var XQuery = {
	color: "#5232e7",
	url: "https://github.com/trending?l=XQuery"
};
var XS = {
	color: null,
	url: "https://github.com/trending?l=XS"
};
var XSLT = {
	color: "#EB8CEB",
	url: "https://github.com/trending?l=XSLT"
};
var Xtend = {
	color: null,
	url: "https://github.com/trending?l=Xtend"
};
var Yacc = {
	color: "#4B6C4B",
	url: "https://github.com/trending?l=Yacc"
};
var YAML = {
	color: "#cb171e",
	url: "https://github.com/trending?l=YAML"
};
var YARA = {
	color: "#220000",
	url: "https://github.com/trending?l=YARA"
};
var YASnippet = {
	color: "#32AB90",
	url: "https://github.com/trending?l=YASnippet"
};
var ZAP = {
	color: "#0d665e",
	url: "https://github.com/trending?l=ZAP"
};
var Zeek = {
	color: null,
	url: "https://github.com/trending?l=Zeek"
};
var ZenScript = {
	color: "#00BCD1",
	url: "https://github.com/trending?l=ZenScript"
};
var Zephir = {
	color: "#118f9e",
	url: "https://github.com/trending?l=Zephir"
};
var Zig = {
	color: "#ec915c",
	url: "https://github.com/trending?l=Zig"
};
var ZIL = {
	color: "#dc75e5",
	url: "https://github.com/trending?l=ZIL"
};
var Zimpl = {
	color: null,
	url: "https://github.com/trending?l=Zimpl"
};
var colors = {
	"1C Enterprise": {
	color: "#814CCC",
	url: "https://github.com/trending?l=1C-Enterprise"
},
	"4D": {
	color: null,
	url: "https://github.com/trending?l=4D"
},
	ABAP: ABAP,
	"ABAP CDS": {
	color: "#555e25",
	url: "https://github.com/trending?l=ABAP-CDS"
},
	ActionScript: ActionScript,
	Ada: Ada,
	Agda: Agda,
	"AGS Script": {
	color: "#B9D9FF",
	url: "https://github.com/trending?l=AGS-Script"
},
	AL: AL,
	Alloy: Alloy,
	"Alpine Abuild": {
	color: null,
	url: "https://github.com/trending?l=Alpine-Abuild"
},
	AMPL: AMPL,
	AngelScript: AngelScript,
	ANTLR: ANTLR,
	Apex: Apex,
	"API Blueprint": {
	color: "#2ACCA8",
	url: "https://github.com/trending?l=API-Blueprint"
},
	APL: APL,
	"Apollo Guidance Computer": {
	color: "#0B3D91",
	url: "https://github.com/trending?l=Apollo-Guidance-Computer"
},
	AppleScript: AppleScript,
	Arc: Arc,
	ASL: ASL,
	"ASP.NET": {
	color: "#9400ff",
	url: "https://github.com/trending?l=ASP.NET"
},
	AspectJ: AspectJ,
	Assembly: Assembly,
	Asymptote: Asymptote,
	ATS: ATS,
	Augeas: Augeas,
	AutoHotkey: AutoHotkey,
	AutoIt: AutoIt,
	Awk: Awk,
	Ballerina: Ballerina,
	Batchfile: Batchfile,
	Beef: Beef,
	Befunge: Befunge,
	Bison: Bison,
	BitBake: BitBake,
	Blade: Blade,
	BlitzBasic: BlitzBasic,
	BlitzMax: BlitzMax,
	Bluespec: Bluespec,
	Boo: Boo,
	Boogie: Boogie,
	Brainfuck: Brainfuck,
	Brightscript: Brightscript,
	Browserslist: Browserslist,
	C: C,
	"C#": {
	color: "#178600",
	url: "https://github.com/trending?l=Csharp"
},
	"C++": {
	color: "#f34b7d",
	url: "https://github.com/trending?l=C++"
},
	"C2hs Haskell": {
	color: null,
	url: "https://github.com/trending?l=C2hs-Haskell"
},
	"Cap'n Proto": {
	color: null,
	url: "https://github.com/trending?l=Cap'n-Proto"
},
	CartoCSS: CartoCSS,
	Ceylon: Ceylon,
	Chapel: Chapel,
	Charity: Charity,
	ChucK: ChucK,
	Cirru: Cirru,
	Clarion: Clarion,
	"Classic ASP": {
	color: "#6a40fd",
	url: "https://github.com/trending?l=Classic-ASP"
},
	Clean: Clean,
	Click: Click,
	CLIPS: CLIPS,
	Clojure: Clojure,
	"Closure Templates": {
	color: "#0d948f",
	url: "https://github.com/trending?l=Closure-Templates"
},
	CMake: CMake,
	COBOL: COBOL,
	CodeQL: CodeQL,
	CoffeeScript: CoffeeScript,
	ColdFusion: ColdFusion,
	"ColdFusion CFC": {
	color: "#ed2cd6",
	url: "https://github.com/trending?l=ColdFusion-CFC"
},
	"Common Lisp": {
	color: "#3fb68b",
	url: "https://github.com/trending?l=Common-Lisp"
},
	"Common Workflow Language": {
	color: "#B5314C",
	url: "https://github.com/trending?l=Common-Workflow-Language"
},
	"Component Pascal": {
	color: "#B0CE4E",
	url: "https://github.com/trending?l=Component-Pascal"
},
	Cool: Cool,
	Coq: Coq,
	Crystal: Crystal,
	CSON: CSON,
	Csound: Csound,
	"Csound Document": {
	color: null,
	url: "https://github.com/trending?l=Csound-Document"
},
	"Csound Score": {
	color: null,
	url: "https://github.com/trending?l=Csound-Score"
},
	CSS: CSS,
	Cuda: Cuda,
	CWeb: CWeb,
	Cycript: Cycript,
	Cython: Cython,
	D: D,
	Dafny: Dafny,
	Dart: Dart,
	DataWeave: DataWeave,
	Dhall: Dhall,
	"DIGITAL Command Language": {
	color: null,
	url: "https://github.com/trending?l=DIGITAL-Command-Language"
},
	DM: DM,
	Dockerfile: Dockerfile,
	Dogescript: Dogescript,
	DTrace: DTrace,
	Dylan: Dylan,
	E: E,
	eC: eC,
	ECL: ECL,
	ECLiPSe: ECLiPSe,
	Eiffel: Eiffel,
	EJS: EJS,
	Elixir: Elixir,
	Elm: Elm,
	"Emacs Lisp": {
	color: "#c065db",
	url: "https://github.com/trending?l=Emacs-Lisp"
},
	EmberScript: EmberScript,
	EQ: EQ,
	Erlang: Erlang,
	"F#": {
	color: "#b845fc",
	url: "https://github.com/trending?l=Fsharp"
},
	"F*": {
	color: "#572e30",
	url: "https://github.com/trending?l=F*"
},
	Factor: Factor,
	Fancy: Fancy,
	Fantom: Fantom,
	Faust: Faust,
	"Filebench WML": {
	color: null,
	url: "https://github.com/trending?l=Filebench-WML"
},
	Filterscript: Filterscript,
	fish: fish,
	FLUX: FLUX,
	Forth: Forth,
	Fortran: Fortran,
	"Fortran Free Form": {
	color: null,
	url: "https://github.com/trending?l=Fortran-Free-Form"
},
	FreeMarker: FreeMarker,
	Frege: Frege,
	Futhark: Futhark,
	"G-code": {
	color: "#D08CF2",
	url: "https://github.com/trending?l=G-code"
},
	"Game Maker Language": {
	color: "#71b417",
	url: "https://github.com/trending?l=Game-Maker-Language"
},
	GAML: GAML,
	GAMS: GAMS,
	GAP: GAP,
	"GCC Machine Description": {
	color: null,
	url: "https://github.com/trending?l=GCC-Machine-Description"
},
	GDB: GDB,
	GDScript: GDScript,
	"Gemfile.lock": {
	color: "#701516",
	url: "https://github.com/trending?l=Gemfile.lock"
},
	Genie: Genie,
	Genshi: Genshi,
	"Gentoo Ebuild": {
	color: null,
	url: "https://github.com/trending?l=Gentoo-Ebuild"
},
	"Gentoo Eclass": {
	color: null,
	url: "https://github.com/trending?l=Gentoo-Eclass"
},
	Gherkin: Gherkin,
	GLSL: GLSL,
	Glyph: Glyph,
	Gnuplot: Gnuplot,
	Go: Go,
	Golo: Golo,
	Gosu: Gosu,
	Grace: Grace,
	"Grammatical Framework": {
	color: "#ff0000",
	url: "https://github.com/trending?l=Grammatical-Framework"
},
	GraphQL: GraphQL,
	Groovy: Groovy,
	"Groovy Server Pages": {
	color: null,
	url: "https://github.com/trending?l=Groovy-Server-Pages"
},
	Hack: Hack,
	Haml: Haml,
	Handlebars: Handlebars,
	Harbour: Harbour,
	Haskell: Haskell,
	Haxe: Haxe,
	HCL: HCL,
	HiveQL: HiveQL,
	HLSL: HLSL,
	HolyC: HolyC,
	HTML: HTML,
	Hy: Hy,
	HyPhy: HyPhy,
	IDL: IDL,
	Idris: Idris,
	"IGOR Pro": {
	color: "#0000cc",
	url: "https://github.com/trending?l=IGOR-Pro"
},
	"ImageJ Macro": {
	color: "#99AAFF",
	url: "https://github.com/trending?l=ImageJ-Macro"
},
	"Inform 7": {
	color: null,
	url: "https://github.com/trending?l=Inform-7"
},
	"Inno Setup": {
	color: null,
	url: "https://github.com/trending?l=Inno-Setup"
},
	Io: Io,
	Ioke: Ioke,
	Isabelle: Isabelle,
	"Isabelle ROOT": {
	color: null,
	url: "https://github.com/trending?l=Isabelle-ROOT"
},
	J: J,
	Jasmin: Jasmin,
	Java: Java,
	"Java Server Pages": {
	color: null,
	url: "https://github.com/trending?l=Java-Server-Pages"
},
	JavaScript: JavaScript,
	"JavaScript+ERB": {
	color: null,
	url: "https://github.com/trending?l=JavaScript+ERB"
},
	JFlex: JFlex,
	Jison: Jison,
	"Jison Lex": {
	color: null,
	url: "https://github.com/trending?l=Jison-Lex"
},
	Jolie: Jolie,
	jq: jq,
	JSONiq: JSONiq,
	Jsonnet: Jsonnet,
	Julia: Julia,
	"Jupyter Notebook": {
	color: "#DA5B0B",
	url: "https://github.com/trending?l=Jupyter-Notebook"
},
	"Kaitai Struct": {
	color: "#773b37",
	url: "https://github.com/trending?l=Kaitai-Struct"
},
	Kotlin: Kotlin,
	KRL: KRL,
	LabVIEW: LabVIEW,
	Lark: Lark,
	Lasso: Lasso,
	Latte: Latte,
	Lean: Lean,
	Less: Less,
	Lex: Lex,
	LFE: LFE,
	LilyPond: LilyPond,
	Limbo: Limbo,
	Liquid: Liquid,
	"Literate Agda": {
	color: null,
	url: "https://github.com/trending?l=Literate-Agda"
},
	"Literate CoffeeScript": {
	color: null,
	url: "https://github.com/trending?l=Literate-CoffeeScript"
},
	"Literate Haskell": {
	color: null,
	url: "https://github.com/trending?l=Literate-Haskell"
},
	LiveScript: LiveScript,
	LLVM: LLVM,
	Logos: Logos,
	Logtalk: Logtalk,
	LOLCODE: LOLCODE,
	LookML: LookML,
	LoomScript: LoomScript,
	LSL: LSL,
	Lua: Lua,
	M: M,
	M4: M4,
	M4Sugar: M4Sugar,
	Macaulay2: Macaulay2,
	Makefile: Makefile,
	Mako: Mako,
	Markdown: Markdown,
	Marko: Marko,
	Mask: Mask,
	Mathematica: Mathematica,
	MATLAB: MATLAB,
	Max: Max,
	MAXScript: MAXScript,
	mcfunction: mcfunction,
	Mercury: Mercury,
	Meson: Meson,
	Metal: Metal,
	MiniD: MiniD,
	Mirah: Mirah,
	"mIRC Script": {
	color: "#3d57c3",
	url: "https://github.com/trending?l=mIRC-Script"
},
	MLIR: MLIR,
	Modelica: Modelica,
	"Modula-2": {
	color: null,
	url: "https://github.com/trending?l=Modula-2"
},
	"Modula-3": {
	color: "#223388",
	url: "https://github.com/trending?l=Modula-3"
},
	"Module Management System": {
	color: null,
	url: "https://github.com/trending?l=Module-Management-System"
},
	Monkey: Monkey,
	Moocode: Moocode,
	MoonScript: MoonScript,
	"Motorola 68K Assembly": {
	color: null,
	url: "https://github.com/trending?l=Motorola-68K-Assembly"
},
	MQL4: MQL4,
	MQL5: MQL5,
	MTML: MTML,
	MUF: MUF,
	mupad: mupad,
	Mustache: Mustache,
	Myghty: Myghty,
	NASL: NASL,
	NCL: NCL,
	Nearley: Nearley,
	Nemerle: Nemerle,
	nesC: nesC,
	NetLinx: NetLinx,
	"NetLinx+ERB": {
	color: "#747faa",
	url: "https://github.com/trending?l=NetLinx+ERB"
},
	NetLogo: NetLogo,
	NewLisp: NewLisp,
	Nextflow: Nextflow,
	Nim: Nim,
	Nit: Nit,
	Nix: Nix,
	NSIS: NSIS,
	Nu: Nu,
	NumPy: NumPy,
	Nunjucks: Nunjucks,
	NWScript: NWScript,
	"Objective-C": {
	color: "#438eff",
	url: "https://github.com/trending?l=Objective-C"
},
	"Objective-C++": {
	color: "#6866fb",
	url: "https://github.com/trending?l=Objective-C++"
},
	"Objective-J": {
	color: "#ff0c5a",
	url: "https://github.com/trending?l=Objective-J"
},
	ObjectScript: ObjectScript,
	OCaml: OCaml,
	Odin: Odin,
	Omgrofl: Omgrofl,
	ooc: ooc,
	Opa: Opa,
	Opal: Opal,
	"Open Policy Agent": {
	color: null,
	url: "https://github.com/trending?l=Open-Policy-Agent"
},
	OpenCL: OpenCL,
	"OpenEdge ABL": {
	color: null,
	url: "https://github.com/trending?l=OpenEdge-ABL"
},
	OpenQASM: OpenQASM,
	"OpenRC runscript": {
	color: null,
	url: "https://github.com/trending?l=OpenRC-runscript"
},
	OpenSCAD: OpenSCAD,
	Org: Org,
	Ox: Ox,
	Oxygene: Oxygene,
	Oz: Oz,
	P4: P4,
	Pan: Pan,
	Papyrus: Papyrus,
	Parrot: Parrot,
	"Parrot Assembly": {
	color: null,
	url: "https://github.com/trending?l=Parrot-Assembly"
},
	"Parrot Internal Representation": {
	color: null,
	url: "https://github.com/trending?l=Parrot-Internal-Representation"
},
	Pascal: Pascal,
	Pawn: Pawn,
	Pep8: Pep8,
	Perl: Perl,
	PHP: PHP,
	PicoLisp: PicoLisp,
	PigLatin: PigLatin,
	Pike: Pike,
	PLpgSQL: PLpgSQL,
	PLSQL: PLSQL,
	PogoScript: PogoScript,
	Pony: Pony,
	PostScript: PostScript,
	"POV-Ray SDL": {
	color: null,
	url: "https://github.com/trending?l=POV-Ray-SDL"
},
	PowerBuilder: PowerBuilder,
	PowerShell: PowerShell,
	Prisma: Prisma,
	Processing: Processing,
	Prolog: Prolog,
	"Propeller Spin": {
	color: "#7fa2a7",
	url: "https://github.com/trending?l=Propeller-Spin"
},
	Pug: Pug,
	Puppet: Puppet,
	PureBasic: PureBasic,
	PureScript: PureScript,
	Python: Python,
	"Python console": {
	color: null,
	url: "https://github.com/trending?l=Python-console"
},
	q: q,
	"Q#": {
	color: "#fed659",
	url: "https://github.com/trending?l=Qsharp"
},
	QMake: QMake,
	QML: QML,
	"Qt Script": {
	color: "#00b841",
	url: "https://github.com/trending?l=Qt-Script"
},
	Quake: Quake,
	R: R,
	Racket: Racket,
	Ragel: Ragel,
	Raku: Raku,
	RAML: RAML,
	Rascal: Rascal,
	REALbasic: REALbasic,
	Reason: Reason,
	Rebol: Rebol,
	"Record Jar": {
	color: "#0673ba",
	url: "https://github.com/trending?l=Record-Jar"
},
	Red: Red,
	Redcode: Redcode,
	"Ren'Py": {
	color: "#ff7f7f",
	url: "https://github.com/trending?l=Ren'Py"
},
	RenderScript: RenderScript,
	ReScript: ReScript,
	REXX: REXX,
	Ring: Ring,
	Riot: Riot,
	RobotFramework: RobotFramework,
	Roff: Roff,
	Rouge: Rouge,
	RPC: RPC,
	Ruby: Ruby,
	RUNOFF: RUNOFF,
	Rust: Rust,
	Sage: Sage,
	SaltStack: SaltStack,
	SAS: SAS,
	Sass: Sass,
	Scala: Scala,
	Scaml: Scaml,
	Scheme: Scheme,
	Scilab: Scilab,
	SCSS: SCSS,
	sed: sed,
	Self: Self,
	ShaderLab: ShaderLab,
	Shell: Shell,
	ShellSession: ShellSession,
	Shen: Shen,
	Sieve: Sieve,
	Slash: Slash,
	Slice: Slice,
	Slim: Slim,
	Smali: Smali,
	Smalltalk: Smalltalk,
	Smarty: Smarty,
	SmPL: SmPL,
	SMT: SMT,
	Solidity: Solidity,
	SourcePawn: SourcePawn,
	SQF: SQF,
	SQLPL: SQLPL,
	Squirrel: Squirrel,
	"SRecode Template": {
	color: "#348a34",
	url: "https://github.com/trending?l=SRecode-Template"
},
	Stan: Stan,
	"Standard ML": {
	color: "#dc566d",
	url: "https://github.com/trending?l=Standard-ML"
},
	Starlark: Starlark,
	Stata: Stata,
	Stylus: Stylus,
	SuperCollider: SuperCollider,
	Svelte: Svelte,
	SVG: SVG,
	Swift: Swift,
	SWIG: SWIG,
	SystemVerilog: SystemVerilog,
	Tcl: Tcl,
	Tcsh: Tcsh,
	Terra: Terra,
	TeX: TeX,
	Thrift: Thrift,
	"TI Program": {
	color: "#A0AA87",
	url: "https://github.com/trending?l=TI-Program"
},
	TLA: TLA,
	TSQL: TSQL,
	TSX: TSX,
	Turing: Turing,
	Twig: Twig,
	TXL: TXL,
	TypeScript: TypeScript,
	"Unified Parallel C": {
	color: "#4e3617",
	url: "https://github.com/trending?l=Unified-Parallel-C"
},
	"Unix Assembly": {
	color: null,
	url: "https://github.com/trending?l=Unix-Assembly"
},
	Uno: Uno,
	UnrealScript: UnrealScript,
	UrWeb: UrWeb,
	V: V,
	Vala: Vala,
	VBA: VBA,
	VBScript: VBScript,
	VCL: VCL,
	Verilog: Verilog,
	VHDL: VHDL,
	"Vim script": {
	color: "#199f4b",
	url: "https://github.com/trending?l=Vim-script"
},
	"Visual Basic .NET": {
	color: "#945db7",
	url: "https://github.com/trending?l=Visual-Basic-.NET"
},
	Volt: Volt,
	Vue: Vue,
	wdl: wdl,
	WebAssembly: WebAssembly,
	WebIDL: WebIDL,
	wisp: wisp,
	Wollok: Wollok,
	X10: X10,
	xBase: xBase,
	XC: XC,
	Xojo: Xojo,
	XProc: XProc,
	XQuery: XQuery,
	XS: XS,
	XSLT: XSLT,
	Xtend: Xtend,
	Yacc: Yacc,
	YAML: YAML,
	YARA: YARA,
	YASnippet: YASnippet,
	ZAP: ZAP,
	Zeek: Zeek,
	ZenScript: ZenScript,
	Zephir: Zephir,
	Zig: Zig,
	ZIL: ZIL,
	Zimpl: Zimpl
};

var colors$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ABAP: ABAP,
    ActionScript: ActionScript,
    Ada: Ada,
    Agda: Agda,
    AL: AL,
    Alloy: Alloy,
    AMPL: AMPL,
    AngelScript: AngelScript,
    ANTLR: ANTLR,
    Apex: Apex,
    APL: APL,
    AppleScript: AppleScript,
    Arc: Arc,
    ASL: ASL,
    AspectJ: AspectJ,
    Assembly: Assembly,
    Asymptote: Asymptote,
    ATS: ATS,
    Augeas: Augeas,
    AutoHotkey: AutoHotkey,
    AutoIt: AutoIt,
    Awk: Awk,
    Ballerina: Ballerina,
    Batchfile: Batchfile,
    Beef: Beef,
    Befunge: Befunge,
    Bison: Bison,
    BitBake: BitBake,
    Blade: Blade,
    BlitzBasic: BlitzBasic,
    BlitzMax: BlitzMax,
    Bluespec: Bluespec,
    Boo: Boo,
    Boogie: Boogie,
    Brainfuck: Brainfuck,
    Brightscript: Brightscript,
    Browserslist: Browserslist,
    C: C,
	'C++': {color: "#f34b7d"},
    CartoCSS: CartoCSS,
    Ceylon: Ceylon,
    Chapel: Chapel,
    Charity: Charity,
    ChucK: ChucK,
    Cirru: Cirru,
    Clarion: Clarion,
    Clean: Clean,
    Click: Click,
    CLIPS: CLIPS,
    Clojure: Clojure,
    CMake: CMake,
    COBOL: COBOL,
    CodeQL: CodeQL,
    CoffeeScript: CoffeeScript,
    ColdFusion: ColdFusion,
    Cool: Cool,
    Coq: Coq,
    Crystal: Crystal,
    CSON: CSON,
    Csound: Csound,
    CSS: CSS,
    Cuda: Cuda,
    CWeb: CWeb,
    Cycript: Cycript,
    Cython: Cython,
    D: D,
    Dafny: Dafny,
    Dart: Dart,
    DataWeave: DataWeave,
    Dhall: Dhall,
    DM: DM,
    Dockerfile: Dockerfile,
    Dogescript: Dogescript,
    DTrace: DTrace,
    Dylan: Dylan,
    E: E,
    eC: eC,
    ECL: ECL,
    ECLiPSe: ECLiPSe,
    Eiffel: Eiffel,
    EJS: EJS,
    Elixir: Elixir,
    Elm: Elm,
    EmberScript: EmberScript,
    EQ: EQ,
    Erlang: Erlang,
    Factor: Factor,
    Fancy: Fancy,
    Fantom: Fantom,
    Faust: Faust,
    Filterscript: Filterscript,
    fish: fish,
    FLUX: FLUX,
    Forth: Forth,
    Fortran: Fortran,
    FreeMarker: FreeMarker,
    Frege: Frege,
    Futhark: Futhark,
    GAML: GAML,
    GAMS: GAMS,
    GAP: GAP,
    GDB: GDB,
    GDScript: GDScript,
    Genie: Genie,
    Genshi: Genshi,
    Gherkin: Gherkin,
    GLSL: GLSL,
    Glyph: Glyph,
    Gnuplot: Gnuplot,
    Go: Go,
    Golo: Golo,
    Gosu: Gosu,
    Grace: Grace,
    GraphQL: GraphQL,
    Groovy: Groovy,
    Hack: Hack,
    Haml: Haml,
    Handlebars: Handlebars,
    Harbour: Harbour,
    Haskell: Haskell,
    Haxe: Haxe,
    HCL: HCL,
    HiveQL: HiveQL,
    HLSL: HLSL,
    HolyC: HolyC,
    HTML: HTML,
    Hy: Hy,
    HyPhy: HyPhy,
    IDL: IDL,
    Idris: Idris,
    Io: Io,
    Ioke: Ioke,
    Isabelle: Isabelle,
    J: J,
    Jasmin: Jasmin,
    Java: Java,
    JavaScript: JavaScript,
    JFlex: JFlex,
    Jison: Jison,
    Jolie: Jolie,
    jq: jq,
    JSONiq: JSONiq,
    Jsonnet: Jsonnet,
    Julia: Julia,
    Kotlin: Kotlin,
    KRL: KRL,
    LabVIEW: LabVIEW,
    Lark: Lark,
    Lasso: Lasso,
    Latte: Latte,
    Lean: Lean,
    Less: Less,
    Lex: Lex,
    LFE: LFE,
    LilyPond: LilyPond,
    Limbo: Limbo,
    Liquid: Liquid,
    LiveScript: LiveScript,
    LLVM: LLVM,
    Logos: Logos,
    Logtalk: Logtalk,
    LOLCODE: LOLCODE,
    LookML: LookML,
    LoomScript: LoomScript,
    LSL: LSL,
    Lua: Lua,
    M: M,
    M4: M4,
    M4Sugar: M4Sugar,
    Macaulay2: Macaulay2,
    Makefile: Makefile,
    Mako: Mako,
    Markdown: Markdown,
    Marko: Marko,
    Mask: Mask,
    Mathematica: Mathematica,
    MATLAB: MATLAB,
    Max: Max,
    MAXScript: MAXScript,
    mcfunction: mcfunction,
    Mercury: Mercury,
    Meson: Meson,
    Metal: Metal,
    MiniD: MiniD,
    Mirah: Mirah,
    MLIR: MLIR,
    Modelica: Modelica,
    Monkey: Monkey,
    Moocode: Moocode,
    MoonScript: MoonScript,
    MQL4: MQL4,
    MQL5: MQL5,
    MTML: MTML,
    MUF: MUF,
    mupad: mupad,
    Mustache: Mustache,
    Myghty: Myghty,
    NASL: NASL,
    NCL: NCL,
    Nearley: Nearley,
    Nemerle: Nemerle,
    nesC: nesC,
    NetLinx: NetLinx,
    NetLogo: NetLogo,
    NewLisp: NewLisp,
    Nextflow: Nextflow,
    Nim: Nim,
    Nit: Nit,
    Nix: Nix,
    NSIS: NSIS,
    Nu: Nu,
    NumPy: NumPy,
    Nunjucks: Nunjucks,
    NWScript: NWScript,
    ObjectScript: ObjectScript,
    OCaml: OCaml,
    Odin: Odin,
    Omgrofl: Omgrofl,
    ooc: ooc,
    Opa: Opa,
    Opal: Opal,
    OpenCL: OpenCL,
    OpenQASM: OpenQASM,
    OpenSCAD: OpenSCAD,
    Org: Org,
    Ox: Ox,
    Oxygene: Oxygene,
    Oz: Oz,
    P4: P4,
    Pan: Pan,
    Papyrus: Papyrus,
    Parrot: Parrot,
    Pascal: Pascal,
    Pawn: Pawn,
    Pep8: Pep8,
    Perl: Perl,
    PHP: PHP,
    PicoLisp: PicoLisp,
    PigLatin: PigLatin,
    Pike: Pike,
    PLpgSQL: PLpgSQL,
    PLSQL: PLSQL,
    PogoScript: PogoScript,
    Pony: Pony,
    PostScript: PostScript,
    PowerBuilder: PowerBuilder,
    PowerShell: PowerShell,
    Prisma: Prisma,
    Processing: Processing,
    Prolog: Prolog,
    Pug: Pug,
    Puppet: Puppet,
    PureBasic: PureBasic,
    PureScript: PureScript,
    Python: Python,
    q: q,
    QMake: QMake,
    QML: QML,
    Quake: Quake,
    R: R,
    Racket: Racket,
    Ragel: Ragel,
    Raku: Raku,
    RAML: RAML,
    Rascal: Rascal,
    REALbasic: REALbasic,
    Reason: Reason,
    Rebol: Rebol,
    Red: Red,
    Redcode: Redcode,
    RenderScript: RenderScript,
    ReScript: ReScript,
    REXX: REXX,
    Ring: Ring,
    Riot: Riot,
    RobotFramework: RobotFramework,
    Roff: Roff,
    Rouge: Rouge,
    RPC: RPC,
    Ruby: Ruby,
    RUNOFF: RUNOFF,
    Rust: Rust,
    Sage: Sage,
    SaltStack: SaltStack,
    SAS: SAS,
    Sass: Sass,
    Scala: Scala,
    Scaml: Scaml,
    Scheme: Scheme,
    Scilab: Scilab,
    SCSS: SCSS,
    sed: sed,
    Self: Self,
    ShaderLab: ShaderLab,
    Shell: Shell,
    ShellSession: ShellSession,
    Shen: Shen,
    Sieve: Sieve,
    Slash: Slash,
    Slice: Slice,
    Slim: Slim,
    Smali: Smali,
    Smalltalk: Smalltalk,
    Smarty: Smarty,
    SmPL: SmPL,
    SMT: SMT,
    Solidity: Solidity,
    SourcePawn: SourcePawn,
    SQF: SQF,
    SQLPL: SQLPL,
    Squirrel: Squirrel,
    Stan: Stan,
    Starlark: Starlark,
    Stata: Stata,
    Stylus: Stylus,
    SuperCollider: SuperCollider,
    Svelte: Svelte,
    SVG: SVG,
    Swift: Swift,
    SWIG: SWIG,
    SystemVerilog: SystemVerilog,
    Tcl: Tcl,
    Tcsh: Tcsh,
    Terra: Terra,
    TeX: TeX,
    Thrift: Thrift,
    TLA: TLA,
    TSQL: TSQL,
    TSX: TSX,
    Turing: Turing,
    Twig: Twig,
    TXL: TXL,
    TypeScript: TypeScript,
    Uno: Uno,
    UnrealScript: UnrealScript,
    UrWeb: UrWeb,
    V: V,
    Vala: Vala,
    VBA: VBA,
    VBScript: VBScript,
    VCL: VCL,
    Verilog: Verilog,
    VHDL: VHDL,
    Volt: Volt,
    Vue: Vue,
    wdl: wdl,
    WebAssembly: WebAssembly,
    WebIDL: WebIDL,
    wisp: wisp,
    Wollok: Wollok,
    X10: X10,
    xBase: xBase,
    XC: XC,
    Xojo: Xojo,
    XProc: XProc,
    XQuery: XQuery,
    XS: XS,
    XSLT: XSLT,
    Xtend: Xtend,
    Yacc: Yacc,
    YAML: YAML,
    YARA: YARA,
    YASnippet: YASnippet,
    ZAP: ZAP,
    Zeek: Zeek,
    ZenScript: ZenScript,
    Zephir: Zephir,
    Zig: Zig,
    ZIL: ZIL,
    Zimpl: Zimpl,
    'default': colors
});

function LanguageBar(props) {
    var _a = React__namespace.useState(), data = _a[0], setData = _a[1];
    React__namespace.useEffect(function () {
        function init() {
            return __awaiter(this, void 0, void 0, function () {
                var response, jsonResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!/\S+\/\S/gi.test(props.repository)) return [3 /*break*/, 8];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4 /*yield*/, fetch("https://api.github.com/repos/" + props.repository + "/languages")];
                        case 2:
                            response = _a.sent();
                            if (!!response.ok) return [3 /*break*/, 3];
                            throw new Error("Failed to fetch repository: " + props.repository);
                        case 3: return [4 /*yield*/, response.json()];
                        case 4:
                            jsonResponse = _a.sent();
                            setData(jsonResponse);
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            _a.sent();
                            throw new Error("Failed to fetch repository: " + props.repository);
                        case 7: return [3 /*break*/, 9];
                        case 8: throw new Error("Invalid repository: " + props.repository);
                        case 9: return [2 /*return*/];
                    }
                });
            });
        }
        init();
    }, []);
    if (data) {
        var total_1 = 0;
        Object.keys(data).forEach(function (lang) {
            total_1 += data[lang];
        });
        return (React__namespace.createElement("div", { style: { display: "flex-col" } },
			// Fontsize for Project title
            React__namespace.createElement("h2", { style: { color: props.textColor || "black", fontSize: 16 } }, "Languages"),
            React__namespace.createElement("div", null,
                React__namespace.createElement("ul", { style: { display: "flex", listStyleType: "none", margin: 0, padding: 0, overflow: 'hidden' } }, Object.keys(data).map(function (language, index) {
                    return (React__namespace.createElement("li", { key: language },
                        React__namespace.createElement("div", { style: {
                                backgroundColor: colors$1[language]["color"],
                                width: Math.max((data[language] / total_1) * props.width, 5),
                                height: 10,
                                marginRight: 2,
                                borderRadius: index === 0
                                    ? index === Object.keys(data).length - 1
                                        ? "10px 10px 10px 10px"
                                        : "10px 0 0 10px"
                                    : index === Object.keys(data).length - 1
                                        ? "0 10px 10px 0"
                                        : ""
                            } })));
                }))),
            React__namespace.createElement("div", { style: { width: props.width } },
                React__namespace.createElement("ul", { style: { display: "flex", flexWrap: "wrap", listStyleType: "none", margin: 0, padding: 0, overflow: 'hidden' } }, Object.keys(data).map(function (language) {
                    return (React__namespace.createElement("li", { key: language + "-name", style: {
                            margin: 2,
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center"
                        } },
                        React__namespace.createElement("span", { style: {
                                height: 10,
                                width: 10,
                                backgroundColor: colors$1[language]["color"],
                                borderRadius: "50%",
                                display: "inline-block"
                            } }),
							//Fontsize for languages
                        React__namespace.createElement("span", { style: {
								fontSize: 14,
                                fontWeight: 700,
                                marginLeft: 5,
                                marginRight: 5,
                                color: props.textColor || "black"
                            } }, language),
                        React__namespace.createElement("span", { style: { color: props.lightColor || "gray" } },
                            ((data[language] / total_1) * 100).toFixed(1),
                            "%")));
                })))));
    }
    else
        return null;
}

exports.default = LanguageBar;
//# sourceMappingURL=index.js.map
