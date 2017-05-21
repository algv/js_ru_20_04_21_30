import {createSelector} from 'reselect'

export const articlesGetter = state => state.articles
export const filtersGetter = state => state.filters
export const commentsGetter = state => state.comments
export const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    console.log('---', 'recompute filtrated articles')

    const {selected, dateRange: {from, to}} = filters

    const filtered = Object.keys(articles).filter(id => {
        const published = Date.parse(articles[id].date)
        return (!selected.length || selected.includes(id)) &&
            (!from || !to || (published > from && published < to))
    })

    let res = {}
    Object.keys(articles).map(id => {if(filtered.includes(id)) res = {...res, [id]: articles[id]}})

    return res
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', 'find comment', id)

    return comments[id]
})