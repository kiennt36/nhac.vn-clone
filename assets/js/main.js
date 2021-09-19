const videos = [
	{
		id: 1,
		image: 'https://i.ytimg.com/vi/-upQhCwTO90/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKajcFgJnIjrQjEEjtDg1etCYDdg',
		name: 'Nhạc Lofi 2021 - Những Bản Lofi Mix Chill Nhẹ Nhàng Cực Hay - Nhạc Trẻ Lofi Gây Nghiện Hay Nhất'
	},
	{
		id: 2,
		image: 'https://i.ytimg.com/vi/Buc_Tq7XJfE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBilXpyNZ8fQtpmIrsUvoD1h8b9Zg',
		name: 'Nhạc Lofi Chill Đường Tôi Chở Em Về - Mashup Rồi Tới Luôn Freak D Lofi Chill Sad Nhẹ Nhàng Hay Nhất'
	},
	{
		id: 3,
		image: 'https://i.ytimg.com/an_webp/ehom69ZEhnY/mqdefault_6s.webp?du=3000&sqp=CMC_3IkG&rs=AOn4CLA4DL3Qkiav9isXW9mdgvbLGozDbg',
		name: 'NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY - EDM Tik Tok ORINN REMIX, Lk Nhạc Trẻ 2021 Gây Nghiện Cực Hay'
	},
	{
		id: 4,
		image: 'https://i.ytimg.com/vi/LCkPfOAqJT0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVvDeZ2_6ZilBl7aQhqWWS-HGd-g',
		name: 'Nhạc chill 6h chiều ~ Lofi Vietnam Nhẹ Nhàng - CHẮC AI ĐÓ SẼ VỀ ~ Nhạc Chill Buồn Cực Hay'
	},
	{
		id: 5,
		image: 'https://i.ytimg.com/vi/T2WPms4lu3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6SF5Rxqd2f73o9ysuuzRmERA76w',
		name: 'Sài Gòn Đau Lòng Quá Lofi - Những Bản Lofi Việt Mix Nhẹ Nhàng Hay Nhất - Nhạc Lofi Buồn Cực Chill'
	},
	{
		id: 6,
		image: 'https://i.ytimg.com/an_webp/la-lghrJT-Q/mqdefault_6s.webp?du=3000&sqp=CPjK3IkG&rs=AOn4CLC1XaxKY03IrwEpFattvMKed0NALQ',
		name: 'Nhạc Lofi 2021 - Những Bản Lofi Mix Chill Nhẹ Nhàng Cực Hay - Nhạc Trẻ Lofi Gây Nghiện Hay Nhất'
	},
]

const videoList = document.querySelector('.videoList')

document.addEventListener("DOMContentLoaded", () => {
	let result = ''
	for(let i = 0; i < videos.length; i++) {
		result += 
		`
			<div class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-2 col-xl-2">
		    	<div class="card" style="width: 18rem;">
				  <img src="${videos[i].image}" alt="...">
				  <div class="card-body">
				    <h5 class="card-title fs-2">
				    	${videos[i].name}
				    </h5>
				    <p class="card-text">Orrin offical</p>
				    <a href="playVideo.html" class="btn btn-primary" data-id="${videos[i].id}">play</a>
				  </div>
				</div>
		    </div>
		  </div>
		`
	}

	videoList.innerHTML = result


	const btns = document.querySelectorAll('.btn')

	btns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()
			const id = e.target.dataset.id
			localStorage.setItem('idVideo', id)
			window.location.href = 'playVideo.html'
		})
	})
})