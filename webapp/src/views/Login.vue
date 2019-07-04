<template>
  <div>
    <canvas id="canv"></canvas>
    <img class="login-logo" src="@/assets/logo.png">
    <div class="loginDom">
      <div class="login">
        <div class="login-mainbox">
          <div class="login-left">
            <img src="@/assets/login-img-1.png">
          </div>
          <div class="login-wrap">
            <div class="login-header-text">
              <img src="@/assets/logo.png">
              <span class="name">贝肯伟</span>·
              <span>小程序</span>
            </div>
            <input type="text" placeholder="手机号或用户名" class="ivu-input" />
            <input type="text" placeholder="登录密码" class="ivu-input" />
            <input type="text" placeholder="登录密码" class="ivu-input" />
            <div class="ivu-form-item-content">
              <div class="ivu-col ivu-col-span-12">
                <label class="login-auto ivu-checkbox-wrapper">
                  <input type="checkbox" name="aotulogin" />自动登录
                </label>
              </div>
              <div class="ivu-col ivu-col-span-12">
                <a href="/account/resetpassword">忘记密码?</a>
              </div>
            </div>
            <div class="ivu-form-item">
              <!-- <router-link to="/Homecli"> -->
                <button class="login-btn" @click="loginss">登录</button>
              <!-- </router-link> -->
            </div>
            <div class="ivu-form-item-content input-box">
              <div class="ivu-col ivu-col-span-12">
                自动登录
              </div>
              <div class="ivu-col ivu-col-span-12">
                自动登录
              </div>
            </div>
          </div>
        </div>
        <div class="link-groups">
          <a href="https://mch.wxrrd.com/auth/login" target="_blank" class="link-item">
            <img src="https://s.dodoca.com/applet_mch/images/login/renren.png?v=2" />
          </a>
          <a href="https://mch.wxrrd.com/auth/login" target="_blank" class="link-item">
            <img src="https://s.dodoca.com/applet_mch/images/login/renren.png?v=2" />
          </a>
          <a href="https://mch.wxrrd.com/auth/login" target="_blank" class="link-item">
            <img src="https://s.dodoca.com/applet_mch/images/login/renren.png?v=2" />
          </a>
          <div class="other">
            <a href="http://wsy.dodoca.com/login?redirect=%2F" target="_blank">微商易</a>
            <span style="border: 1px solid rgb(202, 201, 201);"></span>
            <a href="http://wsy.dodoca.com/login?redirect=%2F" target="_blank">微商易</a>
            <span style="border: 1px solid rgb(202, 201, 201);"></span>
            <a href="http://wsy.dodoca.com/login?redirect=%2F" target="_blank">微商易</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      
    };
  },
  methods: {
    loginss() {
      console.log('登录接口调用')
      let id = 1;
      this.$router.push({
        path: `/homecli?id=${id}`
      })
    },
    dtr(d) {
      return (d * Math.PI) / 180;
    },

    rnd() {
      return Math.sin((Math.floor(Math.random() * 360) * Math.PI) / 180);
    },
    dist(p1, p2, p3) {
      return Math.sqrt(
        Math.pow(p2.x - p1.x, 2) +
          Math.pow(p2.y - p1.y, 2) +
          Math.pow(p2.z - p1.z, 2)
      );
    }
  },
  mounted() {
    var num = 200;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var max = 100;
    var _x = 0;
    var _y = 0;
    var _z = 150;
    var dtr = function(d) {
      return (d * Math.PI) / 180;
    };

    var rnd = function() {
      return Math.sin((Math.floor(Math.random() * 360) * Math.PI) / 180);
    };
    var dist = function(p1, p2, p3) {
      return Math.sqrt(
        Math.pow(p2.x - p1.x, 2) +
          Math.pow(p2.y - p1.y, 2) +
          Math.pow(p2.z - p1.z, 2)
      );
    };

    var cam = {
      obj: {
        x: _x,
        y: _y,
        z: _z
      },
      dest: {
        x: 0,
        y: 0,
        z: 1
      },
      dist: {
        x: 0,
        y: 0,
        z: 200
      },
      ang: {
        cplane: 0,
        splane: 0,
        ctheta: 0,
        stheta: 0
      },
      zoom: 1,
      disp: {
        x: w / 2,
        y: h / 2,
        z: 0
      },
      upd: function() {
        cam.dist.x = cam.dest.x - cam.obj.x;
        cam.dist.y = cam.dest.y - cam.obj.y;
        cam.dist.z = cam.dest.z - cam.obj.z;
        cam.ang.cplane =
          -cam.dist.z /
          Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
        cam.ang.splane =
          cam.dist.x /
          Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
        cam.ang.ctheta =
          Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) /
          Math.sqrt(
            cam.dist.x * cam.dist.x +
              cam.dist.y * cam.dist.y +
              cam.dist.z * cam.dist.z
          );
        cam.ang.stheta =
          -cam.dist.y /
          Math.sqrt(
            cam.dist.x * cam.dist.x +
              cam.dist.y * cam.dist.y +
              cam.dist.z * cam.dist.z
          );
      }
    };

    var trans = {
      parts: {
        sz: function(p, sz) {
          return {
            x: p.x * sz.x,
            y: p.y * sz.y,
            z: p.z * sz.z
          };
        },
        rot: {
          x: function(p, rot) {
            return {
              x: p.x,
              y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
              z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))
            };
          },
          y: function(p, rot) {
            return {
              x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
              y: p.y,
              z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))
            };
          },
          z: function(p, rot) {
            return {
              x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
              y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
              z: p.z
            };
          }
        },
        pos: function(p, pos) {
          return {
            x: p.x + pos.x,
            y: p.y + pos.y,
            z: p.z + pos.z
          };
        }
      },
      pov: {
        plane: function(p) {
          return {
            x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
            y: p.y,
            z: p.x * -cam.ang.splane + p.z * cam.ang.cplane
          };
        },
        theta: function(p) {
          return {
            x: p.x,
            y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
            z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta
          };
        },
        set: function(p) {
          return {
            x: p.x - cam.obj.x,
            y: p.y - cam.obj.y,
            z: p.z - cam.obj.z
          };
        }
      },
      persp: function(p) {
        return {
          x: ((p.x * cam.dist.z) / p.z) * cam.zoom,
          y: ((p.y * cam.dist.z) / p.z) * cam.zoom,
          z: p.z * cam.zoom,
          p: cam.dist.z / p.z
        };
      },
      disp: function(p, disp) {
        return {
          x: p.x + disp.x,
          y: -p.y + disp.y,
          z: p.z + disp.z,
          p: p.p
        };
      },
      steps: function(_obj_, sz, rot, pos, disp) {
        var _args = trans.parts.sz(_obj_, sz);
        _args = trans.parts.rot.x(_args, rot);
        _args = trans.parts.rot.y(_args, rot);
        _args = trans.parts.rot.z(_args, rot);
        _args = trans.parts.pos(_args, pos);
        _args = trans.pov.plane(_args);
        _args = trans.pov.theta(_args);
        _args = trans.pov.set(_args);
        _args = trans.persp(_args);
        _args = trans.disp(_args, disp);
        return _args;
      }
    };

    (function() {
      "use strict";
      var threeD = function(param) {
        this.transIn = {};
        this.transOut = {};
        this.transIn.vtx = param.vtx;
        this.transIn.sz = param.sz;
        this.transIn.rot = param.rot;
        this.transIn.pos = param.pos;
      };

      threeD.prototype.vupd = function() {
        this.transOut = trans.steps(
          this.transIn.vtx,
          this.transIn.sz,
          this.transIn.rot,
          this.transIn.pos,
          cam.disp
        );
      };

      var Build = function() {
        this.vel = 0.04;
        this.lim = 360;
        this.diff = 200;
        this.initPos = 100;
        this.toX = _x;
        this.toY = _y;
        this.go();
      };

      Build.prototype.go = function() {
        this.canvas = document.getElementById("canv");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.$ = canv.getContext("2d");
        this.$.globalCompositeOperation = "source-over";
        this.varr = [];
        this.dist = [];
        this.calc = [];

        for (var i = 0, len = num; i < len; i++) {
          this.add();
        }

        this.rotObj = {
          x: 0,
          y: 0,
          z: 0
        };
        this.objSz = {
          x: w / 5,
          y: h / 5,
          z: w / 5
        };
      };

      Build.prototype.add = function() {
        this.varr.push(
          new threeD({
            vtx: {
              x: rnd(),
              y: rnd(),
              z: rnd()
            },
            sz: {
              x: 0,
              y: 0,
              z: 0
            },
            rot: {
              x: 20,
              y: -20,
              z: 0
            },
            pos: {
              x: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
              y: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
              z: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180)
            }
          })
        );
        this.calc.push({
          x: 360 * Math.random(),
          y: 360 * Math.random(),
          z: 360 * Math.random()
        });
      };

      Build.prototype.upd = function() {
        cam.obj.x += (this.toX - cam.obj.x) * 0.05;
        cam.obj.y += (this.toY - cam.obj.y) * 0.05;
      };

      Build.prototype.draw = function() {
        this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);
        cam.upd();
        this.rotObj.x += 0.1;
        this.rotObj.y += 0.1;
        this.rotObj.z += 0.1;

        for (var i = 0; i < this.varr.length; i++) {
          for (var val in this.calc[i]) {
            if (this.calc[i].hasOwnProperty(val)) {
              this.calc[i][val] += this.vel;
              if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;
            }
          }

          this.varr[i].transIn.pos = {
            x: this.diff * Math.cos((this.calc[i].x * Math.PI) / 180),
            y: this.diff * Math.sin((this.calc[i].y * Math.PI) / 180),
            z: this.diff * Math.sin((this.calc[i].z * Math.PI) / 180)
          };
          this.varr[i].transIn.rot = this.rotObj;
          this.varr[i].transIn.sz = this.objSz;
          this.varr[i].vupd();
          if (this.varr[i].transOut.p < 0) continue;
          var g = this.$.createRadialGradient(
            this.varr[i].transOut.x,
            this.varr[i].transOut.y,
            this.varr[i].transOut.p,
            this.varr[i].transOut.x,
            this.varr[i].transOut.y,
            this.varr[i].transOut.p * 2
          );
          this.$.globalCompositeOperation = "lighter";
          g.addColorStop(0, "hsla(255, 255%, 255%, 1)");
          g.addColorStop(0.5, "hsla(" + (i + 2) + ",85%, 40%,1)");
          g.addColorStop(1, "hsla(" + i + ",85%, 40%,.5)");
          this.$.fillStyle = g;
          this.$.beginPath();
          this.$.arc(
            this.varr[i].transOut.x,
            this.varr[i].transOut.y,
            this.varr[i].transOut.p * 2,
            0,
            Math.PI * 2,
            false
          );
          this.$.fill();
          this.$.closePath();
        }
      };
      Build.prototype.anim = function() {
        window.requestAnimationFrame = (function() {
          return (
            window.requestAnimationFrame ||
            function(callback, element) {
              window.setTimeout(callback, 1000 / 60);
            }
          );
        })();
        var anim = function() {
          this.upd();
          this.draw();
          window.requestAnimationFrame(anim);
        }.bind(this);
        window.requestAnimationFrame(anim);
      };

      Build.prototype.run = function() {
        this.anim();

        window.addEventListener(
          "mousemove",
          function(e) {
            this.toX = (e.clientX - this.canvas.width / 2) * -0.8;
            this.toY = (e.clientY - this.canvas.height / 2) * 0.8;
          }.bind(this)
        );
        window.addEventListener(
          "touchmove",
          function(e) {
            e.preventDefault();
            this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8;
            this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8;
          }.bind(this)
        );
        window.addEventListener(
          "mousedown",
          function(e) {
            for (var i = 0; i < 100; i++) {
              this.add();
            }
          }.bind(this)
        );
        window.addEventListener(
          "touchstart",
          function(e) {
            e.preventDefault();
            for (var i = 0; i < 100; i++) {
              this.add();
            }
          }.bind(this)
        );
      };
      var app = new Build();
      app.run();
    })();
    window.addEventListener(
      "resize",
      function() {
        canvas.width = w = window.innerWidth;
        canvas.height = h = window.innerHeight;
      },
      false
    );
  }

  //   var num = 200;
  // var w = window.innerWidth;
  // var h = window.innerHeight;
  // var max = 100;
  // var _x = 0;
  // var _y = 0;
  // var _z = 150;
};
</script>

