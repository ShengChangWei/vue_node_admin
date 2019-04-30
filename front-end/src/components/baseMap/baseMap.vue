<template>
  <div class="map">
    <div class="map-left" @mouseenter="changeMap='left'">
      <e-vue-esrimapjs v-on:exentChange="onLeftExtentChange($event)" :mapType="'tdt'" :esriCSSUrl="esriCSSUrl" :mapUrl="['vec','cva']" :submapUrl="[['img','cia'], ['ter','cta']]" :geoUrl="geoUrl" :initExtent="initExtent" :gisApiUrl="gisApiUrl" v-on:mapReady="onLeftMapReady($event)">
      </e-vue-esrimapjs>
    </div>
    <div class="map-right" @mouseenter="changeMap='right'">
      <e-vue-esrimapjs v-on:exentChange="onRightExtentChange($event)" :mapType="'tdt'" :esriCSSUrl="esriCSSUrl" :mapUrl="['vec','cva']" :submapUrl="[['img','cia'], ['ter','cta']]" :geoUrl="geoUrl" :initExtent="initExtent" :gisApiUrl="gisApiUrl" v-on:mapReady="onRightMapReady($event)">
      </e-vue-esrimapjs>
    </div>

    <div class="basemap-panel">
      <span @click="changeBaseLayer(0)" title="影像">
        <img src="@/assets/images/map/img_layer.jpg" />
      </span>
      <span @click="changeBaseLayer(1)" title="地图">
        <img src="@/assets/images/map/vec_layer.jpg" />
      </span>
      <span @click="changeBaseLayer(2)" title="地形">
        <img src="@/assets/images/map/ter_layer.jpg" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-map",
  data() {
    return {
      leftMapComponent: "",
      leftMap: "",
      rightMapComponent: "",
      rightMap: "",
      mapUrl:
        "https://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer",
      geoUrl:
        "https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
      gisApiUrl: "https://js.arcgis.com/3.23/",
      esriCSSUrl: "https://js.arcgis.com/3.23/esri/css/esri.css",
      initExtent: {
        xmax: 116.39029888900006,
        xmin: 116.04209077900009,
        ymax: 40.161018230000025,
        ymin: 39.885287565000056
      },
      initExtent2: {
        xmax: 12980277.986602597,
        xmin: 12934415.769631553,
        ymax: 4864627.423165954,
        ymin: 4841696.314680432
      },
      changeMap: "left"
    };
  },
  methods: {
    /**
     * 天地图地图加载完成
     * @param $event
     */
    onLeftMapReady($event) {
      this.leftMapComponent = $event;
      this.leftMap = this.leftMapComponent.map;
      // this.leftMapComponent.setExtent(this.initExtent);
      // console.log( this.leftMapComponent)
    },
    onRightMapReady($event) {
      this.rightMapComponent = $event;
      this.rightMap = this.rightMapComponent.map;
      // this.rightMapComponent.setExtent(this.initExtent);
    },

    /**
     * 两边联动
     * @param evt
     */
    onLeftExtentChange(evt) {
      if (this.changeMap === "left" && this.rightMap) {
        this.rightMap.setExtent(evt.extent);
      }
    },

    /**
     * 两边联动
     * @param evt
     */
    onRightExtentChange(evt) {
      if (this.changeMap === "right" && this.leftMap) {
        this.leftMap.setExtent(evt.extent);
      }
    },
    /**
     * 切换底图
     * @param index
     */
    changeBaseLayer(index) {
      this.leftMapComponent.changeBaseLayer(index);
      this.rightMapComponent.changeBaseLayer(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  .map-left {
    float: left;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #c4fa00;
  }
  .map-right {
    float: right;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-left: 1px solid #c4fa00;
  }
  .basemap-panel {
    position: absolute;
    top: 30px;
    right: 0;
    text-align: center;

    span {
      display: inline-block;
      background-color: #fff;
      margin-right: 5px;
      width: 80px;
      height: 60px;
      overflow: hidden;
      border: 1px solid #0b88c0;
      cursor: pointer;

      &:hover {
        border: 3px solid #1a9bd5;
      }

      img {
        max-height: 100%;
      }
    }
  }
}
</style>


