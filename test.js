const { countReset } = require("console");

const data = [
  {
    1: {
      label: 'root',
      children: [
        {
          2: {
            label: 'ant',
            children: [],
          },
        },
        {
          3: {
            label: 'bear',
            children: [
              {
                4: {
                  label: 'cat',
                  children: [],
                },
                5: {
                  label: 'dog',
                  children: [
                    {
                      6: {
                        label: 'elephant',
                        children: [],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
        7: {
            label: 'frog',
            children: [],
          }
        }
      ],
    },
  },
];

console.log(data[0][1].children)

// const addDataToId = (obj, parent, label) => {
// const newChild = { 100: { label: label, children: [] } };
//console.log(obj)
//   if (JSON.stringify(data).indexOf(parent) === -1) {
//     return [...data, newChild];
//   }
  // get max value of all keys
//   if (typeof obj === 'object') {
//     for (const key in obj) {
//       if (key === parent) {
//         obj[key].children = [...(obj[key].children || []), newChild];
//       } else {findKey(obj[key].children || [], parent, label)}
//     }
//   }
//   return obj;

//     for (let key in obj) {
//     if (key === parent) {
//       obj[key].children = [...(obj[key].children || []), newChild];
//     }
//     else {
//       addDataToId(obj[key].children || [], parent, label);
//     }
//   };
//   return obj;
// };

// console.log(addDataToId(data[0], '2', 'test'));

// const addDataToId=(obj, id, children)=>{
//     for (let key in obj) {
//         if(key==id){
//            obj[key].children = [...(obj[key].children || []), ...children];
//         } else {
//             console.log(obj[key].children)
//             addDataToId( obj[key].children[0] || [], id, children)
//         }
//     }
//     return obj;
// }


/////THIS WORKS
// const addDataToId=(arr, id, newChild) => {
//     const counter = []
//     let newKey = -Infinity;
//     console.log(arr);
//     arr.forEach(i=>{
//         // console.log(i)
//         for (const key in i) {
//             newKey = Math.max(key, newKey)
//             console.log(newKey)
//           console.log(key)
//           if (key === id) {
    
//             i[id]['children'].push(newChild);
//             return
//           }
//           else {
//             addDataToId (i[key]['children'], id, newChild)
//           }
//         }
//         // console.log(id)
//         // if(id in i){
//         //     console.log(i[id].children)
//         //    i[id]['children'].push(newChild);
//         // } else {
//         //     console.log(i.children)
//         //     addDataToId(i.children, id, newChild)
//         // }
//     })
//     console.log(newKey)
//     return arr;
// }

//// TRYING NEW
const addDataToId=(arr, id, newChild) => {
  let foundNode;
  let newKey = 0;
  function helper (arr, id) {
    arr.forEach(i=>{
      // console.log(i)
      for (const key in i) {
        newKey = Math.max(key, newKey)
        console.log(newKey)
        console.log(key)
        if (key === id) {
          foundNode = i[key];
        }
        helper (i[key]['children'], id)
      }
    })
  }

  helper(arr, id)
  newKey++
  if (foundNode) {
    foundNode.children.push({[newKey]: newChild})
  } else return undefined;
  
  return arr
  
}

console.log(addDataToId(data, '2',
    {
    label: 'test',
    children: [],
    }
  ))

console.log(addDataToId(data, '2', 
{
    label: 'test2',
    children: [],
  }))

console.log(data[0][1].children[0][2]
  )