import { Category, ActivityType } from '..';

export interface DetailApiActivity {
    activityId: number,
    activityName: string,
    userProfileId: number,
    isMultiSportParent: boolean,
    activityTypeDTO: {
        typeId: number,
        typeKey: ActivityType,
        parentTypeId: number,
        sortOrder: number,
    },
    eventTypeDTO: {
        typeId: number,
        typeKey: Category,
        sortOrder: number,
    },
    accessControlRuleDTO: {
        typeId: number,
        typeKey: string,
    },
    timeZoneUnitDTO: {
        unitId: number,
        unitKey: string,
        factor: number,
        timeZone: string,
    },
    metadataDTO: {
        isOriginal: boolean,
        deviceApplicationInstallationId: number,
        agentApplicationInstallationId: null,
        agentString: null,
        fileFormat: {
            formatId: number,
            formatKey: string,
        },
        associatedCourseId: null,
        lastUpdateDate: string,
        uploadedDate: string,
        videoUrl: null,
        hasPolyline: boolean,
        hasChartData: boolean,
        hasHrTimeInZones: boolean,
        hasPowerTimeInZones: boolean,
        userInfoDto: {
            userProfilePk: number,
            displayname: string,
            fullname: string,
            profileImageUrlLarge: null,
            profileImageUrlMedium: null,
            profileImageUrlSmall: null,
            userPro: boolean,
        },
        chartAvailability: {
            showDistance: boolean,
            showDuration: boolean,
            showElevation: boolean,
            showHeartRate: boolean,
            showMovingDuration: boolean,
            showMovingSpeed: boolean,
            showSpeed: boolean,
            showTimestamp: boolean,
        },
        childIds: [],
        sensors: [{ manufacturer: string }],
        activityImages: [],
        manufacturer: string,
        diveNumber: null,
        lapCount: number,
        associatedWorkoutId: null,
        isAtpActivity: null,
        deviceMetaDataDTO: {
            deviceId: null,
            deviceTypePk: number,
            deviceVersionPk: number,
        },
        gcj02: boolean,
        autoCalcCalories: boolean,
        favorite: boolean,
        elevationCorrected: boolean,
        manualActivity: boolean,
        personalRecord: boolean,
    },
    summaryDTO: {
        startTimeLocal: string,
        startTimeGMT: string,
        startLatitude: number,
        startLongitude: number,
        distance: number,
        duration: number,
        movingDuration: number,
        elapsedDuration: number,
        elevationGain: number,
        elevationLoss: number,
        maxElevation: number,
        minElevation: number,
        averageSpeed: number,
        averageMovingSpeed: number,
        maxSpeed: number,
        calories: number,
        averageHR: number,
        maxHR: number,
        endLatitude: number,
        endLongitude: number,
        maxVerticalSpeed: number,
    },
    locationName: string,
}

