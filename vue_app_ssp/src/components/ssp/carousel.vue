<template>
<section>
  <div id="demo" class="carousel" :style="{width:innerWidth+'px'}">
    <!--1.轮播图片 赖锦洲todo-->
    <ul :class="ulClass" :style="ulStyle" class="carousel-inner">
      <li v-for="(img,i) of imgs" :key="i" :style="{width:innerWidth+'px'}">
        <router-link to="javascript:;" class="carousel-item">
          <img :src="img.src" :style="{width:innerWidth+'px'}"/>
        </router-link>
         <!--左下角作者-->
        <div class="carousel-user" :style="i=i ? 'display:block' : 'display:none'">
          <a></a>
          <a>{{img.uname}}</a>
        </div>
      </li>
      <li class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link to="javascript:;">
          <img :src="imgs[0].src" :style="{width:innerWidth+'px'}" />
        </router-link>
      </li>
    </ul>
   
    
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
      <span class="carousel-control-next-icon"></span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    
    <!--3.轮播指示符-->
    <ul class="carousel-indicators">
      <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''"  @click="moveTo(idx)"></li>
    </ul>
  </div>
</section>
  
</template>
<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      ulClass: { hasTrans: true },
      i: 0, //正在播放的图片
      imgs: [],
      canClick: true,
      timer: null
    }
  },
  created() {
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth;
    })
    this.start();
    this.load();
  },
  methods: {
    load(){
      this.axios.get("carousel").then(res=>{
        this.imgs=res.data.data;
        console.log(this.imgs);
      })
    },
    start() {
      this.timer = setInterval(() => {
        this.move(1);
      },3000);
    },
    move(i) {
      if (this.canClick) {
        this.canClick = false;
        if (i == -1 && this.i == 0) {
          this.ulClass.hasTrans = false;
          setTimeout(() => {
            this.i = this.imgs.length;
            setTimeout(() => {
              this.ulClass.hasTrans = true;
              this.i += i;
              setTimeout(() => {
                this.canClick = true;
              }, 500);
            }, 50);
          }, 50);
        } else if (i == 1 && this.i == this.imgs.length - 1) {
          this.i+=i;
          setTimeout(() => {
            this.ulClass.hasTrans = false;
            setTimeout(() => {
              this.i = 0;
              setTimeout(() => {
                this.ulClass.hasTrans = true;
                setTimeout(() => {
                  this.canClick = true;
                });
              }, 50);
            }, 50);
          }, 500);
        } else {
          this.i += i;
          setTimeout(() => {
            this.canClick = true;
          }, 300);
        }
      }
    },
    moveTo(i) {
      if (this.canClick) {
        this.i = i;
        this.canClick = false;
        setTimeout(() => {
          this.canClick = true;
        }, 300);
      }
    }
  },
  computed: {
    ulStyle() {
      var width = this.innerWidth * (this.imgs.length + 1) + "px";
      var marginLeft = -this.i * this.innerWidth + "px";
      return { width, marginLeft};
    }
  }
};
</script>
<style scoped>
section>.carousel{
  height:210px;
  position: relative;
  overflow:hidden;
}
section>.carousel>.carousel-inner{
  display:flex;
  list-style:none;
  height:100%;
  overflow:hidden;
  padding:0px;
}
section>.carousel>.carousel-inner.hasTrans{
  transition: all .5s linear;
}
section>.carousel>.carousel-inner>li img{
  height:100%;
}
section>.carousel>.carousel-inner>li .user_item{
  width:50%;
  height:20px;
  background:#f00;
}
section>.carousel>.carousel-indicators{
  position: absolute;
  list-style:none;
  display:flex;
  padding:0px;
  margin-top:-14%;
  margin-left:43%;
  cursor: pointer;
}
section>.carousel>.carousel-indicators li{
    float: left;
    width: 8px;
    height: 8px;
    background-color:#fff;
    border-radius: 100%;
    margin: 0 2px;
    cursor: pointer;
}
section>.carousel>.carousel-indicators li.active{
  background-color:blue;
  transform:scale(1.3);
}
 .carousel-control-prev,
  .carousel-control-next{
    position: absolute;
    top:50%;
    left:0;
    margin-left:10px;
    border-radius:0.25rem;
  }
  .carousel-control-next{
    position: absolute;
    margin-right:10px;
    left:349px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #fff;
    display:inline-block;
  }
  .carousel-control-prev{
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #fff;
    display:inline-block;
  }
  section>.carousel>.carousel-inner>li>.carousel-user{
    position:absolute;
    bottom:0;
    left:0;
    width:100px;
    height:40px;
  }
  section>.carousel>.carousel-inner>li>.carousel-user>a:first-child{
    display: inline-block;
    width:40px;
    height:40px;
    border-radius: 100%;
    background-size: 100%;
    text-decoration: none;
    cursor: pointer;
    position:absolute;
    left:5px;
  }
  section>.carousel>.carousel-inner>li>.carousel-user>a:last-child{
    display:inline-block;
    width:80px;
    height:20px;    
    text-decoration: none;
    position:absolute;
    left:45px;
    top:0px;
    font-size:10px;
    color:cornflowerblue;
  }
</style>