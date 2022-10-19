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


const addDataToId=(arr, id, newChild) => {
  let foundNode;
  let newKey = 0;
  function helper (arr, id) {
    arr.forEach(i=>{
      // console.log(i)
      for (const key in i) {
        newKey = Math.max(key, newKey)
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