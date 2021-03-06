const config = {
    /**
     * 后台运行的端口
     */
    port: 3001,
    /**
     * websocket运行的端口
     */
    wsPort: 3002,
    /**
     * 默认的分页查询的数量
     */
    commonPageSize: 6,
    /**
     * 数据库配置
     */
    database: {
        database: 'hubu_wall',
        user: 'root',
        password: '123456',
        port: '3306',
        host: 'localhost'
    }
}

module.exports = config
