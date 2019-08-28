const queryString = `
    select sc.Name, cont.Content from SysSchemaContent cont
    left join SysSchema sc
    on sc.Id = cont.SysSchemaId
    where sc.ManagerName = 'SourceCodeSchemaManager'`;

module.exports = {
    query: queryString,
};