<style lang="less">
html {
  height: 100%;
  background-image: -webkit-radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);
  background-image: radial-gradient(ellipse farthest-corner at center top, #000d4d 0%, #000105 100%);
  // cursor: move;
}
body {
  width: 100%;
  margin: 0;
  overflow: hidden;
}
/* Demo Buttons Style */
.codrops-demos {
  font-size: 0.8em;
  text-align: center;
  position: absolute;
  z-index: 99;
  width: 96%;
}

.codrops-demos a {
  display: inline-block;
  margin: 0.35em 0.1em;
  padding: 0.5em 1.2em;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  border-radius: 2px;
  font-size: 110%;
  border: 2px solid transparent;
  color: #fff;
}

.codrops-demos a:hover,
.codrops-demos a.current-demo {
  border-color: #383a3c;
}
.loginDom{
  background-color: rgba(0, 0, 0, .01);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login{
  width: 873px;
  height: 542px;
}
.login-mainbox{
  width: 873px;
  height: 482px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-groups {
  width: 873px;
  height: 50px;
  margin-top: 10px;
  a{
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
  }
  .link-item{
    margin-right: 10px;
  }
  .link-item,img{
    width: 173px;
    height: 50px;
  }
  .other{
    width: 311px;
    height: 50px;
    background: rgba(239,238,235,0.9);
    line-height: 50px;
    float: right;
    a{
      width: 98px;
      display: inline-block;
      text-align: center;
      font-size: 16px;
      color: #373232;
    }
    span{
      border: 1px solid rgb(202, 201, 201);
    }
  }
}
.login-left{
  width: 507px;
  height: 482px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.2);
  img{
    width: 403px;
    height: 390px;
  }
}
.login-wrap{
  width: 366px;
  height: 482px;
  background-color: rgba(0,0,0,.5);
  .login-header-text {
    margin-top: 23px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 15px;
    .name{
      font-size: 20px;
      font-weight: 600;
    }
    img{
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
  .ivu-input{
    width: 254px;
    height: 44px;
    padding: 0px 14px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 2px;
    margin-bottom: 24px;
  }
  .ivu-form-item-content{
    padding: 0 40px 0 40px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }
  .input-box{
    color: #f14c47;
  }
  .ivu-form-item{
    padding: 0 40px 0 40px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-btn{
      width: 282px;
      height: 51px;
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 2px;
      background-color: #f14c47;
      border-color: #f14c47;
      border-width: 0;
      color: #fff;
    }
  }
}
.login-logo{
  position: absolute;
  top: 30px;
  left: 30px;
  width: 130px;
  height: 50px;
}


</style>
