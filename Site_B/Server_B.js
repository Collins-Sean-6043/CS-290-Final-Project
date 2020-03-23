require('events').EventEmitter.defaultMaxListeners = 0
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var port = 8888;

function handler (req, res) {
  fs.readFile(__dirname + '/Site_B.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading Site_B.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var lastPosition = { x: 0, y: 0 }; // whatever default data


// Black King Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BK', lastPosition);
    socket.on('receive_position_BK', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BK', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Queen Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BQ', lastPosition);
    socket.on('receive_position_BQ', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BQ', data); // send `data` to all other clients
       console.log(data)
    });
});
// Whtie King Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WK', lastPosition);
    socket.on('receive_position_WK', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WK', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Queen Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WQ', lastPosition);
    socket.on('receive_position_WQ', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WQ', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Rook Right Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WRR', lastPosition);
    socket.on('receive_position_WRR', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WRR', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Rook left Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WRL', lastPosition);
    socket.on('receive_position_WRL', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WRL', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Rook Right Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BRR', lastPosition);
    socket.on('receive_position_BRR', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BRR', data); // send `data` to all other clients
       console.log(data)
    });
});

// Black Rook Left Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BRL', lastPosition);
    socket.on('receive_position_BRL', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BRL', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Bishop Left Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WBL', lastPosition);
    socket.on('receive_position_WBL', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WBL', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Bishop Right Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WBR', lastPosition);
    socket.on('receive_position_WBR', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WBR', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Bishop Left Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BBL', lastPosition);
    socket.on('receive_position_BBL', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BBL', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Bishop Right Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BBR', lastPosition);
    socket.on('receive_position_BBR', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BBR', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Knight Left Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WKL', lastPosition);
    socket.on('receive_position_WKL', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WKL', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Knight Right Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WKR', lastPosition);
    socket.on('receive_position_WKR', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WKR', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Knight Left Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BKL', lastPosition);
    socket.on('receive_position_BKL', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BKL', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Knight Right Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BKR', lastPosition);
    socket.on('receive_position_BKR', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BKR', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn One Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP1', lastPosition);
    socket.on('receive_position_WP1', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP1', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Two Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP2', lastPosition);
    socket.on('receive_position_WP2', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP2', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Three Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP3', lastPosition);
    socket.on('receive_position_WP3', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP3', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Four Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP4', lastPosition);
    socket.on('receive_position_WP4', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP4', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Five Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP5', lastPosition);
    socket.on('receive_position_WP5', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP5', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Six Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP6', lastPosition);
    socket.on('receive_position_WP6', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP6', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Sevn Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP7', lastPosition);
    socket.on('receive_position_WP7', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP7', data); // send `data` to all other clients
       console.log(data)
    });
});
// White Pawn Eight Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_WP8', lastPosition);
    socket.on('receive_position_WP8', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_WP8', data); // send `data` to all other clients
       console.log(data)
    });
});

// Black Pawn One Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP1', lastPosition);
    socket.on('receive_position_BP1', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP1', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Two Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP2', lastPosition);
    socket.on('receive_position_BP2', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP2', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Three Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP3', lastPosition);
    socket.on('receive_position_BP3', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP3', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Four Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP4', lastPosition);
    socket.on('receive_position_BP4', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP4', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Five Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP5', lastPosition);
    socket.on('receive_position_BP5', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP5', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Six Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP6', lastPosition);
    socket.on('receive_position_BP6', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP6', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Sevn Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP7', lastPosition);
    socket.on('receive_position_BP7', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP7', data); // send `data` to all other clients
       console.log(data)
    });
});
// Black Pawn Eight Update
io.sockets.on('connection', function (socket) {
    socket.emit('update_position_BP8', lastPosition);
    socket.on('receive_position_BP8', function (data) {
       lastPosition = data;
       socket.broadcast.emit('update_position_BP8', data); // send `data` to all other clients
       console.log(data)
    });
});

app.listen(port, function(){
    console.log('listening on port: ' + port);
});
