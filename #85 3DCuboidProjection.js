input = prompt('Please input length, height, depth');
input = input.split(' ');

var length = input[0],
    height = input[1],
    depth = input[2];

function createFace(symbol, t) {
    var temp = '';
    for (var i = 0; i < t; i++) {
        temp += symbol;
    }
    return temp;
}
drawing = [];
for (var i = 0; i < depth; i++) {
    drawing.push(createFace(' ',depth-1-i)+createFace('+',length)+'/'+createFace('.',i));
}
for(var i=0;i<height;i++){
    depth = height-1-i < depth?height-1-i:depth;
  drawing.push(createFace('#',length)+createFace('.',depth));
}
alert(drawing.join('\n'));