const articleIDDOM = document.querySelector('.article-edit-id')
const articleNameDOM = document.querySelector('.article-edit-name')
const articleCompletedDOM = document.querySelector('.article-edit-completed')
const editFormDOM = document.querySelector('.single-article-form')
const editBtnDOM = document.querySelector('.article-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName

const showArticle = async () => {
  try {
    const {
      data: { article },
    } = await axios.get(`/api/v1/articles/${id}`)
    const { _id: articleID, completed, title } = article

    articleIDDOM.textContent = articleID
    articleNameDOM.value = title
    tempName = title
    if (completed) {
      articleCompletedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showArticle()

editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...'
  e.preventDefault()
  try {
    const articleName = articleNameDOM.value
    const articleCompleted = articleCompletedDOM.checked

    const {
      data: { article },
    } = await axios.patch(`/api/v1/articles/${id}`, {
      title: articleName,
      completed: articleCompleted,
    })

    const { _id: articleID, completed, title } = article

    articleIDDOM.textContent = articleID
    articleNameDOM.value = title
    tempName = title
    if (completed) {
      articleCompletedDOM.checked = true
    }
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, edited article`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error(error)
    articleNameDOM.value = tempName
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  editBtnDOM.textContent = 'Edit'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})
