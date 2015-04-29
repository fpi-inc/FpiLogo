function FpiLogo(contex) {
	try{
		version = contex? 'v'+contex.version : '';
	}
	catch (e){}
	var logo = 
'\n' +

red('\     ___         ___ \n') +              
red('\    /  /\\       /  /\\      ___\n') +     
red('\   /  /:/_     /  /::\\    /  /\\\n') +    
purple('\  /  /:/ /\\   /  /:/\\:\\  /  /:/\n') +    
purple('\ /  /:/ /:/  /  /:/~/:/ /__/::\\\n') +    
green('\/__/:/ /:/  /__/:/ /:/  \\__\\/\\:\\__\n') + 
green('\\\  \\:\\/:/   \\  \\:\\/:/      \\  \\:\\/\\\n') +
purple('\ \\  \\::/     \\  \\::/        \\__\\::/\n') +
purple('\  \\  \\:\\      \\  \\:\\        /__/:/\n') + 
blue('\   \\  \\:\\      \\  \\:\\       \\__\\/\n') +  
blue('\    \\__\\/       \\__\\/\n\n') + ' ' + red(version) + '\n\n';           

	logo += ('need help?')+ purple('  ===>  ') + green('yo fpi-web:h') + '\n';

	if(contex){
		logo += '\ndescription: '+green(contex.description.toUpperCase())+'\n';
	}

	return logo;
};

exports.FpiLogo = FpiLogo;

function consoleColor(str,num){
	if (!num) {
		num = '32';
	}
	return "\033[" + num +"m" + str + "\033[0m"
}

function green(str){
	return consoleColor(str,32);
}

function yellow(str){
	return consoleColor(str,33);
}

function red(str){
	return consoleColor(str,31);
}

function blue(str){
	return consoleColor(str,34);
}

function purple(str){
	return consoleColor(str,36);
}

//console.log(FpiLogo());