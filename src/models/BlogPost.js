module.exports = (sequelize, DataTypes) => {
	const BlogPostTable = sequelize.define('BlogPost', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		title: DataTypes.STRING,
		content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },

    published: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
		tableName: 'blog_posts',
		underscored: true,
		timestamps: false,
	});

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }

	return BlogPostTable;
};