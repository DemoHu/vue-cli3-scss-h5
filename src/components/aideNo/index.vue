<!--
 * @Author: Siwen
 * @LastEditors: Siwen
 * @Date: 2019-04-26 11:30:13
 * @LastEditTime: 2019-04-26 16:55:57
 * @Description: 助手列表组件
 -->
<template>
  <div class="aide_no">
    <div class="aide_info_title">
      <div class="order_id">期数</div>
      <div class="type_name">
        <span v-if="aideType === 3">
          <div v-for="(item, index) in titelType3Arr" :key="index" class="title_dom title_dom_3">{{ item }}</div>
        </span>
        <span v-else-if="aideType === 4">
          <div v-for="(item, index) in titelType4Arr" :key="index" class="title_dom title_dom_4">{{ item }}</div>
        </span>
        <span v-else>
          <div v-for="(item, index) in titelType1Arr" :key="index" class="title_dom">{{ item }}</div>
        </span>
      </div>
    </div>
    <div class="aide_list">
      <div v-for="(item, index) in aideList" :key="index" class="aide_box_item">
        <div class="order_id">{{ item.orderId }}</div>
        <div class="type_name">
          <div 
            v-for="(items, indexs) in item.option"
            :key="indexs"
            :class="{
              'title_dom_da': items.desc === '大',
              'title_dom_xiao': items.desc === '小',
              'title_dom_dan': items.desc === '单',
              'title_dom_shuang': items.desc === '双',
              'title_dom_long': items.desc === '龙',
              'title_dom_hu': items.desc === '虎',
              'rank': aideType === 5,
              'is_even': aideType === 4 && items.isEven,
              'is_odd': aideType === 4 && !items.isEven,
              'is_big': aideType === 4 && items.isMax,
              'is_min': aideType === 4 && !items.isMax
            }"
            class="title_dom">{{ items.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
   
export default {
  name: 'aide_no',
  filters: {},
  props: {
    aideListProps: {
      type: null,
      default: ''
    },
    aideType: {
      type: null,
      default: ''
    }
  },
  data() {
    return {
      titelType1Arr: [
        '冠', '亚', '季', '四', '五', '六', '七', '八', '九', '十'
      ],
      titelType3Arr: [
        '冠', '亚', '季', '四', '五'
      ],
      titelType4Arr: [
        '冠', '亚', '和', '单', '双', '大', '小'
      ]
    }
  },
  computed: {
    aideList() {
      return this.aideListProps
    }
  },
  watch: {
    aideType() {
      if (this.aideType === 4) {
        this.aideList.forEach(item => {
          item.option = item.option.slice(0, 3)
          if (item.option[2].desc % 2) {
            item.option.push({ isEven: true })
            item.option.push({ isEven: false })
          } else {
            item.option.push({ isEven: false })
            item.option.push({ isEven: true })
          }
          if (+item.option[2].desc > 11) {
            item.option.push({ isMax: true })
            item.option.push({ isMax: false })
          } else {
            item.option.push({ isMax: false })
            item.option.push({ isMax: true })
          }
        })
      }
      console.log(this.aideType, '---')
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>
<style lang='scss'>
.aide_no {
  .aide_info_title {
    width: 100%;
    height: 29px;
    background-color: rgba(255,255,255,.17);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    font-size: 13px;
    color: $white;
    .order_id {
      width: 40px;
    }
    .type_name {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .title_dom {
        width: 9%;
        text-align: center;
      }
      .title_dom_3 {
        width: 51px;
      }
    }
  }
  .aide_list {
    .aide_box_item {
      margin: 3px 0;
      @extend .aide_info_title;
      .type_name {
        .title_dom {
          width: 9%;
          height: 23px;
          line-height: 23px;
          text-align: center;
          border-radius: 3px;
          font-size: 13px;
          color: #fff;
        }
        .title_dom_da {
          background-color: #307add;
        }
        .title_dom_xiao {
          background-color: #e6b42b;
          color: #a33f02
        }
        .title_dom_long {
           width: 51px;
          background-color: #307add;
        }
        .title_dom_hu {
          width: 51px;
          background-color: #e6b42b;
          color: #a33f02
        }
        .title_dom_dan {
          background-color: #1a938c;
        }
        .title_dom_shuang {
          background-color: #da6132;
        }
        .title_dom.is_even:nth-child(4) {
          background-color: #1a938c;
        }
        .title_dom.is_odd:nth-child(4) {
          border: solid .5px #ac91ad;
        }
        .title_dom.is_even:nth-child(5) {
          background-color: #1a938c;
        }
        .title_dom.is_odd:nth-child(5) {
          border: solid .5px #ac91ad;
        }
        .title_dom.is_big:nth-child(6) {
          background-color: #e6b42b;
        }
        .title_dom.is_min:nth-child(6) {
          border: solid .5px #ac91ad;
        }
        .title_dom.is_big:nth-child(7) {
          background-color: #e6b42b;
        }
        .title_dom.is_min:nth-child(7) {
          border: solid .5px #ac91ad;
        }
        .rank:nth-child(1) {
          background-color: #d54242;
        }
        .rank:nth-child(2) {
          background-color: #398f97;
        }
        .rank:nth-child(3) {
          background-color: #b59606;
        }
        .rank:nth-child(4) {
          background-color: #4a7437;
        }
        .rank:nth-child(5) {
          background-color: #9263c6;
        }
        .rank:nth-child(6) {
          background-color: #c15114;
        }
        .rank:nth-child(7) {
          background-color: #0547bf;
        }
        .rank:nth-child(8) {
          background-color: #788f88;
        }
        .rank:nth-child(9) {
          background-color: #a648b7;
        }
        .rank:nth-child(10) {
          background-color: #9d3d75;
        }
      }
    }
  }
}
</style>
