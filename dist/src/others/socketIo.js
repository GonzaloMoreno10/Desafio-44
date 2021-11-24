"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initIo = void 0;

var _socket = require("socket.io");

var _productos = _interopRequireDefault(require("../services/productos"));

var _mensajes = _interopRequireDefault(require("../services/mensajes"));

var _datasourceSetting = require("../config/datasourceSetting");

var _normalizr = require("normalizr");

var _twilio = require("./twilio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initIo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (server) {
    var prods = yield _datasourceSetting.daoSelect.getAllProductos(); // let mensajes = await getMensajes(archMessg);

    var io = new _socket.Server(server);
    io.on('connection', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (socket) {
        var author = new _normalizr.schema.Entity('author', {}, {
          idAttribute: 'id'
        });
        var msg = new _normalizr.schema.Entity('mensajes', {
          author: author
        }, {
          idAttribute: '_id'
        });
        var msgSchema = new _normalizr.schema.Array(msg);
        socket.on('mensajes', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(function* (data) {
            var admin = 0;
            console.log('Me llego un Mensaje y lo voy a guardar');
            var mensaje = new _mensajes.default();
            mensaje.author.id = data.author.email;
            mensaje.author.nombre = data.author.nombre;
            mensaje.author.apellido = data.author.apellido;
            mensaje.author.edad = data.author.edad;
            mensaje.author.alias = data.author.alias;
            mensaje.author.avatar = data.author.avatar;
            mensaje.texto = data.texto;
            mensaje.fecha = data.fecha;

            if (mensaje) {
              var frase = mensaje.texto.split(' ');

              for (var i in frase) {
                if (frase[i] === '@administrador') {
                  admin = 1;
                }
              }

              if (admin == 1) {
                var response = yield _twilio.SmsService.sendMessage('+543548574529', "El usuario ".concat(mensaje.author.nombre, " ").concat(mensaje.author.apellido, " solicito al administrador.\n             ").concat(mensaje.texto));
                admin = 0;
                console.log(response);
              }

              yield _datasourceSetting.daoSelect.createMensaje(mensaje);
            }

            var mensajes = (yield _datasourceSetting.daoSelect.getAllMensajes()).map(data => ({
              _id: data._id,
              author: data.author,
              text: data.texto,
              avatar: data.author.avatar,
              date: data.fecha
            }));
            var msjNormalize = (0, _normalizr.normalize)(mensajes, msgSchema); //console.log (util.inspect (msjNormalize, true, 7, true));

            io.emit('mensajes', msjNormalize);
          });

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }());
        socket.on('productos', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(function* (data) {
            var produc = new _productos.default();
            produc.title = data.title;
            produc.price = data.price;
            produc.date = data.date;
            produc.code = data.code;
            produc.stock = data.stock, produc.description = data.description;
            produc.image = data.image;

            if (produc) {
              var prod = yield _datasourceSetting.daoSelect.createProducto(produc);

              if (prod) {
                prods = yield _datasourceSetting.daoSelect.getAllProductos();
                io.emit('productos', prods);
              }
            }
          });

          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }()); //Emito los mensajes

        socket.on('askProducts', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(function* (data) {
            var prods = yield _datasourceSetting.daoSelect.getAllProductos();
            socket.emit('productos', prods);
          });

          return function (_x5) {
            return _ref5.apply(this, arguments);
          };
        }());
        socket.on('askMensajes', /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(function* (data) {
            var mensajes = (yield _datasourceSetting.daoSelect.getAllMensajes()).map(data => ({
              _id: data._id,
              author: data.author,
              text: data.texto,
              avatar: data.author.avatar,
              date: data.fecha
            }));
            var msjNormalize = (0, _normalizr.normalize)(mensajes, msgSchema); //console.log (util.inspect (msjNormalize, true, 7, true));

            socket.emit('mensajes', msjNormalize);
          });

          return function (_x6) {
            return _ref6.apply(this, arguments);
          };
        }());
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  });

  return function initIo(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.initIo = initIo;