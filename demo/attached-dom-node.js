(function(){
    setTimeout(() => {
        const t = tree(document.scripts[1], window, parseInt(limit.value));
        console.log(treeify.asTree(t));
    });
}());