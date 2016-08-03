function Imagen(_src,_height,_width,_x,_y,_z){
		
		imagen = {
			height: 50,
			width: 50,
			x: 0,
			y: 0,
			z: 0,
			src: _src,
			img: $("<img src=''>")[0],
			draw: function(){
				ctx.drawImage(this.img,this.x,this.y,this.height,this.width);
			},
			setSrc: function(_src){
				this.img.src = _src;
			}
		}
		imagen.setSrc(_src);
		if(_x){imagen.x = _x;};
		if(_y){imagen.y = _y;};
		if(_z){imagen.z = _z;};
		if(_height){imagen.height = _height;};
		if(_width){imagen.width = _width;};
		
		return imagen;
	}

function SuperCanvas(_id){
	var imagenes = [];
	var c= $("#"+_id)[0];
	ctx = c.getContext("2d");
	superCanvas = {
		addImagen: function(imagen){
			imagenes.push(imagen);
		},
		getCanvas: function(){
			return c;
		},
		clear: function(){
			ctx.clearRect(0,0,c.width,c.height);
		}	,
		imagenesByZ: function(){
			return imagenes.slice(0).sort(function(a,b){
					return a.z - b.z;
				}
			)
		},
		draw: function(){
			this.clear();
			this.imagenesByZ().map(function(imagen){
				imagen.draw();
			} )
		},
		start: function(){
			setInterval(function(){ superCanvas.draw(); }, 50);
		},
	};
	return superCanvas;
};