module.exports = function () {

function Phil(me, left, right) {
    rendezvous(left, function() {
        console.log(me, ' picked left fork');
        rendezvous(right, function() {
            console.log(me, ' picked right fork');
            rendezvous(left, function() {
                console.log(me, ' dropped left fork');
                rendezvous(right, function() {
                    console.log(me, ' dropped right fork');
                    setTimeout(function() { Phil(me, left, right) }, 0);
                });
            });
        });
    });
}

function Fork(me, left, right) {
    rendezvous(
        left, function() {
            rendezvous(left, function() {
                setTimeout(function() { Fork(me, left, right) }, 0);
            });
        },
        right, function() {
            rendezvous(right, function() {
                setTimeout(function() { Fork(me, left, right) }, 0);
            });
        }
    );
}

function rendezvous() {
    var args = arguments;
    var request = [];
    for (var i = 0; i < args.length / 2; i++) {
        request.push( { chan: args[i*2], func: args[i*2+1] } );
    }
    
    for (var i = 0; i < request.length; i++) {
        request[i].chan.add(request);
    }

    for (var i = 0; i < request.length; i++) {
        if (request[i].chan.match())
            break;
    }
}

function channel() {
    var self = this;
    var requests = [];
    
    self.add = function(req) {
        requests.push(req);
    }

    self.remove = function(req) {
        for (var i = 0; i < requests.length; i++) {
            if (requests[i] == req) {
                requests.splice(i, 1);
                break;
            }
        }
    }
    
    self.match = function() {
        if (requests.length != 2)
            return false;

        // copy array since it will be modified by 'remove' method call
        var reqs = requests.slice(0);
        var funcs = [];
        
        for (var i = 0; i < 2; i++) {
            var req = reqs[i];
            for (var j = 0; j < req.length; j++) {
                if (req[j].chan == self) {
                    funcs.push(req[j].func);
                    break;
                }
            }
            
            for (var j = 0; j < req.length; j++) {
                req[j].chan.remove(req);
            }
        }
        
        // assert(funcs.length == 2);
        // assert(requests.length == 0);
        
        for (var i = 0; i < funcs.length; i++) {
            funcs[i]();
        }
    }
}

var philToLeftFork = [];
var philToRightFork = [];

var N = 5;

for (var i = 0; i < N; i++) {
    philToLeftFork.push(new channel());
    philToRightFork.push(new channel());
}

for (var i = 0; i < N; i++) {
    var j = i;
    setTimeout(function() {
        Phil(j, philToRightFork[(j+1)%N], philToLeftFork[j]) }, 0);
    setTimeout(function() {
        Fork(j, philToLeftFork[j], philToRightFork[j]) }, 0);
}

console.log('Started');

}