console.log(recurArray([1, 3, 2, 1]));

function recurArray(sequence) {
    if(sequence.length === 1 || sequence.length === 2) {
        return true;
    } else {
        var data = true;
        for(var i = 0; i < sequence.length; i++) {

			console.log((sequence) + ' ' + i + ' ' + (sequence.length -i) + ' ' + sequence.slice(i, (sequence.length -i)));
			data = data && isSequence(sequence.slice(i, sequence.length -i));
        }
        return data;
    }
}

function isSequence(seq) {
	var i;
    for(i = (seq.length + 1); i > 1; i--){
        if(seq[i] < seq[i-1]) {
            return false;
        }
    }
    return true;
}