export interface ListApiActivity {
    activityId: number,
    activityName: string,
    description: null,
    startTimeLocal: string,
    startTimeGMT: string,
    activityType: {
        typeId: number,
        typeKey: ActivityType,
        parentTypeId: number,
        sortOrder: number,
    },
    eventType: {
        typeId: number,
        typeKey: Category,
        sortOrder: number,
    },
    comments: null,
    parentId: null,
    distance: number,
    duration: number,
    elapsedDuration: number,
    movingDuration: number,
    elevationGain: number,
    elevationLoss: number,
    averageSpeed: number,
    maxSpeed: number,
    startLatitude: number,
    startLongitude: number,
    hasPolyline: boolean,
    ownerId: number,
    ownerDisplayName: string,
    ownerFullName: string,
    ownerProfileImageUrlSmall: null,
    ownerProfileImageUrlMedium: null,
    ownerProfileImageUrlLarge: null,
    ownerProfilePk: null,
    calories: number,
    averageHR: number,
    maxHR: number,
    averageRunningCadenceInStepsPerMinute: null,
    maxRunningCadenceInStepsPerMinute: null,
    averageBikingCadenceInRevPerMinute: null,
    maxBikingCadenceInRevPerMinute: null,
    averageSwimCadenceInStrokesPerMinute: null,
    maxSwimCadenceInStrokesPerMinute: null,
    averageSwolf: null,
    activeLengths: null,
    steps: null,
    conversationUuid: null,
    conversationPk: null,
    numberOfActivityLikes: null,
    numberOfActivityComments: null,
    likedByUser: null,
    commentedByUser: null,
    activityLikeDisplayNames: null,
    activityLikeFullNames: null,
    requestorRelationship: null,
    userRoles: string[],
    privacy: {
        typeId: number,
        typeKey: string,
    },
    userPro: boolean,
    courseId: null,
    poolLength: null,
    unitOfPoolLength: null,
    hasVideo: boolean,
    videoUrl: null,
    timeZoneId: number,
    beginTimestamp: number,
    sportTypeId: number,
    avgPower: null,
    maxPower: null,
    aerobicTrainingEffect: null,
    anaerobicTrainingEffect: null,
    strokes: null,
    normPower: null,
    leftBalance: null,
    rightBalance: null,
    avgLeftBalance: null,
    max20MinPower: null,
    avgVerticalOscillation: null,
    avgGroundContactTime: null,
    avgStrideLength: null,
    avgFractionalCadence: null,
    maxFractionalCadence: null,
    trainingStressScore: null,
    intensityFactor: null,
    vO2MaxValue: null,
    avgVerticalRatio: null,
    avgGroundContactBalance: null,
    lactateThresholdBpm: null,
    lactateThresholdSpeed: null,
    maxFtp: null,
    avgStrokeDistance: null,
    avgStrokeCadence: null,
    maxStrokeCadence: null,
    workoutId: null,
    avgStrokes: null,
    minStrokes: null,
    deviceId: number,
    minTemperature: null,
    maxTemperature: null,
    minElevation: number,
    maxElevation: number,
    avgDoubleCadence: null,
    maxDoubleCadence: null,
    summarizedExerciseSets: [],
    maxDepth: null,
    avgDepth: null,
    surfaceInterval: null,
    startN2: null,
    endN2: null,
    startCns: null,
    endCns: null,
    summarizedDiveInfo: {
        weight: null,
        weightUnit: null,
        visibility: null,
        visibilityUnit: null,
        surfaceCondition: null,
        current: null,
        waterType: null,
        waterDensity: null,
        summarizedDiveGases: [],
        totalSurfaceTime: number,
    },
    activityLikeAuthors: null,
    avgVerticalSpeed: null,
    maxVerticalSpeed: number,
    floorsClimbed: null,
    floorsDescended: null,
    manufacturer: null,
    diveNumber: null,
    locationName: string,
    bottomTime: null,
    lapCount: number,
    endLatitude: null,
    endLongitude: null,
    minAirSpeed: null,
    maxAirSpeed: null,
    avgAirSpeed: null,
    avgWindYawAngle: null,
    minCda: null,
    maxCda: null,
    avgCda: null,
    avgWattsPerCda: null,
    flow: null,
    grit: null,
    jumpCount: null,
    caloriesEstimated: null,
    caloriesConsumed: null,
    waterEstimated: null,
    waterConsumed: null,
    maxAvgPower_1: null,
    maxAvgPower_2: null,
    maxAvgPower_5: null,
    maxAvgPower_10: null,
    maxAvgPower_20: null,
    maxAvgPower_30: null,
    maxAvgPower_60: null,
    maxAvgPower_120: null,
    maxAvgPower_300: null,
    maxAvgPower_600: null,
    maxAvgPower_1200: null,
    maxAvgPower_1800: null,
    maxAvgPower_3600: null,
    maxAvgPower_7200: null,
    maxAvgPower_18000: null,
    excludeFromPowerCurveReports: null,
    totalSets: number,
    totalReps: number,
    maxRespirationRate: null,
    avgRespirationRate: null,
    trainingEffectLabel: null,
    activityTrainingLoad: null,
    purposeful: boolean,
    favorite: boolean,
    decoDive: null,
    elevationCorrected: boolean,
    atpActivity: boolean,
    pr: boolean,
    autoCalcCalories: boolean,
    parent: boolean,
}

export interface GearResponse {
    gearPk: number,
    uuid: string,
    userProfilePk: number,
    gearMakeName: string,
    gearModelName: string,
    gearTypeName: string,
    gearStatusName: string,
    displayName: string,
    customMakeModel: string,
    imageNameLarge: null,
    imageNameMedium: null,
    imageNameSmall: null,
    dateBegin: string,
    dateEnd: null,
    maximumMeters: number,
    notified: boolean,
    createDate: string,
    updateDate: string,
}

export interface ActivityPoints {
    activityId: number,
    measurementCount: number,
    metricsCount: number,
    metricDescriptors: {
        metricsIndex: number,
        key: string,
        unit: {
            id: 40,
            key: string,
            factor: number,
        },
    }[],
    activityDetailMetrics: {
        metrics: number[],
    }[],
}
