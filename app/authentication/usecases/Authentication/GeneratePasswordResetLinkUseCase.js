const tokens = require('../../tokens');
const userRepo = require('../../../user/repository/user_repo');
const CustomError = require('../../../../errors/error');

class GeneratePasswordResetLinkUseCase {
	#tokens = tokens;

	#userRepo = userRepo;

	async execute(email) {
		const user = await this.#userRepo.findOneByFields({ email });
		if (!user) throw new CustomError('user does not exist', 404);
		const token = await this.#tokens.generateTokens({ email }, 600);
		return `https://qcexpress.co/reset?token=${token}`;
	}
}

module.exports = Object.freeze(new GeneratePasswordResetLinkUseCase());
