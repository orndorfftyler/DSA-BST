const bstree = require('./bstree')

function main() {
    let temp = new bstree;

    temp.insert(3,3) 
    temp.insert(1,1) 
    temp.insert(4,4) 
    temp.insert(6,6) 
    temp.insert(9,9) 
    temp.insert(2,2) 
    temp.insert(5,5) 
    temp.insert(7,7) 

    return temp
}

let BST = main()

//console.log(BST)

function main2() {
    let temp = new bstree;

    temp.insert('E','E') 
    temp.insert('A','A') 
    temp.insert('S','S') 
    temp.insert('Y','Y') 
    temp.insert('Q','Q') 
    temp.insert('U','U') 
    temp.insert('E','E') 
    temp.insert('S','S') 
    temp.insert('T','T') 
    temp.insert('I','I') 
    temp.insert('O','O') 
    temp.insert('N','N') 
    return temp
}

let BST2 = main2()

//console.log(BST2.right)

// 4. What does this program do?
// sums all values in the binary search tree
// O(2^n) exponential

// 5. Height of a BST
function height(t) {
    if(!t){
        return -1;
    } 
    
    let left = height(t.left)
    let right = height(t.right)
    
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }
}

//console.log(height(BST2))

// 6. is it a bst?

function check(t) {
  if (t == null) {
    return 1;
  }
     
  if (t.right != null && t.right.value < t.value) {
    return 0;
  }

  if (t.left != null && t.left.value > t.value) {
    return 0;
  }
     
  if (!check(t.left) || !check(t.right)) {
    return 0;
  }
     
  return 1;
}

//console.log(check(BST))

// 7. 3rd largest node

let out = []
function printInorder(t) {
    if (t == null) {
        return;
    }
    printInorder(t.left); 
    out.push(t.value); 
    printInorder(t.right); 
}

printInorder(BST)
//console.log(out[out.length-3])

// 8. Balanced BST

function isBal(t) {
    if (t == null) {
        return 1;
    }
  
    let lh = height(t.left);
    let rh = height(t.right);
  
    if (Math.abs(lh - rh) <= 1 && isBal(t.left) && isBal(t.right)) {
        return 1;
    }
  
    return 0;
}
console.log(isBal(BST2))
