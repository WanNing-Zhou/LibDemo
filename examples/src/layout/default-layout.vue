<template>
    <div class="default-layout">
      <div class="aside">

        <template v-for="item in asideData"  :key="item.id">
          <drag :data="item">
            <div style="width: 100%; height: 100%; background: #646cff">{{item.key}}</div>
          </drag>
        </template>
      </div>
      <div class="container">
        <div class="box" style="height: 600px; background: black;">
          <GridDropContent v-model="data" :column="24" :gap="4" :row="10">
            <template #preview-item="{data}">
              <div style="width: 100%; height: 100%; background: #646cff">
                <template v-if="data.id == 2222">
                  <GridDropContent v-model="data2" :column="6" :gap="4" :row="6">
                    <template #preview-item="{data : item}">
                      <div style="width: 100%; height: 100%; background: #646cff">
                        {{item.w}} - {{item.h}}
                      </div>
                    </template>
                  </GridDropContent>
                </template>
                <template v-else>
                  {{data}}
                </template>
              </div>
            </template>
          </GridDropContent>
        </div>
        <hr>
        <div class="box" style="height: 600px; background: black;">
          <GridDropContent v-model="data3" :column="24" :gap="4" :row="10">
            <template #preview-item="{data}">
              <div style="width: 100%; height: 100%; background: #646cff">
                {{data}}
              </div>
            </template>
          </GridDropContent>
        </div>

        <h1 style="color: #efefef">展示组件</h1>
        <div class="box" style="height: 600px; background: black;">

          <preview-layout :data="data" :column="24" :gap="4" :row="10">
            <template #default="{data}">
              <div style="width: 100%; height: 100%; background: #646cff">
                {{data}}
              </div>
            </template>
          </preview-layout>
        </div>
      </div>

      </div>




</template>

<script setup lang="ts">
  import {GridDropContent,PreviewLayout, Drag} from "wq-draggable";
  import {reactive, ref, watchEffect} from "vue";


  const asideData = [
    { key: '1*1', w: 1, h: 1 },
    { key: '1*2', w: 1, h: 2 },
      { key: '1*3', w: 1, h: 3 },
      { key: '1*4', w: 1, h: 4 },
    {key: '2*1', w: 2, h: 1},
      {key: '2*2', w: 2, h: 2},
      {key: '2*3', w: 2, h: 3},
      {key: '2*4', w: 2, h: 4},
      {key: '3*1', w: 3, h: 1},
      {key: '3*2', w: 3, h: 2},
      {key: '3*3', w: 3, h: 3},
      {key: '3*4', w: 3, h: 4},
      {key: '4*1', w: 4, h: 1},
      {key: '4*2', w: 4, h: 2},
      {key: '4*3', w: 4, h: 3},
      {key: '4*4', w: 4, h: 4},
      {key: '5*1', w: 5, h: 1},
      {key: '5*2', w: 5, h: 2},
      {key: '5*3', w: 5, h: 3},
      {key: '5*4', w: 5, h: 4},
      {key: '6*1', w: 6, h: 1},
      {key: '6*2', w: 6, h: 2},
      {key: '6*3', w: 6, h: 3},
      {key: '6*4', w: 6, h: 4},
  ]

  const data = ref([
    {
      id: 1111,
      key: 'demo-component',
      title: '组件标题',
      group: 'dropDrap',
      w: 4,
      h: 4,
      x: 1,
      y: 1,
    },
    {
      id: 2222,

      key: 'demo-component',
      title: '组件标题',
      w: 5,
      h: 5,
      x: 5,
      y: 5,
    },
  ]);

  const data2 = ref([
    {
      id: 123,
      key: 'demo-component',
      title: '组件标题',
      w: 3,
      h: 3,
      x: 1,
      y: 1,
    }
  ])

  const data3 = ref([])

  const size = reactive({
    width: 0,
    height: 0
  })
  watchEffect(
      () => {
        console.log(size.width, size.height)
      }
  )
</script>

<style lang="scss" scoped>
.default-layout{
  //width: 100%;
  height: 96vh;
  background-color: black;
  overflow: auto;
  position: relative;
  .aside{
    width: 380px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4px;
    background-color: #333;
    //padding: 4px;
    position: absolute;
    left: 0;
    height: 100%;
  }
  .container{
    position: relative;
    margin-left: 400px;
    height: 100%;
    overflow: auto;

  }
  //display: flex;
  //justify-content: center;
  //align-items: center;
}
</style>