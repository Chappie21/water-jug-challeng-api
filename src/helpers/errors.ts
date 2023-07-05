export const errors = {
    problemSolver: {
        P0001: {
            errorCode: 'P0001',
            message: 'Incomplete fields to solve the problem... :(, fields bucketX (number), bucketY (number), and goalZ (number) must be provided.'
        },
        P0002: {
            errorCode: 'P0002',
            message: 'The provided quantities must be integers.'
        },
        P0003: {
            errorCode: 'P0003',
            message: 'The provided quantities must be positive.'
        },
        P0004: {
            errorCode: 'P0004',
            message: 'The problem has no solution.'
        }
    },
    serverError : {
        SE0001: {
            errorCode: 'SE0001',
            message: 'Server error... :('
        }
    }
}