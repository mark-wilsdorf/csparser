const queryString = `
    select sc.Name, cont.Content from SysSchemaContent cont
    left join SysSchema sc
    on sc.Id = cont.SysSchemaId
    where sc.ManagerName = 'SourceCodeSchemaManager'`;

const sqlConfig = {
    user: "msp",
    password: "msp",
    server: "localhost",
    database: "test44",
    port: 1433,
    pool: {
        max: 500,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

const accessModifiers = {
    private: "private",
    public: "public",
    protected: "protected",
    internal: "internal",
    protectedInternal: "protected internal",
    privateProtected: "private protected"
};

const classType = {
    default: "",
    abstract: "abstract",
    sealed: "sealed",
    static: "static",
    partial: "partial"
};

const methodType = {

};

module.exports = {
    query: queryString,
    config: sqlConfig,
    access: accessModifiers,
    classType: classType,
    methodType: methodType
};