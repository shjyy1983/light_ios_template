module.exports = {
    build(config, merge, webpack) {
        return merge(config, {
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'zepto-webpack'
                })
            ]
        })
    }
}