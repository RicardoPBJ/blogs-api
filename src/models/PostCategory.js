module.exports = (sequelize, DataTypes) => {
	const PostCategoryTable = sequelize.define('PostCategory', {
		postId: {
			type: DataTypes.INTEGER,
      field: 'post_id',
			allowNull: false,
      foreignKey: true,
		},
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      foreignKey: true,
    },
  }, {
		tableName: 'posts_categories',
		underscored: true,
		timestamps: false,
	});

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherkey: 'categoryId',
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherkey: 'postId',
      as: 'posts',
    });
  }

	return PostCategoryTable;
};