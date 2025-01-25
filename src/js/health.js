export function healthLevel(item) {

    if (item.health > 50) {
        return 'healthy'; 
    }     
    else if (item.health < 15) {
        return 'critical'; 
    }
    else {
        return 'wounded';  
    }

  }
