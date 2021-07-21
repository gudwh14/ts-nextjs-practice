// Next.js 에서 Jest 를 이용한 테스트 하기
// 패키지 설치 npm install --save-dev jest @testing-library/jest-dom @testing-library/react babel-jest

/**
 * Jest 환경파일 설정
 */

module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    verbose : true,
    preset: "ts-jest",
    transform: {
        "^.+\\.ts": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tsconfig.jest.json"
        }
    }
};