import Mock from 'mockjs'
const tasksData = Mock.mock({
  'tasks|5-10': [{
    'id|+1': 1,
    'title': '@ctitle(5, 10)',
    'description': '@csentence(10, 20)',
    'priority': () => {
      var index = Math.floor(Math.random() * 2)
      return ['low', 'medium', 'high'][index]
    },
    'status': () => {
      var index = Math.floor(Math.random() * 2)
      return ['pending', 'in-progress', 'completed'][index]
    }
  }],
})
console.log('task data mock', tasksData)
export const getTasks = () => tasksData.tasks