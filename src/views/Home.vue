<template>
	<div class="container">
		<div style="width: 256px">
			<a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
				<a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
			</a-button>
			<a-menu
				:default-selected-keys="['1']"
				:default-open-keys="['sub1']"
				mode="inline"
				theme="dark"
				:inline-collapsed="collapsed"
			>
				<a-menu-item key="1">
					<a-icon type="pie-chart" />
					<span>功能1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="desktop" />
					<span>功能2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="inbox" />
					<span>功能3</span>
				</a-menu-item>
				<a-sub-menu key="sub1">
					<span slot="title"><a-icon type="mail" /><span>功能4</span></span>
					<a-menu-item key="5">
						功能5
					</a-menu-item>
					<a-menu-item key="6">
						功能6
					</a-menu-item>
					<a-menu-item key="7">
						功能7
					</a-menu-item>
					<a-menu-item key="8">
						功能8
					</a-menu-item>
				</a-sub-menu>
				<a-sub-menu key="sub2">
					<span slot="title"><a-icon type="appstore" /><span>功能9</span></span>
					<a-menu-item key="9">
						功能10
					</a-menu-item>
					<a-menu-item key="10">
						功能11
					</a-menu-item>
					<a-sub-menu key="sub3" title="Submenu">
						<a-menu-item key="11">
							功能12
						</a-menu-item>
						<a-menu-item key="12">
							功能13
						</a-menu-item>
					</a-sub-menu>
				</a-sub-menu>
			</a-menu>
		</div>
		<div class="box">
			<router-view></router-view>
			<p>123456789</p>
		</div>
		
		
	</div>
  
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style scoped>
	
</style>


