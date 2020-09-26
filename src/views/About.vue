<template>
  <div></div>
   
</template>
<script>

export default {
  name: 'About',
	data() {
			return {
				radio: '',
				radio2:'',
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				currentRate: 30,
				rate:20,
				gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
			}
		},
		computed: {
			text() {
				return this.currentRate.toFixed(0) + '%'
			}
		},
		methods: {
			
		}
	}
</script>