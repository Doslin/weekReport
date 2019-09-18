        @Data
        public class EducationWeekReportData {
        private Integer id;
        private Integer weekReportId;
        //学习概况1-本周完成任务数量
        private Integer taskNumber;
        //学习概况1-本周完成任务数量超越百分比
        private Integer taskNumberSurpass;
        //学习概况1-本周完成题数
        private Integer questionNumber;
        //学习概况1-本周完成题数超越百分比
        private Integer questionNumberSurpass;
        //学习概况1-本周学习时间
        private Integer totalTime;
        //学习概况1-本周学习时间超越百分比
        private Integer totalTimeSurpass;
        //学习概况1-当前任务天数
        private Integer currentTaskDays;
        //学习概况1-当前任务进度
        private Integer currentTaskProgress;
        //学习概况1-计划任务进度
        private Integer planTaskProgress;
        //学习概况2-学习作文数量
        private Integer compositionNum;
        //每日任务1-本周任务完成题数
        private Integer taskQuestionNumber;
        //每日任务1-本周任务完成题数正确率
        private Integer taskQuestionCorrect;
        //每日任务1-本周任务完成题数正确率比上周提高百分比
        private Integer correctHigherThanLastweek;
        //每日任务1-本周各题型正确率图表json
        private String taskQuestionNumberJson;
        //每日任务1-本周正确率最高题型
        private Integer highestCorrectType;
        //每日任务1-本周最高正确率
        private Integer highestCorrect;
        //每日任务1-本周正确率最低题型
        private Integer lowestCorrectType;
        //每日任务1-本周最低正确率
        private Integer lowestCorrect;
        //每日任务2-本周任务观看视频数量
        private Integer taskVideoNumber;
        //每日任务2-本周任务学习单词数量
        private Integer taskWordNumber;
        //每日任务2-本周任务掌握单词数量
        private Integer taskWordMasterNumber;
        //每日任务2-任务未掌握单词数量
        private Integer taskWordNotMasterNumber;
        //每日任务2-本周任务单词掌握率
        private Integer taskWordMasterRate;
        //每日任务2-任务单词掌握率比上周增长
        private Integer taskWordMasterRateIncrease;
        //每日任务2-本周任务单词总量
        private Integer taskTotalWordNumber;
        //每日任务2-累计学习任务单词数量
        private Integer totalWordNumber;
        //每日任务2-累计任务单词掌握数量
        private Integer totalWordMasterNumber;
        //每日任务2-本周任务单词掌握率超越百分比
        private Integer taskWordMasterRateSurpass;
        //历年真题-本周完成试卷数量
        private Integer paperNum;
        //历年真题-本周平均分
        private Integer averageScore;
        //历年真题-平均分比上周增加
        private Integer increaseAverageScore;
        //历年真题-各周平均分图表json
        private String averageScoreJson;
        //历年真题-本周各套试卷详情json
        private String paperDetailsJson;
        //专项练习-本周作答题数
        private Integer practiceQuestionNum;
        //专项练习-本周作答综合正确率
        private Integer practiceQuestionCorrect;
        //专项练习-本周作答综合正确率比上周增加
        private Integer practiceQuestionCorrectIncrease;
        //专项练习-本周作答各题型正确率图表json
        private String practiceQuestionCorrectJson;
        //专项练习-本周作答综合正确率超越百分比
        private Integer practiceQuestionCorrectSurpass;
        //学习效率分析-学习效率图表json
        private String efficiencyJson;
        //学习效率分析-正确率最高类型（包含强化练习和任务）
        private Integer efficiencyHighestCorrectType;
        //学习效率分析-正确率最低类型（包含强化练习和任务）
        private Integer efficiencyLowestCorrectType;
        }
