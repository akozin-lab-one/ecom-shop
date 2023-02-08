<template>
  <div id="app">
    <section class="mt-3 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body content">
                <h4 class="card-title"><img :src='techImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 1300000</p>
                <div class="text-center">
                  <button class="btn btn-secondary" @click="alertMessage">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3 " style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='phoneImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 1800000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='standImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 190000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='usbImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 160000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='bankImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 150000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='laptopImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 1400000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='flipImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 1800000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 card-detail hover-zoom">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
              <div class="card-header d-none">Header</div>
              <div class="card-body">
                <h4 class="card-title"><img :src='assImage' class="img"></h4>
                <p class="card-text">Dell 2312 Inspire</p>
                <p class="text-warning">Ks 1500000</p>
                <div class="text-center">
                  <button class="btn btn-secondary">add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 mx-auto">
        <ul class="pagination pagination-sm mx-auto">
          <li class="page-item disabled">
            <a class="page-link" href="#">&laquo;</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

export default{
  data(){
    return{
      techImage : require('../image/mytech.jpg'),
      phoneImage : require('../image/phone.jpg'),
      standImage : require('../image/stamd.jpg'),
      usbImage : require('../image/usb.jpg'),
      assImage : require('../image/ass.jpg'),
      flipImage : require('../image/flip.png'),
      laptopImage : require('../image/laptop.jpg'),
      bankImage : require('../image/bank.jpg')
    }
  },
  methods:{
    alertMessage(){
      alert('You need to login Now!')
    }
  }
}
</script>

<style scoped>
.img{
  width:200px;
  height: 150px;
  margin-left: 12px;
}

.card-detail{
  cursor: pointer;
}

.card-color{
  background-color: gray;
}

.card .content button:hover{
    background-color: #ffac1c3f;
    cursor: pointer;
}
</style>
