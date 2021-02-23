
// Cargar Webpack
const webpack = require('webpack');

// Cargar el plugin que genera el html principal mediante una plantilla
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Cargar el plugin para copiar la aplicación a la carpeta build
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Bibliotec path de node para manipular rutas de archivo.
const path = require('path');

// PostCSS support
// const postcssImport = require('postcss-easy-import');
// const precss = require('precss');
// const autoprefixer = require('autoprefixer');

// Declaración de variables con las rutas a emplear
const APP = path.join(__dirname, 'app'); // Ruta del código fuente, donde se encuentra el Componente Raíz
const BUILD = path.join(__dirname, 'build'); // Ruta de destino de la aplicación construida.
const STYLE = path.join(__dirname, 'app/estilos.css'); // Ruta del archivo css raiz que importa los demás. 
const PUBLIC = path.join(__dirname, 'app/public'); // Ruta de archivos estáticos que se copian tal cual al directorio de destino.
const TEMPLATE = path.join(__dirname, 'app/templates/index_default.html'); // Ruta de la plantilla del html principal.
const NODE_MODULES = path.join(__dirname, 'node_modules'); // Ruta de archivos importados con npm, para desde ahí compiarlos a la carpeta de destino

// Variables de ip y puerto de desarrollo, hay variables de entorno se emplearan esas. 
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

// Se exporta el módulo con la configuración de webpack
module.exports = {
    // -------- configuración de entrada, salida y extensiones de archivo -------
    // Ubicación de los archivos js y css de entrada
    entry: { 
        app: APP,
        style: STYLE
    },
    // Carpeta de salida y nombre del "bundle" de javascript generado.
    output: { 
        path: BUILD,
        filename: '[name].js',
        publicPath: '/'
    },
    // Extensiones de archivo que se deben tomar de la carpeta de entrada
    resolve: { 
        extensions: ['.js', '.jsx', '.css']
    },
    // Cargadores para el procesado de diferentes tipos de archivo
    module: {
        rules: [
            // Indicamos que los archivos .jsx se compilan con babel y se guardan en cache
            // para ahorrar tiempo de transpilación.
            {   
                // Extensión
                test: /\.jsx?$/, 
                // Cargador
                loaders: ['babel-loader?cacheDirectory'], 
                // Ruta de origen
                include: APP 
            },
            {
                test: /\.css$/,
                //Cargador style y css
                loaders: ['style-loader', 'css-loader'],
                include: APP
            }
            // El cargador JSON ya no es necesario (webpack 3.10)
        ]
    },
    // Configure PostCSS plugins
    // postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
    //     return [
    //         postcssImport({
    //             addDependencyTo: webpack
    //         }),
    //         precss,
    //         autoprefixer({ browsers: ['last 2 versions'] })
    //     ];
    // },
    // Herramienta para mapeo de elementos en depuración.
    devtool: 'eval-source-map',
    // Configuración del servidor de depuración de webpack
    devServer: { 
        // Inidica que en desarrollo si se pide un recurso inexistente (404) que se retorne el index.html
        historyApiFallback: true,
        // Permite la recarga en caliente
        hot: true,
        // Añade al bundle del cliente un módulo que recarga la página si el código cambia.
        inline: true,
        // Indica como reportar el grado de avance de la compilación
        progress: true,
        // Indica que solamente muestre información en consola de los errores
        stats: 'errors-only',
        host: HOST,
        port: PORT
    },
    // Declaración de plugins empleados en el proceso de desarrollo
    plugins: [
        // Declaración dentro de Node de una variable de entorno para
        // indicar a Babel que estamos en un entorno de desarrollo
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // Activación del módulo de recarga en caliente del navegador con los cambios registrados.
        new webpack.HotModuleReplacementPlugin(),
        // Módulo de copia de los archivos estáticos a la carpeta de destino de compilación.
        new CopyWebpackPlugin([
            { from: PUBLIC, to: BUILD }
        ],
            {
                ignore: [
                    // Archivos que no se deben copiar.
                    '.DS_Store'
                ]
            }
        ),
        // Generación del html principal a partir de la plantilla
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            // Ubicación donde se desea que se inserte el js, en este caso al final del body.
            inject: 'body'
        })
    ]
};
