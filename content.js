chrome.runtime.onMessage.addListener(function(request){
    if (request = "hi") {

        const injectedCode = `
        alert("injected hacks successfully")
        // menus

var link = document.createElement("link");
link.rel="preconnect";
link.href="https://fonts.gstatic.com";
var link2 = document.createElement("link");
link2.href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
link2.rel="stylesheet";
document.head.appendChild(link,link2);


var menu = document.createElement("div");
menu.innerHTML = "Hacks:<ul><li>Infinite Jump</li><li>Infinite Ammo</li><li>Insta Kill</li> <li>Ultra Firerate</li> <li>Auto CTF</li></ul>"





var styles = {
    position: "absolute",
    fontFamily: "Roboto",
    marginLeft: "200px",
    marginTop: "100px",
    fontSize: "25px"

}

Object.assign(menu.style, styles)
console.log("Hack menu loaded")
document.body.appendChild(menu)

        var hacks = function(){
            










// actual hacks


setInterval(function(){

    
        //----------------------------------------------------------------
         
            var get = {};
            get.getEntityByName = function(a) {
                return Object.values(pc.app._entityIndex).find(get => get.name == a);
            };
            var nm = get.getEntityByName("NetworkManager");
         
        //----------------------------------------------------------------
         
        nm == (nm.script.network.setFlagBack(), nm.script.network.setSavedFlag(), nm.script.network.setCaptureFlag());
         
        //----------------------------------------------------------------
           
}, 1000)

 
            document.addEventListener("keydown", function(event) {
                console.log("hacks")
                if (event.keyCode === 32) {
                    setInterval(Movement.prototype.jump, 10)
                }
            });
            
            
                Movement.prototype.jump = function() {
            
                this.disablePeek(),
                    this.isCrouching = !1,
                    this.isJumping = 2,
                    this.app.tween(this.animation).to({
                        jumpAngle: -11
                    }, .15, pc.BackOut).start(),
                    this.isLanded = !1,
                    this.airTime = Date.now(),
                    this.jumpingTime = this.fullTimestamp + this.jumpDuration,
                    this.dynamicGravity = 0;
                var t = Math.floor(this.timestamp % 2) + 1;
                this.entity.sound.play("Jump-" + t)
            
            }
            
            
            Movement.prototype.shoot = function() {
            
            
            
            
            
                if (this.isShooting && this.nextShootTime < 10 && !this.isNetworkShooting && this.app.fire("Keyboard:State", "shoot", !0),
                    this.isShooting && this.nextShootTime < 0) {
                    var t = this.currentWeaponDetails,
                        e = t.recoil;
                    e *= 1.25, !1 === this.isFocusing ? true && "Handgun" == t.type ? this.setAnimation("Idle", 1, 0, !1, null, !0) : (this.setAnimation("Fire", 1, 0, !1, null, !0),
                            this.shootingTime = 1.2) : this.currentWeaponDetails.isSniper ? e *= .3 : e *= .8,
                        this.currentWeaponDetails.isShotgun && (this.shotgunBullets = 10),
                        this.entity.sound.play("Fire-" + t.name),
                        this.stats.bulletFired++,
                        this.nextBodyPosition.z += 0,
                        this.nextBodyRotation.x = 0,
                        this.nextBodyRotation.y = 0,
                        this.nextBodyRotation.z  = 0,
                        this.currentRecoilForce = 0
                        this.fireBullet(),
                        this.fireBullet(),
                        this.fireBullet(),
                        this.fireBullet(),
                        this.fireBullet(),
                        this.fireBullet(),
                        this.attachment.setMuzzle(),
                        this.currentBounceX = 0,
                        this.currentBounceY = 0,
                        this.lastBounceX = 0,
                        this.lastBounceY = 0,
                        this.shootRate = 0,
                        this.currentWeaponDetails.currentAmmo++;
                    var i = this.currentDate;
                    this.lastShootTime = i,
                        true || (this.shootLock = !0),
                        this.isNetworkShooting = !0
                }
            }}
            
            
            setInterval(hacks, 1000)
        
        `
        var script = document.createElement("script");
        script.textContent = injectedCode;
        (document.head).appendChild(script);
    }
})



